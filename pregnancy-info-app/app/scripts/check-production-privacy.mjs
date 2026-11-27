// Verify the actual built entry and deploy policy. This is static coverage, not a network trace.
import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { resolve, sep } from 'node:path'
import { JSDOM } from 'jsdom'
const headers=Object.fromEntries(JSON.parse(readFileSync('vercel.json','utf8')).headers.find(rule=>rule.source==='/(.*)').headers.map(h=>[h.key.toLowerCase(),h.value]))
const csp=new Map(headers['content-security-policy'].split(';').map(part=>{const [key,...values]=part.trim().split(/\s+/);return [key,values]}))
for(const [directive,expected] of Object.entries({'default-src':["'self'"],'connect-src':["'self'"],'worker-src':["'self'"],'frame-src':["'none'"],'frame-ancestors':["'none'"],'form-action':["'none'"],'object-src':["'none'"]}))assert.deepEqual(csp.get(directive),expected,directive)
assert.equal(headers['referrer-policy'],'no-referrer')
assert.equal(headers['x-content-type-options'],'nosniff')
assert.match(headers['permissions-policy'],/camera=\(\), microphone=\(\), geolocation=\(\)/)
const scriptSources=csp.get('script-src')
assert(scriptSources.includes("'self'")&&!scriptSources.includes("'unsafe-inline'")&&!scriptSources.includes("'unsafe-eval'"))
assert(scriptSources.every(value=>value==="'self'"||/^'sha256-[A-Za-z0-9+/=]+'$/.test(value)))
const html=readFileSync('dist/index.html','utf8')
const dom=new JSDOM(html)
const doc=dom.window.document
const root=resolve('dist')
const origin='https://everwell.invalid'
function localAsset(value){
 const url=new URL(value,origin)
 assert.equal(url.origin,origin,'External automatic asset: '+value)
 const file=resolve(root,'.'+decodeURIComponent(url.pathname))
 assert(file.startsWith(root+sep)&&existsSync(file),'Missing built asset: '+url.pathname)
}
let inlineScripts=0,localAssets=0
for(const script of doc.querySelectorAll('script')){
 if(script.hasAttribute('src')){localAsset(script.getAttribute('src'));localAssets++}
 else{
  const hash="'sha256-"+createHash('sha256').update(script.textContent).digest('base64')+"'"
  assert(scriptSources.includes(hash),'Unapproved inline script: '+hash)
  inlineScripts++
 }
}
for(const el of doc.querySelectorAll('link[href],img[src],iframe[src],source[src],video[src],audio[src]')){
 const value=el.getAttribute('href')??el.getAttribute('src');localAsset(value);localAssets++
}
for(const el of doc.querySelectorAll('*'))for(const attr of el.attributes)assert(!/^on/i.test(attr.name),'Inline event handler: '+attr.name)
assert(existsSync('dist/sw.js'),'Offline service worker missing')
assert(existsSync('dist/manifest.webmanifest'),'App manifest missing')
dom.window.close()
console.log('Production privacy policy checks passed: '+JSON.stringify({inlineScripts,localAssets,externalConnections:'same-origin only',serviceWorker:true,manifest:true}))
