// Vite may emit new URL() assets before it removes development-only code.
// Compare original bytes as well as base64, since small SVGs may be inlined.
import assert from 'node:assert/strict'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const source = 'src/assets/visual-review'
const output = readdirSync('dist/assets').map(name => readFileSync(join('dist/assets', name)))
for (const name of readdirSync(source).filter(name => name.endsWith('.svg'))) {
  const bytes = readFileSync(join(source, name))
  assert(!output.some(file => file.includes(bytes) || file.includes(bytes.toString('base64'))),
    `Development illustration shipped in production: ${name}`)
}
