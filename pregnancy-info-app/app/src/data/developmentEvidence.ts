import data from './developmentEvidence.json'
export const developmentEvidence=data
export const developmentSources=data.sources
export const developmentTopics=data.topics
export function weekQuestion(week:number){return data.weekQuestions[week-1]??null}
export function phaseQuestion(id:string){return (data.phaseQuestions as Record<string,string>)[id]??null}
export function phaseResearchTopic(track:string){return ({preconception:'preparation',pregnancy:'development',shared_birth:'recovery',maternal:'recovery',child:'development'} as Record<string,string>)[track]??'evidence'}
