// Only the Pages build gets an HTML-level CSP, since Pages cannot set custom response headers.
import {readFileSync,writeFileSync} from 'node:fs'
import assert from 'node:assert/strict'
const root='dist'
const manifest=JSON.parse(readFileSync(root+'/manifest.webmanifest','utf8'))
assert.equal(manifest.scope,'/spyder-leaderboard/everwell/')
const header=JSON.parse(readFileSync('vercel.json','utf8')).headers.find(r=>r.source==='/(.*)').headers.find(h=>h.key==='Content-Security-Policy').value
const policy=header.replace("; frame-ancestors 'none'","")
const html=readFileSync(root+'/index.html','utf8')
assert(html.includes('<head>'))
assert(!html.includes('http-equiv="Content-Security-Policy"'))
writeFileSync(root+'/index.html',html.replace('<head>','<head>\n    <meta http-equiv="Content-Security-Policy" content="'+policy.replaceAll('&','&amp;').replaceAll('"','&quot;')+'" />'))
