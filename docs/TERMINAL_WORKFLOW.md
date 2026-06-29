# Terminal Workflow

This project should be built and maintained mostly from the terminal. VS Code is the editor, but the terminal is where setup, tests, Git, and deployment commands happen.

## Open The Project

```powershell
cd C:\Users\User\Documents\Codex\2026-06-29\le\the-kitchen-player
code .
```

## First Setup

```powershell
cd C:\Users\User\Documents\Codex\2026-06-29\le\the-kitchen-player
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\scripts\setup.ps1
```

With your GitHub username:

```powershell
.\scripts\setup.ps1 -GithubUsername YOUR_USERNAME
```

## Daily Development

```powershell
npm run dev
```

Then open:

```text
http://127.0.0.1:3000
```

## TDD Commands

Run tests once:

```powershell
npm run test
```

Run tests while coding:

```powershell
npm run test:watch
```

Run full verification before every commit:

```powershell
npm run lint
npm run typecheck
npm run test
npm run build
```

## Git Commands

```powershell
git status
git add .
git commit -m "Describe the change"
git push
```

## GitHub Remote Setup

Create an empty GitHub repository named `the-kitchen-player`, then run:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/the-kitchen-player.git
git push -u origin main
```

## Playwright Browser Setup

Playwright tests need browser binaries installed once:

```powershell
npx playwright install
npm run e2e
```

## Hosting Preparation

Before hosting:

```powershell
npm run build
```

Add environment variables on the host:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `IKHOKHA_API_BASE_URL`
- `IKHOKHA_APP_ID`
- `IKHOKHA_APP_SECRET`
- `IKHOKHA_ENTITY_ID`
- `IKHOKHA_MODE`
