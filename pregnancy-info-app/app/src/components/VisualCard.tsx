import { useState } from 'react'
import { visualPageReview,pinnedVisualPage } from '../data/visualReview'
import { mayPublishVisual, safeVisualUrl, type VisualRecord } from '../data/visualCatalog'

const localPreviews: Record<string, string> = import.meta.env.DEV ? {
  'EV-SVG-1': '/src/assets/visual-review/skin-normal.svg',
  'EV-SVG-2': '/src/assets/visual-review/brain.svg',
  'EV-SVG-3': '/src/assets/visual-review/heart-chambers.svg',
  'EV-SVG-4': '/src/assets/visual-review/intestine.svg',
  'EV-SVG-5': '/src/assets/visual-review/stomach.svg',
  'EV-SVG-6': '/src/assets/visual-review/lung.svg',
  'EV-SVG-7': '/src/assets/visual-review/pyramidal-neuron.svg',
} : {}

export function VisualCard({ record }: { record: VisualRecord }) {
  const [show, setShow] = useState(false)
  const source = safeVisualUrl(record.url)
  const license = safeVisualUrl(record.license_url)
  const preview = localPreviews[record.id]
  const review=visualPageReview(record.id)
  return (
    <article className="panel stack visual-card">
      <div className="eyebrow">{record.topic.replaceAll('/', ' / ')}</div>
      {review?<section className="stack visual-purpose"><h2 className="section-title">What to look for</h2><p>{review.description}</p><p className="small-copy muted">{review.limit}</p></section>:<p className="muted">Original educational resource. Open the source to view its illustrations or videos.</p>}
      <p className="muted">{review?.credit??record.creator} · {review?.license??record.license??record.rights??'Rights not confirmed'}</p>
      <p className="muted">Research reference only · {mayPublishVisual(record) ? 'Publication eligible' : 'Production approval pending'}</p>
      {preview && <>
        <button type="button" className="btn btn-ghost" aria-expanded={show} onClick={() => setShow(!show)}>
          {show ? 'Hide development preview' : 'Show development preview'}
        </button>
        {show && <figure className="visual-figure">
          <img src={preview} alt={record.alt_text_draft ?? record.title} decoding="async" />
          <figcaption>Unmodified reference illustration. Draft description; clinical and accessibility review pending. Not stage-specific anatomy, diagnosis or procedural instruction.</figcaption>
        </figure>}
      </>}
      {source && <a className="btn btn-ghost" href={source} target="_blank" rel="noopener noreferrer">Open original resource ↗</a>}
      <details className="disclosure">
        <summary>Attribution, rights and limitations</summary>
        {review&&<><p>File-page license checked November 27, 2026. Image bytes and clinical/accessibility review are pending.</p><p><a href={pinnedVisualPage(review)} target="_blank" rel="noopener noreferrer">Open checked file-page revision ↗</a></p><p>Original dimensions: {review.width} × {review.height} pixels.</p><p className="provenance-hash">Source-reported SHA-1: {review.sha1}</p></>}
        <p>{record.attribution ?? record.creator}</p>
        {license && <p><a href={license} target="_blank" rel="noopener noreferrer">Read license terms ↗</a></p>}
        <p>{record.rights_status}</p>
        {record.verification && <p>{record.verification}</p>}
        {record.use && <p>Reviewer note: {record.use}</p>}
        {record.financial_context && <p>{record.financial_context}</p>}
        {record.upstream_blob_sha && <p className="provenance-hash">Pinned source blob: {record.upstream_blob_sha}</p>}
        <p>No endorsement or clinical efficacy is implied. External resources may have their own tracking and terms.</p>
      </details>
    </article>
  )
}
