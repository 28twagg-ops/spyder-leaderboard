/**
 * Actual built-app browser QA. Run locally, with Playwright already installed.
 * No credentials, user profiles, external services or automatic package installation.
 * Captures only synthetic test sessions. Screenshots are local and ignored by Git.
 */
import assert from 'node:assert/strict'
import { createServer } from 'node:http'
import { createRequire } from 'node:module'
import { readFile, mkdir, writeFile, stat } from 'node:fs/promises'
import { resolve, join, extname, sep } from 'node:path'
import { spawnSync } from 'node:child_process'

const app = resolve(process.argv[2] || process.cwd())
const dist = join(app, 'dist')
const artifacts = join(app, 'qa-artifacts.local')
await stat(join(dist, 'index.html'))
await mkdir(artifacts, { recursive:true })
const require = createRequire(join(app, 'package.json'))
let playwright
try { playwright = require('playwright') }
catch { throw new Error('Playwright is not installed locally. Review and install it before running this optional PC test; no automatic installation is performed.') }
const mime = { '.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.webmanifest':'application/manifest+json','.svg':'image/svg+xml','.png':'image/png','.woff2':'font/woff2','.ico':'image/x-icon' }
const securityHeaders=Object.fromEntries(JSON.parse(await readFile(join(app,'vercel.json'),'utf8')).headers.find(rule=>rule.source==='/(.*)').headers.map(h=>[h.key,h.value]))
const server = createServer(async (req,res)=>{
 try {
  const url = new URL(req.url || '/', 'http://127.0.0.1')
  let file = resolve(dist, '.'+decodeURIComponent(url.pathname))
  if(file!==dist&&!file.startsWith(dist+sep)){res.writeHead(403).end();return}
  if(url.pathname==='/' || !extname(file))file=join(dist,'index.html')
  const content = await readFile(file)
  res.writeHead(200,{'Content-Type':mime[extname(file)]||'application/octet-stream','Cache-Control':'no-cache',...securityHeaders})
  res.end(content)
 }catch{res.writeHead(404).end()}
})
await new Promise((resolveListen,reject)=>{server.once('error',reject);server.listen(0,'127.0.0.1',resolveListen)})
const origin='http://127.0.0.1:'+server.address().port
const git=spawnSync('git',['rev-parse','HEAD'],{cwd:app,encoding:'utf8'})
const report={commit:git.status===0?git.stdout.trim():null,environment:'local built React app; Chromium emulation, not physical iPhone',started:new Date().toISOString(),measurements:[],checks:[],failures:[],externalRequests:[],pageErrors:[]}
const sizes=[{width:390,height:844},{width:390,height:700},{width:320,height:640},{width:430,height:932},{width:1024,height:768}]
const routes=[
 ['home','/'],['journey','/timeline'],['preparation','/timeline/preconception'],['pregnancy','/timeline/pregnancy'],
 ['week-22','/timeline/week/22'],['phase','/timeline/preconception/PRE04'],['explore','/explore'],
 ['body','/explore/body'],['child-collection','/explore/baby-child'],['nutrition','/explore/nutrition'],
 ['search','/library'],['saved','/saved'],['reader','/research/EV-ART-018'],['urgent-reader','/research/EV-ART-037'],['evidence','/evidence'],
 ['outcomes','/evidence/outcomes'],['nutrients','/evidence/nutrients'],['visuals','/visuals'],
 ['settings','/settings'],['urgent','/urgent'],['install','/install'],['not-found','/unknown-route']
]
let browser
async function check(name,fn){try{await fn();report.checks.push({name,pass:true})}catch(error){report.checks.push({name,pass:false});report.failures.push({name,error:String(error)})}}
async function open(page,path){await page.goto(origin+path,{waitUntil:'domcontentloaded'});await page.locator('main h1').first().waitFor();await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(100)}
async function shot(page,label,size,setup=false){
 const metrics=await page.evaluate(({setup})=>{
  const rect=el=>el?.getBoundingClientRect()
  const nav=rect(document.querySelector('.bottom-nav'))
  const rows=[...document.querySelectorAll('.ref-row')]
  const dialog=rect(document.querySelector('dialog[open]'))
  const skip=rect(document.querySelector('.sheet-skip'))
  return {viewport:{width:innerWidth,height:innerHeight},scrollHeight:document.documentElement.scrollHeight,scrollWidth:document.documentElement.scrollWidth,navTop:nav?.top,navBottom:nav?.bottom,readingBottom:rows.length?rect(rows.at(-1))?.bottom:null,dialogTop:dialog?.top,dialogBottom:dialog?.bottom,skipBottom:skip?.bottom,setup,
   shortControls:[...document.querySelectorAll('button,.nav-link,.ref-tool,.ref-row')].filter(e=>e.getClientRects().length&&getComputedStyle(e).visibility!=='hidden').map(e=>({name:(e.getAttribute('aria-label')||e.textContent||'').trim().slice(0,80),height:rect(e).height,width:rect(e).width})).filter(x=>x.height<43.5||x.width<43.5)}
 },{setup})
 const file=label+'-'+size.width+'x'+size.height+'.png'
 await page.screenshot({path:join(artifacts,file),animations:'disabled',fullPage:false})
 report.measurements.push({file,...metrics})
 await check(file+' horizontal overflow',()=>assert.ok(metrics.scrollWidth<=size.width+1))
 if(setup)await check(file+' dialog/skip reachable',()=>{assert.ok(metrics.dialogTop>=-1);assert.ok(metrics.dialogBottom<=size.height+1);assert.ok(metrics.skipBottom<=size.height+1)})
 else await check(file+' fixed urgent navigation',()=>{assert.ok(metrics.navTop>=0&&metrics.navBottom<=size.height+1)})
 if(label==='home'&&size.width===390&&size.height===844)await check('Home primary reading rows visible at 390x844',()=>assert.ok(metrics.readingBottom!=null&&metrics.readingBottom<=metrics.navTop+1))
}
try{
 browser=await playwright.chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})})
 for(const size of sizes){
  const context=await browser.newContext({viewport:size,screen:size,deviceScaleFactor:1,hasTouch:size.width<500,isMobile:size.width<500,serviceWorkers:'allow'})
  const page=await context.newPage()
  page.on('pageerror',error=>report.pageErrors.push(String(error)))
  page.on('request',request=>{const url=request.url();if(/^https?:/.test(url)&&!url.startsWith(origin+'/'))report.externalRequests.push(new URL(url).origin)})
  await context.route('**/*',route=>route.request().url().startsWith(origin+'/')||!/^https?:/.test(route.request().url())?route.continue():route.abort())
  try{
   await open(page,'/')
   await page.getByRole('dialog').waitFor()
   await shot(page,'setup',size,true)
   await page.getByRole('button',{name:/Preparing for pregnancy/}).click()
   await shot(page,'setup-period',size,true)
   await page.getByRole('button',{name:/6–3 months before/}).click()
   await page.getByRole('dialog').waitFor({state:'hidden'})
   await check('phase persistence '+size.width+'x'+size.height,async()=>{
    const prefs=await page.evaluate(()=>JSON.parse(localStorage.getItem('everwell.local.prefs.v1')||'{}'))
    assert.equal(prefs.selectedPhaseId,'PRE04')
   })
   for(const [label,path] of routes){
    await open(page,path);await shot(page,label,size)
    if(label==='week-22'){
     await check('Week 22 mother/baby first screen '+size.width+'x'+size.height,async()=>{
      const group=page.getByRole('group',{name:'Whose changes are shown?'})
      for(const [subject,heading] of [['Mother','Your skin is stretching'],['Baby','A fine layer of hair']]){
       await group.getByRole('button',{name:new RegExp(subject)}).click()
       await page.getByRole('heading',{name:heading}).waitFor()
       await page.evaluate(()=>window.scrollTo(0,0))
       await shot(page,'week22-'+subject.toLowerCase(),size)
       if(size.width===390&&size.height>=700){
        const m=await page.evaluate(()=>({text:document.querySelector('.pilot-concept-text>p').getBoundingClientRect().bottom,nav:document.querySelector('.bottom-nav').getBoundingClientRect().top}))
        assert.ok(m.text<=m.nav+1,'The primary explanation is below navigation')
       }
      }
     })
    }
   }
   if(size.width===390&&size.height===844){
    await check('search result and contextual Back',async()=>{
     await open(page,'/library');await page.getByLabel('Search articles').fill('morning sickness')
     await page.getByRole('link',{name:/Nausea and traditional remedies/}).click()
     await page.getByRole('button',{name:'Back',exact:true}).click()
     assert.equal(await page.getByLabel('Search articles').inputValue(),'morning sickness')
    })
    await check('reading layers keep original archive separate',async()=>{
     await open(page,'/research/EV-ART-018')
     const learn=page.locator('#understand-more')
     assert.equal(await learn.getAttribute('open'),null)
     const archive=page.locator('details').filter({has:page.locator('summary').getByText('Archived AI summary for comparison',{exact:true})})
     assert.equal(await archive.first().getAttribute('open'),null)
     await learn.locator('summary').click()
     assert.notEqual(await learn.getAttribute('open'),null)
     assert.equal(await archive.first().getAttribute('open'),null)
     await shot(page,'reader-expanded',size)
    })
    await check('urgent source safety is visible before reading overview',async()=>{
     await open(page,'/research/EV-ART-037')
     assert.equal(await page.locator('.urgent-reading-note').isVisible(),true)
     assert.ok((await page.locator('.urgent-reading-note').innerText()).includes('100.4°F (38°C)'))
     assert.ok(await page.evaluate(()=>Boolean(document.querySelector('.safety-panel').compareDocumentPosition(document.querySelector('.reader-purpose-block'))&Node.DOCUMENT_POSITION_FOLLOWING)))
    })
    await check('Week 22 pilot concept and reference return',async()=>{
     await open(page,'/timeline/week/22')
     await page.getByRole('button',{name:'Movement',exact:true}).click()
     await page.getByRole('heading',{name:'Muscles are developing'}).waitFor()
     const subject=page.getByRole('group',{name:'Whose changes are shown?'})
     await subject.getByRole('button',{name:/Mother/}).click()
     await page.getByRole('heading',{name:'You may feel your baby move'}).waitFor()
     await subject.getByRole('button',{name:/Baby/}).click()
     await page.getByRole('heading',{name:'Muscles are developing'}).waitFor()
     await shot(page,'week22-movement',size)
     await page.getByRole('link',{name:/Explore the placenta/}).click()
     await page.getByRole('button',{name:'Back',exact:true}).click()
     await page.getByRole('heading',{name:'Muscles are developing'}).waitFor()
     assert.equal(await page.getByRole('button',{name:'Movement',exact:true}).getAttribute('aria-pressed'),'true')
    })
    await check('visual search survives return',async()=>{
     await open(page,'/visuals');await page.getByLabel('Search visual references').fill('pelvic floor')
     await page.getByRole('link',{name:/Muscles of the pelvic floor/}).click()
     await page.getByRole('button',{name:'Back',exact:true}).click()
     assert.equal(await page.getByLabel('Search visual references').inputValue(),'pelvic floor')
    })
    await check('body selection survives article navigation',async()=>{
     await open(page,'/explore/body');await page.getByRole('button',{name:/Core & abdomen/}).click()
     await page.getByRole('link',{name:/Core strength and diastasis recti/}).click()
     await page.getByRole('button',{name:'Back',exact:true}).click()
     assert.equal(await page.getByRole('button',{name:/Core & abdomen/}).getAttribute('aria-pressed'),'true')
    })
    await check('browser scroll restoration',async()=>{
     await open(page,'/library')
     const target=page.locator('.result-row>a').nth(4)
     await target.scrollIntoViewIfNeeded()
     const before=await page.evaluate(()=>window.scrollY)
     await target.click();await page.getByRole('button',{name:'Back',exact:true}).click()
     await page.waitForTimeout(150)
     const after=await page.evaluate(()=>window.scrollY)
     assert.ok(Math.abs(after-before)<8,'Scroll moved from '+before+' to '+after)
    })
    for(const theme of ['Morning Stone','Soft Fog','Quiet Rose','Deep Calm']){
     await check('theme '+theme,async()=>{
      await open(page,'/settings');await page.locator('summary').filter({hasText:'Appearance'}).click()
      await page.getByRole('button',{name:new RegExp(theme)}).click()
      await open(page,'/');await shot(page,'theme-'+theme.toLowerCase().replaceAll(' ','-'),size)
     })
    }
    await check('offline reload and urgent navigation',async()=>{
     await open(page,'/');await page.waitForFunction(()=>!!navigator.serviceWorker?.controller,{},{timeout:15000})
     await context.setOffline(true)
     try{await page.reload({waitUntil:'domcontentloaded'});await page.getByRole('heading',{name:'Everwell'}).waitFor();await page.getByRole('link',{name:/Urgent signs & getting help/}).click();await page.getByRole('heading',{name:'Urgent signs & getting help'}).waitFor()}
     finally{await context.setOffline(false)}
    })
    await check('skip and relaunch persistence',async()=>{
     await page.evaluate(()=>localStorage.clear());await open(page,'/');await page.getByRole('button',{name:'Browse without a phase'}).click()
     await page.reload({waitUntil:'domcontentloaded'});await page.locator('main h1').waitFor()
     assert.equal(await page.getByRole('dialog').count(),0)
    })
   }
  }catch(error){report.failures.push({name:'viewport '+size.width+'x'+size.height,error:String(error)});await page.screenshot({path:join(artifacts,'failed-'+size.width+'x'+size.height+'.png')}).catch(()=>{})}
  finally{await context.close()}
 }
 await check('no uncaught browser errors',()=>assert.equal(report.pageErrors.length,0))
 await check('no attempted external HTTP requests',()=>assert.equal(report.externalRequests.length,0))
}finally{
 if(browser)await browser.close()
 await new Promise(resolveClose=>server.close(resolveClose))
 report.finished=new Date().toISOString()
 await writeFile(join(artifacts,'report.json'),JSON.stringify(report,null,2))
 console.log('Browser QA:',report.checks.filter(c=>c.pass).length+'/'+report.checks.length,'checks passed;',report.failures.length,'failures. Screenshots and report:',artifacts)
 if(report.failures.length)process.exitCode=1
}
