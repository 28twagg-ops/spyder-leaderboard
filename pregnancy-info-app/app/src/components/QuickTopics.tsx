import {Link} from 'react-router-dom'
import {Glyph} from './Glyph'
import {quickTopics} from '../data/quickTopics'
export function QuickTopics({week}:{week:number|null}){
 return <div className="quick-topic-grid">{quickTopics(week).map(topic=><Link className="quick-topic" key={topic.title} to={topic.to}><Glyph name={topic.icon}/><span><strong>{topic.title}</strong><small>{topic.subtitle}</small></span><span aria-hidden="true">›</span></Link>)}</div>
}
