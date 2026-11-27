import { useState } from 'react'
import { mayPublishVisual, safeVisualUrl, type VisualRecord } from '../data/visualCatalog'

const localPreviews: Record<string, string> = import.meta.env.DEV ? {
  'EV-SVG-1': new URL('../assets/visual-review/skin-normal.svg', import.meta.url).href,
  'EV-SVG-2': new URL('../assets/visual-review/brain.svg', import.meta.url).href,
  'EV-SVG-3': new URL('../assets/visual-review/heart-chambers.svg', import.meta.url).href,
  'EV-SVG-4': new URL('../assets/visual-review/intestine.svg', import.meta.url).href,
  'EV-SVG-5': new URL('../assets/visual-review/stomach.svg', import.meta.url).href,
  'EV-SVG-6': new URL('../assets/visual-review/lung.svg', import.meta.url).href,
  'EV-SVG-7': new URL('../assets/visual-review/pyramidal-neuron.svg', import.meta.url).href,
} : {}

export function VisualCard({ record }: { record: VisualRecord }) {
  const [show, setShow] = useState(false)
  const source = safeVisualUrl(record.url)
  const license = safeVisualUrl(record.license_url)
  const preview = localPreviews[record.id]
  return (
    <article className="panel stack visual-card">
      <div className="eyebrow">{record.topic.replaceAll('/', ' / ')}</div>
      <h3>{record.title}</h3>
      <p className="muted">{record.creator} · {record.license ?? record.rights ?? 'Rights not confirmed'}</p>
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
