const paths = {
 home:'M3 10 12 3l9 7v10h-6v-6H9v6H3z',
 journey:'M6 3v18M6 6h13M6 12h10M6 18h13',
 explore:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm4 5-2 6-6 2 2-6z',
 search:'M10.5 4a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm5.5 12 5 5',
 bookmark:'M6 3h12v18l-6-4-6 4z',
 settings:'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2',
 shield:'m12 3 8 4v6c0 4-4 7-8 9-4-2-8-5-8-9V7zM12 8v5m0 3v.1',
 leaf:'M20 4c0 10-4 15-11 15-3 0-5-2-5-5C4 7 10 6 20 4ZM4 21 15 10',
 body:'M12 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM5 12l7-2 7 2M12 10v6m-4 6 4-6 4 6',
 child:'M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM5 21v-3a7 7 0 0 1 14 0v3',
 book:'M3 4h6a3 3 0 0 1 3 3v14a3 3 0 0 0-3-3H3zM21 4h-6a3 3 0 0 0-3 3v14a3 3 0 0 1 3-3h6z',
 back:'m15 5-7 7 7 7'
}
export function Glyph({name}:{name:keyof typeof paths}){return <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d={paths[name]}/></svg>}
