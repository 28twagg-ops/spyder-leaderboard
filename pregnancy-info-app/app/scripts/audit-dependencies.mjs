// Dependency inventory diagnostic; do not automatically change versions or hide failures.
import { spawnSync } from 'node:child_process'
for(const [label,extra] of [['all',[]],['runtime',['--omit=dev']]]){
 const run=spawnSync('npm',['audit','--json',...extra],{encoding:'utf8',timeout:30000,maxBuffer:4*1024*1024})
 try{
  const report=JSON.parse(run.stdout||'{}')
  if(!report.metadata?.vulnerabilities)throw Error(report.error?.code||'missing audit result')
  console.log('Dependency audit ('+label+'): '+JSON.stringify(report.metadata.vulnerabilities))
  for(const [name,v] of Object.entries(report.vulnerabilities??{})){
   console.log('Audit finding: '+JSON.stringify({scope:label,name,severity:v.severity,direct:v.isDirect,range:v.range,via:v.via,fixAvailable:v.fixAvailable}))
  }
 }catch(error){console.warn('Dependency audit ('+label+') unavailable: '+error.message)}
}
// This is a report, not a security release gate. Known/unavailable findings remain open.
