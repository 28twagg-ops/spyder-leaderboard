// Package the same production React app as a self-contained browser download.
import { build } from 'vite'
import react from '@vitejs/plugin-react'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const output = await build({
  configFile: false,
  mode: 'portable',
  publicDir: false,
  plugins: [react()],
  build: {
    write: false,
    modulePreload: false,
    assetsInlineLimit: Number.MAX_SAFE_INTEGER,
    rolldownOptions: { output: { codeSplitting: false } },
  },
})
const files = output.output
const script = files.find(file => file.type === 'chunk' && file.isEntry)
const css = files.find(file => file.fileName.endsWith('.css'))
let html = String(files.find(file => file.fileName === 'index.html').source)
html = html.replace(/<script type="module"[^>]* src="[^"]+"[^>]*><\/script>/, '')
  .replace(/<link rel="stylesheet"[^>]*>/, () => '<style>' + css.source + '</style>')
  .replace(/<link rel="apple-touch-icon"[^>]*>/, '')
  .replace('/favicon.svg', 'data:image/svg+xml;base64,' + (await readFile('public/favicon.svg')).toString('base64'))
const licenses = await Promise.all(['Fraunces', 'Manrope'].map(name => readFile('public/licenses/' + name + '.txt', 'utf8')))
html = html.replace('</body>', () => '<script type="text/plain" id="font-licenses">' + licenses.join('\n') +
  '</script><script type="module">' + script.code.replace(/<\/script/gi, '<\\/script') + '</script></body>')
const dest = path.resolve('dist-portable/Everwell.html')
await mkdir(path.dirname(dest), { recursive: true })
await writeFile(dest, html)
console.log(dest)
