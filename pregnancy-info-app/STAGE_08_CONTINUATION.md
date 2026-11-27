# Continue Everwell after application Stage 8

Start with [the execution report](STAGE_08_TEST_REPORT.md) and [actual browser screenshots](qa/stage-08/). The private app compiles, passes 28 Vitest tests, both structural research validators, lint and the production-media check. Chromium verified offline deep links, worker replacement, preference persistence, ten mobile layouts and full evidence pagination. Portable responsive/offline browser checks are included below.

## Run locally

From the repository root, using Node 24.22.3 and npm 11.19.1 or a compatible runtime:

```sh
cd pregnancy-info-app/app
npm ci
npm run sync:research
npm test
npm run build
npm run lint
npm run validate:research
npm run dev -- --host 127.0.0.1
```

Open http://127.0.0.1:5173 for development. For offline testing, stop the dev server and run the following in the app directory:

```sh
npm run preview -- --host 127.0.0.1 --port 4173 --strictPort
```

Open http://127.0.0.1:4173. Load once online, wait for the service worker and reload for control before switching offline. To rerun the optional browser regression in a separate terminal from the app directory on Linux or macOS:

```sh
qa_tmp=$(mktemp -d)
npm install --prefix "$qa_tmp" playwright
"$qa_tmp/node_modules/.bin/playwright" install chromium
NODE_PATH="$qa_tmp/node_modules" node ../qa/stage-08/browser-check.cjs
```

Set CHROMIUM_PATH if using an existing Chromium executable. Browser tooling is isolated from the application lockfile. For a clean deletion test, use a fresh profile and verify removal of everwell.local.prefs.v1 after confirming clear.

## Checkpoints

| Commit | Scope |
|---|---|
| `c25f9c1` | Pulled baseline |
| `354fc34` | TypeScript assertion, development media boundary and build inspection script |
| `5d8d0d0` | Local licensed fonts, build hook and archived summary presentation |
| `c70ee69` | Urgent-topic links, regression assertions, mobile pagination, enlarged text, snapshot metadata and install status |
| `3932cac` | Eleven production screenshots |

**Recommended next assignment:** complete Stage 8 physical iPhone Safari and Home Screen testing with synthetic reading choices, revisit restricted source pages and review the PWA dependency advisories. Record the model, iOS version, installed/offline behavior, Dynamic Type, VoiceOver and safe-area findings. No deployment is authorized by this assignment. Stage 5 appraisal, scientific and clinical review, privacy/security verification, visual clearance and owner release approval remain open.
