import {Link,useLocation} from 'react-router-dom'
import type {ReactNode} from 'react'
import {useViewState} from '../hooks/useViewMemory'
export function usePilotWeek(){return useLocation().pathname.startsWith('/timeline/week/23')?23:22}
type Crumb={label:string;to:string}
export function WeekContext({subject,topic,section}:{subject:'mother'|'baby';topic?:Crumb;section?:Crumb}){
 const week=usePilotWeek(),week22Base='/timeline/week/'+week
 return <nav className="week-context" aria-label={'Week '+week+' context'}><Link to={week22Base+'?subject='+subject}>Week {week} · {subject==='mother'?'Mother':'Baby'}</Link>{topic&&<><span aria-hidden="true">/</span><Link to={topic.to} aria-label={'All '+topic.label+' topics'}>{topic.label}</Link></>}{section&&<><span aria-hidden="true">/</span><Link to={section.to} aria-label={'All '+section.label+' readings'}>{section.label}</Link></>}</nav>
}
export function WeekDisclosure({id,title,children}:{id:string;title:string;children:ReactNode}){
 const [open,setOpen]=useViewState('week22.reading.'+id,false)
 return <details className="panel disclosure compact-reader-section" open={open} onToggle={e=>{if(e.currentTarget.open!==open)setOpen(e.currentTarget.open)}}><summary onClick={e=>{e.preventDefault();setOpen(v=>!v)}}>{title}</summary>{children}</details>
}
type Connection={title:string;context:string;to:string}
const connections:Record<string,Connection[]> = {
 'mother/movement/activity':[{title:'How maternal activity relates to baby outcomes',context:'Baby · Movement',to:'baby/movement/maternal-activity'}],
 'mother/movement/baby-movement':[{title:'How movement patterns develop',context:'Baby · Movement',to:'baby/movement/patterns'}],
 'baby/movement/patterns':[{title:'Feeling your baby move',context:'Mother · Movement',to:'mother/movement/baby-movement'}],
 'baby/movement/maternal-activity':[{title:'Activity and strength during pregnancy',context:'Mother · Movement',to:'mother/movement/activity'}],
 'mother/movement/pain':[{title:'Pelvic floor and comfort',context:'Mother · Your body',to:'mother/body/pelvic-floor'}],
 'mother/body/pelvic-floor':[{title:'Back and pelvic comfort',context:'Mother · Movement',to:'mother/movement/pain'}],
 'mother/nutrition/omega-3':[{title:'Brain development and nutrients',context:'Baby · Senses',to:'baby/senses/brain-nutrients'},{title:'Nutrition and growth research',context:'Baby · Growth',to:'baby/growth/growth-research'}],
 'mother/nutrition/brain-nutrients':[{title:'Brain development and nutrients',context:'Baby · Senses',to:'baby/senses/brain-nutrients'}],
 'baby/senses/brain-nutrients':[{title:'Choline, iodine and folate',context:'Mother · Nutrition',to:'mother/nutrition/brain-nutrients'},{title:'Fish and omega-3',context:'Mother · Nutrition',to:'mother/nutrition/omega-3'}],
 'mother/nutrition/food':[{title:'How nutrients reach the baby',context:'Baby · Digestion',to:'baby/digestion/nutrition-connection'}],
 'baby/digestion/nutrition-connection':[{title:'Oxygen and nutrient exchange',context:'Baby · Placenta',to:'baby/placenta/exchange'},{title:'Food and prenatal nutrition',context:'Mother · Nutrition',to:'mother/nutrition/food'}],
 'baby/placenta/exchange':[{title:'How nutrients reach the baby',context:'Baby · Digestion',to:'baby/digestion/nutrition-connection'},{title:'Fetal circulation',context:'Baby · Placenta',to:'baby/placenta/circulation'}],
 'baby/placenta/exposures':[{title:'Water, plastics and PFAS',context:'Mother · Checkups',to:'mother/checkups/plastics-water'},{title:'Home and workplace exposures',context:'Mother · Checkups',to:'mother/checkups/home-work'}],
 'mother/checkups/plastics-water':[{title:'Exposures and the placenta',context:'Baby · Placenta',to:'baby/placenta/exposures'}],
 'mother/checkups/home-work':[{title:'Exposures and the placenta',context:'Baby · Placenta',to:'baby/placenta/exposures'}],
 'mother/checkups/prenatal':[{title:'Growth assessment',context:'Baby · Growth',to:'baby/growth/screening'}],
 'baby/growth/screening':[{title:'Prenatal visits and screening',context:'Mother · Checkups',to:'mother/checkups/prenatal'}],
 'baby/growth/growth-research':[{title:'Fish and omega-3',context:'Mother · Nutrition',to:'mother/nutrition/omega-3'}],
 'mother/digestion/food-safety':[{title:'Food and prenatal nutrition',context:'Mother · Nutrition',to:'mother/nutrition/food'}],
 'mother/digestion/gut-health':[{title:'Iron, calcium and vitamin D',context:'Mother · Nutrition',to:'mother/nutrition/minerals'}],
 'mother/body/birth-preparation':[{title:'Pelvic floor and comfort',context:'Mother · Your body',to:'mother/body/pelvic-floor'}],
 'mother/skin/prevention/creams-and-moisturizers':[{title:'Treatments for existing marks',context:'Mother · Skin · After pregnancy',to:'mother/skin/treatment/existing-stretch-marks-and-creams'}],
 'mother/skin/treatment/existing-stretch-marks-and-creams':[{title:'Prevention research on creams',context:'Mother · Skin',to:'mother/skin/prevention/creams-and-moisturizers'}],
 'mother/skin/comfort/dryness-itching-and-skin-changes':[{title:'Creams and moisturizers',context:'Mother · Skin · Prevention',to:'mother/skin/prevention/creams-and-moisturizers'}],
}
export function WeekConnections({id}:{id:string}){
 const week22Base='/timeline/week/'+usePilotWeek()
 const items=connections[id]??[]
 if(!items.length)return null
 return <section className="week-connections" aria-label="Connected topics"><h2 className="section-title">Connected topics</h2>{items.map(item=><Link key={item.to} to={week22Base+'/'+item.to}><span><small>{item.context}</small><strong>{item.title}</strong></span><span aria-hidden="true">›</span></Link>)}</section>
}
