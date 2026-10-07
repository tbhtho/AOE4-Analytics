# Contributing to RTSLytics

Bug reports, build orders, guides, and focused code changes are welcome.

## Setup

Use **Node.js 22** (see [`.nvmrc`](.nvmrc)) and npm. On Windows, native dependencies may need [Visual Studio Build Tools](https://visualstudio.microsoft.com/downloads/) with Desktop development with C++ and a matching Python 3 if prebuilt binaries are unavailable.

```bash
npm install
npm run dev
```

`npm install` rebuilds native dependencies for Electron. Run `npm run verify` before a PR; `npm run bundle` checks production bundles. Use `npm run pack` for an unpacked build and `npm run dist:verified` for an authorized portable release.

Changes to the overlay, local data, or native modules also need a packaged smoke check and real-game verification where applicable. Headless checks do not prove game compatibility. Existing releases must not be replaced just to rerun a build.

## Project boundaries

- Read the user's own AoE4 files and documented public services. Never read game memory, attach or inject into the game, modify game files, or automate gameplay.
- Keep logic in `src/domain/`, IO in `electron/services/`, and renderer access through the typed IPC bridge in `electron/ipc/contract.ts`. The app has one main process and two renderer windows.
- Preserve account isolation, team structure, missing-data labels, Electron isolation, and encrypted credential storage. Do not record raw input or commit credentials, real player files, generated output, or diagnostic captures.
- Build orders are JSON in `src/data/buildOrders/`; register each in `index.ts`, where order determines the default civilization build. Written guides live in `src/data/guides.ts`.

Windows is required for the overlay, local-file features, and APM hook. The API-backed dashboard, scout, civilization data, and guides can run from source on other platforms.

Branch from `main`, keep changes focused, explain what changed and why, and add appropriate tests for behavior changes. Documentation changes need formatting, link, and image checks.

Contributions use the project's [MIT License](LICENSE). Bundled game data and images retain the separate terms in [NOTICE](NOTICE).
