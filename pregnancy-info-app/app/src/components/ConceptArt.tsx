/** Original editorial pictograms, not anatomical or procedural drawings. */
const paths={
 history:'M9 5h14v24H9zM12 10h8m-8 5h8m-8 5h5M13 5V2h6v3',
 home:'M3 16 16 5l13 11v14H5V16m9 14V21h6v9',
 clock:'M16 3a13 13 0 1 0 0 26 13 13 0 0 0 0-26Zm0 5v9l6 4',
 people:'M10 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm13 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM2 28v-5a8 8 0 0 1 16 0v5m2-9a7 7 0 0 1 10 6v3',
 leaf:'M28 4Q30 25 14 28 3 27 4 16 7 6 28 4ZM4 30 23 10',
 bottle:'M10 3h12v5H10zM11 8 7 13v15h18V13l-4-5M7 17h18m-15 5h12',
 label:'M5 6h22v22H5zM9 11h14M9 16h14M9 21h7m10-2-4 4-2-2',
 magnify:'M13 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm7 16 9 9M9 13h8m-4-4v8',
 factory:'M3 29V14l9-5v7l9-5v7h8v11ZM24 18V3h4v15M8 23h3m4 0h3m4 0h3',
 air:'M3 10h19q6 0 4-5M3 16h24q4 0 2 4M3 23h16q6 0 4 6',
 sun:'M16 9a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm0-7v4m0 20v4M2 16h4m20 0h4M6 6l3 3m14 14 3 3M6 26l3-3M23 9l3-3',
 calendar:'M4 6h24v23H4zM4 12h24M10 3v6m12-6v6M10 18h3m6 0h3m-12 5h3',
 book:'M3 5h8q5 0 5 5v19q0-5-5-5H3zM29 5h-8q-5 0-5 5v19q0-5 5-5h8z',
 chat:'M4 5h24v17H15l-7 6v-6H4zM9 11h14m-14 5h9',
 blocks:'M3 17h12v12H3zM17 17h12v12H17zM10 3h12v12H10z',
 food:'M4 17h24q-1 11-12 11T4 17Zm6-4q-2-7 5-10m4 10q5-5 6-10',
 chart:'M4 3v25h25M9 23v-7m7 7V9m7 14v-11',
 shield:'M16 3 28 8v8q0 9-12 14Q4 25 4 16V8zM16 10v9m0 4v1',
 heart:'M16 27 4 15Q-1 6 8 5q5 0 8 5 3-5 8-5 9 1 4 10z',
 body:'M16 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM5 15l11-3 11 3m-11-3v9m-6 9 6-9 6 9',
 layers:'M4 8h24M4 16h24M4 24h24M4 8v16m24-16v16',
 care:'M5 6h22v22H5zM16 11v12m-6-6h12',
 crib:'M4 8v20m24-20v20M4 23h24M7 11h18M8 11v12m8-12v12m8-12v12',
 moon:'M22 4a13 13 0 1 0 6 22Q12 29 11 16 10 8 22 4Z',
 water:'M16 3Q6 17 6 21a10 10 0 0 0 20 0Q26 17 16 3Z',
}
type Art=keyof typeof paths
const choices:Record<string,[Art,Art,Art]>={
 '001':['history','home','people'],'002':['clock','leaf','bottle'],'003':['people','factory','magnify'],'004':['care','chart','magnify'],
 '005':['food','leaf','label'],'006':['label','magnify','chat'],'007':['food','bottle','chart'],'008':['leaf','bottle','magnify'],'009':['food','bottle','magnify'],
 '010':['home','factory','magnify'],'011':['bottle','water','chart'],'012':['food','air','sun'],
 '013':['calendar','magnify','chat'],'014':['clock','heart','chart'],'015':['food','water','shield'],'016':['body','blocks','shield'],'017':['chat','leaf','care'],'018':['layers','heart','magnify'],'019':['body','heart','chat'],'020':['body','heart','calendar'],
 '021':['people','history','care'],'022':['leaf','body','shield'],'023':['care','sun','bottle'],'024':['shield','care','calendar'],
 '025':['calendar','moon','people'],'026':['body','heart','calendar'],'027':['body','layers','chart'],'028':['body','chat','calendar'],'029':['heart','moon','people'],'030':['heart','calendar','people'],'031':['leaf','layers','magnify'],
 '032':['people','bottle','food'],'033':['bottle','water','shield'],'034':['bottle','chat','chart'],'035':['sun','bottle','food'],
 '036':['crib','moon','shield'],'037':['care','shield','chat'],'038':['history','sun','chat'],'039':['layers','chat','calendar'],'040':['chat','people','heart'],'041':['heart','people','care'],
 '042':['chat','book','blocks'],'043':['blocks','body','chart'],'044':['magnify','blocks','history'],'045':['label','chat','people'],
 '046':['bottle','food','chat'],'047':['food','layers','shield'],'048':['chart','food','chat'],'049':['care','water','shield'],'050':['calendar','care','chat'],'051':['clock','calendar','people'],'052':['leaf','magnify','shield'],
}
export function ConceptArt({articleId,index}:{articleId:string;index:number}){
 const key=(choices[articleId.slice(-3)]??['book','chat','magnify'])[index]
 return <svg className="concept-art" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d={paths[key]}/></svg>
}
