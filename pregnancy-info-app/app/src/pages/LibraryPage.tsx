import { lazy, Suspense } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLocalPrefs } from '../hooks/useLocalPrefs'
import { ScreenHeading } from '../components/ReadingUI'
import { Glyph } from '../components/Glyph'
import { catalogStats, searchArticles, listDomains } from '../data/researchCatalog'
import { emptyBrowse, domainLabels, type BrowseState } from '../data/browseState'
const FocusedResults=lazy(()=>import('../components/FocusedResults'))
export function LibraryPage({browse,setBrowse,currentWeek=null}:{browse:BrowseState;setBrowse:(state:BrowseState)=>void;currentWeek?:number|null}){
 const {pathname}=useLocation()
 const savedOnly=pathname==='/saved'
 const {prefs,toggleBookmark}=useLocalPrefs()
 const stats=catalogStats()
 const {query,domain,page}=savedOnly?emptyBrowse:browse
 const matches=searchArticles(query,domain).filter(a=>!savedOnly||prefs.bookmarks.includes(a.id))
 const pages=Math.max(1,Math.ceil(matches.length/8)),currentPage=Math.min(page,pages)
 const shown=savedOnly?matches:matches.slice((currentPage-1)*8,currentPage*8)
 const suggestions=['Prenatal vitamins','Morning sickness','Stretch marks','Infant feeding']
 const week=query.match(/\bweek\s*(\d{1,2})\b/i)
 const weekNumber=week?Number(week[1]):0
 return <div className="stack-lg">
 <ScreenHeading title={savedOnly?'Saved':'Search'} subtitle={savedOnly?'Your saved articles.':'Find articles and detailed topics using your own words.'} action={<Link className="header-action" to={savedOnly?'/library':'/saved'}><Glyph name={savedOnly?'search':'bookmark'}/><span>{savedOnly?'Search':'Saved'}</span></Link>}/>
 {!savedOnly&&<><section className="search-surface stack" aria-label="Find a topic"><label className="visually-hidden" htmlFor="topic-search">Search articles</label><div className="search-input-wrap"><Glyph name="search"/><input id="topic-search" type="search" autoComplete="off" value={query} onChange={e=>setBrowse({...browse,query:e.target.value,page:1})} maxLength={200} placeholder="Search a topic or question" /></div>
 {!query&&<><span className="muted small-copy">Try a topic</span><div className="suggestion-row">{suggestions.map(s=><button className="btn btn-ghost" key={s} onClick={()=>setBrowse({...browse,query:s,page:1})}>{s}</button>)}</div></>}
 <label className="visually-hidden" htmlFor="topic-domain">Topic category</label><select id="topic-domain" value={domain} onChange={e=>setBrowse({...browse,domain:e.target.value,page:1})}><option value="all">All topics</option>{listDomains().map(d=><option key={d} value={d}>{domainLabels[d]??d}</option>)}</select>
 {(query||domain!=='all')&&<button className="btn btn-ghost" onClick={()=>setBrowse(emptyBrowse)}>Clear search</button>}</section><nav className="section-links" aria-label="Research collections"><Link to="/evidence">Research &amp; sources ›</Link><Link to="/visuals">Visual references ›</Link></nav></>}
 {!savedOnly&&weekNumber>=1&&weekNumber<=40&&<Link className="topic-link" to={`/timeline/week/${weekNumber}`}>Open pregnancy week {weekNumber} ›</Link>}
 {!savedOnly&&query.trim()&&!/^[a-z]+(?:-[a-z0-9]+)*-\d+$/i.test(query.trim())&&<Suspense fallback={<p className="small-copy muted">Finding detailed topics…</p>}><FocusedResults key={query+domain} query={query} domain={domain} currentWeek={weekNumber>=1&&weekNumber<=40?weekNumber:currentWeek}/></Suspense>}
 {!savedOnly&&query.trim()&&<h2 className="section-title">Core articles</h2>}
 <p className="muted small-copy" role="status">{matches.length} of {stats.articles} articles · {prefs.bookmarks.length} saved</p>
 <section className="surface-list result-list" aria-label={savedOnly?'Saved articles':'Search results'}>{shown.map(a=><article key={a.id} className="result-row"><Link to={`/research/${a.id}`}><strong>{a.title}</strong><small>{domainLabels[a.domain]??a.domain}{prefs.readArticles.includes(a.id)?' · Read':''}</small></Link><button className="bookmark-control" aria-label={`${prefs.bookmarks.includes(a.id)?'Remove bookmark for':'Save bookmark for'} ${a.title}`} aria-pressed={prefs.bookmarks.includes(a.id)} onClick={()=>toggleBookmark(a.id)}><Glyph name="bookmark"/></button></article>)}</section>
 {!matches.length&&<p>{savedOnly?'No saved articles yet. Bookmark a topic to find it here.':'No matching core articles. Try a shorter phrase, browse Explore, or check the detailed topics above.'}</p>}
 {!savedOnly&&pages>1&&<div className="page-controls"><button className="btn btn-ghost" disabled={currentPage===1} onClick={()=>setBrowse({...browse,page:currentPage-1})}>Previous</button><span style={{textAlign:'center'}}>Page {currentPage} of {pages}</span><button className="btn btn-ghost" disabled={currentPage===pages} onClick={()=>setBrowse({...browse,page:currentPage+1})}>Next</button></div>}

 </div>
}
