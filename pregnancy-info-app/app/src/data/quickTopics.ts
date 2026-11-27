/** Shared topics keep existing articles and route contracts. Fallback weeks are reference chapters, not the user's stage. */
export function quickTopics(week:number|null){
 const w=week??22
 return [
  {title:'Nutrition & vitamins',subtitle:'Prenatals, nutrients & common intake gaps',to:'/timeline/week/'+w+'/mother/nutrition/research-guide',icon:'leaf'},
  {title:'Skin & stretch marks',subtitle:'Prevention, skin changes & treatment',to:'/timeline/week/'+w+'/mother/skin',icon:'body'},
  {title:'Pregnancy symptoms',subtitle:'Nausea, digestion & other changes',to:'/timeline/week/'+(week??8)+'/mother/digestion',icon:'body'},
  {title:'Exercise & pelvic floor',subtitle:'Movement, strength & physical comfort',to:'/timeline/week/'+w+'/mother/movement',icon:'body'},
  {title:'Baby development',subtitle:'Growth, senses & movement',to:'/timeline/week/'+w+'?subject=baby',icon:'child'},
  {title:'Labor & birth',subtitle:'Preparation and delivery',to:'/explore/birth',icon:'journey'},
  {title:'Postpartum recovery',subtitle:'Healing & physical wellbeing',to:'/explore/recovery',icon:'body'},
  {title:'Newborn care & feeding',subtitle:'Sleep, feeding & early care',to:'/explore/baby-child',icon:'child'},
 ] as const
}
