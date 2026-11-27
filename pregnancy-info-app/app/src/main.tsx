import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App'
import { startAppUpdates } from './pwa/autoUpdates'
import './index.css'

const Router = ['portable','pages'].includes(import.meta.env.MODE) ? HashRouter : BrowserRouter

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)

// The standalone HTML download and development server must not register a service worker.
if (import.meta.env.PROD && import.meta.env.MODE !== 'portable' && 'serviceWorker' in navigator && window.isSecureContext) {
  startAppUpdates(navigator.serviceWorker, {
    window,
    document,
    basePath: import.meta.env.BASE_URL,
    online: () => navigator.onLine,
    reload: () => window.location.reload(),
  })
}
