# AGENTS.md — side1dum

## Quickstart commands

| Action | Command |
|--------|---------|
| Start dev server | `npm run dev` — runs on port **6173** (configurable in `rsbuild.config.ts`) |
| Build production | `npm run build` |
| Preview build | `npm run preview` |
| Run tests | `npm test` |
| Run tests watch | `npm run test:watch` |

## Framework & build

- **Build tool**: [RSBuild](https://rsbuild.dev/) (Rspack-based). Do not confuse with Vite or Create React App.
- **Framework**: React 19, React Router 8 (`createBrowserRouter`/`RouterProvider`).
- **Tests**: Powered by [@rstest/core](https://rstest.rs/), not Jest. Tests import from `"@rstest/core"` and use `@testing-library/react`.
- **TS config**: `verbatimModuleSyntax: true`, `rootDir: ./src`, excludes `__tests__`.
- **CSS**: Uses modern `oklch` color variables in `src/index.css`. Light/dark themes toggled via `[data-theme]` on `<html>`.

## Architecture notes

- **Entry point**: `src/index.tsx` renders `<App />` into `#root`. `<App />` in `src/app/App.tsx` renders `<NavRoutes />`.
- **Routing**: Single `createBrowserRouter` instance in `src/routes/NavRoutes.tsx` defining 7 routes:
  - `/` (Home, Sidebar)
  - `/comments`
  - `/products`
  - `/posts`
  - `/quotes`
  - `/users`
  - `/recipes`
- **Sidebar**: `src/components/Sidebar.tsx` has a toggleable mobile menu. The open/close state is managed with `useState`. Links are generated from `src/data/dBase.tsx` — add/remove entries there to change navigation.
- **Navigation data**: `src/data/dBase.tsx` exports `dBase: IC[]` with `{ id, to, toolTip, Icon }`. This is the **single source of truth** for sidebar links. Update this file to add/remove links; do not edit `NavRoutes.tsx` sidebar children manually.
- **Icons**: `react-icons` — icons imported from `fa`, `ai`, `tb`, `io5`, `bs` subpackages. The `Icon` type in `dBase` is `react-icons` `IconType`.
- **Theming**: Color variables in `src/index.css`. Add `[data-theme="light"]` rules to toggle themes. Currently only dark defaults are defined.

## Commands an agent might get wrong

- `npm test` runs **@rstest/core**, not `jest`. The test runner is configured in `rstest.config.ts` (see root).
- `rsbuild dev` starts the dev server on port **6173** (configurable in `rsbuild.config.ts`).
- Do not run `jest` directly — it will not find the tests.
- The `tsconfig.json` excludes `__tests__`, so Type checking on test files is skipped; use `rstest` for tests.

## Data & pages

- New pages: add a component under `src/pages/<name>/` and a route entry in `src/routes/NavRoutes.tsx` children array.
- New sidebar link: edit `src/data/dBase.tsx` only. Do not edit `NavRoutes.tsx` or `Sidebar.tsx` link lists manually.
- All page components accept no props and render a `<main>` with an `<h1>` and paragraph of lorem ipsum.

## Testing quirks

- Tests in `src/__tests__/` use `import { describe, it, expect } from "@rstest/core"`.
- Tests use `@testing-library/react` render pattern.
- The existing `App.test.tsx` checks for "Rick Rubin" text and an image — this may need updating if the App component changes.
- Test runner is configured in `rstest.config.ts` at root.

## What to avoid

- Do not assume Jest or Vite conventions apply.
- Do not edit navigation links in multiple places — always update `dBase.tsx` first.
- Do not expect TypeScript compilation of test files (`__tests__` is excluded from `tsc`).