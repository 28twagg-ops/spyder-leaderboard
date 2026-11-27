import { Link } from 'react-router-dom'
import { UrgentSigns } from '../components/UrgentSigns'
import { DraftBanner } from '../components/DraftBanner'
import { urgentArticles } from '../data/researchCatalog'
export function UrgentPage(){return <div className="stack-lg"><Link className="reader-back" to="/">‹ Home</Link><h1 className="page-title">Urgent signs &amp; getting help</h1><p className="muted">For an emergency, call your local emergency services. Everwell cannot triage emergencies; this list is not exhaustive.</p><UrgentSigns/><section className="stack"><h2 className="section-title">Safety topics</h2>{urgentArticles().map(a=><Link className="topic-link" key={a.id} to={`/research/${a.id}`}>{a.title}</Link>)}</section><DraftBanner status="research_only"/></div>}
