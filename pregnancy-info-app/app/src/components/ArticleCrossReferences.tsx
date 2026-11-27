import {Fragment} from 'react'
import {Link,useLocation} from 'react-router-dom'
import {referenceParts} from '../data/articleCrossReferences'
/** Inline internal reading links; original text remains intact. Do not use in emergency or dosing text. */
export function ArticleCrossReferences({text}:{text:string}){
 const {pathname}=useLocation()
 return <>{referenceParts(text,pathname).map((part,i)=>part.to?<Link className="article-cross-reference" key={i} to={part.to} title={'Read more: '+part.label}>{part.text}</Link>:<Fragment key={i}>{part.text}</Fragment>)}</>
}
