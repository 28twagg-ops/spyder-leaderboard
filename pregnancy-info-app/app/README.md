# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `tsrs` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Installed preview updates

Use the stable branch preview URL: https://everwell-iphone-test-git-everwell-iphone-preview-28twagg-9796.vercel.app . Individual deployment URLs are immutable snapshots and cannot receive subsequent branch releases.

The production app explicitly registers `/sw.js` with `updateViaCache: 'none'`; Workbox precaches the complete version and activates/claims clients when ready. Update checks run on launch, foreground return, pageshow, reconnect, and every five minutes while visible. Controller changes refresh a visible client once, deferring for the date editor or active input. A first install does not trigger an unnecessary reload. Failures retain the last working cached app; no personal preferences, bookmarks, dates or search history are transmitted or cleared by the update code. The standalone portable HTML build does not register a worker.

Acceptance: deploy two consecutive successful builds to the stable protected branch preview; install the first on iPhone, save test preferences, background/reopen online after the second is ready, and verify the new interface and unchanged preferences. Check offline launch, reconnection, editor deferral, and initial install. Existing legacy workers may need a one-time close/reopen or refresh; the Home Screen icon may require reinstall separately. No update can expose an unbuilt/failed commit. Do not delete the existing app merely to update content.
