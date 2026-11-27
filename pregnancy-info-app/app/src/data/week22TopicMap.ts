import mapping from './week22TopicMap.json'
interface Child{id:string;title:string;summary:string;article_ids:string[];source_ids:string[];outcome_ids:string[];visual_ids:string[];note:string}
interface Topic{subject:string;id:string;title:string;summary:string;source_id:string;children:Child[]}
export const week22Topics:Topic[]=mapping.topics
