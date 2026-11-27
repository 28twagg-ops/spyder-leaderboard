import { spawnSync } from 'node:child_process'
const python=process.env.PYTHON||'python3'
const probe=spawnSync(python,['--version'],{encoding:'utf8'})
if(probe.error||probe.status!==0){
 console.warn('Full legacy research validators not run: Python 3 unavailable. Display-data validation still required during sync.')
 process.exit(0)
}
for(const file of ['../research/integrated/validate_import.py','../research/child-health/validate.py']){
 const run=spawnSync(python,[file],{stdio:'inherit'})
 if(run.error||run.status!==0){console.error('Full research validator failed: '+file);process.exit(1)}
}
console.log('Full legacy structural research validators passed; not clinical review.')
