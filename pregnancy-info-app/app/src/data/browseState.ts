export interface BrowseState {query:string;domain:string;page:number}
export const emptyBrowse:BrowseState={query:'',domain:'all',page:1}
export const domainLabels:Record<string,string>={prep:'Preparing for pregnancy',nutrition:'Nutrition & supplements',environment:'Environment & exposures',pregnancy:'Pregnancy & body',birth:'Labor & birth',recovery:'Postpartum recovery',feeding:'Infant feeding',infant:'Newborn care',development:'Child development',solids:'Starting solids',child:'Child health'}
