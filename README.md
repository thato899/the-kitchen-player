# The Kitchen Player

The Kitchen Player is a catering and event-service e-commerce platform. It is designed as a portfolio-grade full-stack project with a public website, verified client booking flow, payment integration, receipt workflow, and an admin dashboard.

## Tech Stack

- Next.js App Router with TypeScript for the website, API routes, and admin dashboard.
- Supabase for authentication, verified profiles, Postgres data, and gallery image storage.
- iKhokha payment links for online payments in ZAR.
- Vitest for unit tests and TDD-friendly business logic.
- Playwright for browser tests across desktop and mobile.
- Vercel or any Node-compatible host for deployment.

## Main Features

- Public landing page and gallery.
- Booking form for event type, audience, client details, event size, location, theme, cooking menu, equipment, venue size, and organizer contact details.
- Payment-link API boundary ready for iKhokha signing.
- Admin dashboard foundation for gallery albums, payment tracking, and expenses.
- Demo payment mode when iKhokha credentials are not configured.
- Documentation-first structure for future upgrades.

## Local Setup

Use Node `22.13.0` or newer. The project includes `.nvmrc` for developers who use Node Version Manager.

```powershell
cd C:\Users\User\Documents\Codex\2026-06-29\le\the-kitchen-player
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

For a terminal-first setup, use:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\scripts\setup.ps1
```

See `docs/TERMINAL_WORKFLOW.md` for the full terminal workflow.

## Useful Commands

```powershell
npm run dev
npm run typecheck
npm run test
npm run e2e
npm run build
npm run verify
```

## Git and GitHub Setup

```powershell
cd C:\Users\User\Documents\Codex\2026-06-29\le\the-kitchen-player
git init
git add .
git commit -m "Initial The Kitchen Player scaffold"
```

Create a GitHub repository named `the-kitchen-player`, then connect it:

```powershell
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/the-kitchen-player.git
git push -u origin main
```

If you use GitHub CLI:

```powershell
gh auth login
gh repo create the-kitchen-player --public --source . --remote origin --push
```

## VS Code Setup

```powershell
code C:\Users\User\Documents\Codex\2026-06-29\le\the-kitchen-player
```

Recommended VS Code extensions:

- ESLint
- Prettier
- Playwright Test for VS Code
- GitHub Pull Requests
- Supabase

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values as integrations are created.

`IKHOKHA_APP_ID` and `IKHOKHA_APP_SECRET` must stay server-side. Never expose them with `NEXT_PUBLIC_`.

## Development Method

Use TDD for business rules:

1. Write or update a failing unit test in `tests/unit`.
2. Implement the smallest code change in `src/lib` or API routes.
3. Run `npm run test`.
4. Add browser coverage in `tests/e2e` for complete workflows.
5. Run `npm run verify` before merging.

## Milestones

1. Public website, gallery, booking form, and demo payment mode.
2. Supabase auth with verified client profiles.
3. Database persistence for bookings, payments, expenses, and gallery albums.
4. iKhokha live payment links and webhook persistence.
5. Receipt PDF/email generation.
6. Admin dashboard permissions and upload workflow.
7. Deployment, monitoring, and final portfolio polish.
