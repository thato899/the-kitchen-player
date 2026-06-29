# Architecture

## Platform Split

The project has two product surfaces that communicate through API boundaries:

- Public client website: landing page, gallery, account access, booking form, and payment redirect.
- Admin dashboard: album management, booking review, payment status, and expense tracking.

Both surfaces live in one Next.js codebase during the MVP so the project is easy to build and deploy. The API layer is kept separate so the admin dashboard could later become its own app without rewriting core logic.

## Request Flow

1. Visitor browses `/` and `/gallery` without an account.
2. Client creates a profile through Supabase Auth.
3. Client verification status is stored on `profiles.verification_status`.
4. Verified client submits a booking request.
5. API validates the request with Zod.
6. API creates an iKhokha payment link.
7. Client pays through iKhokha.
8. iKhokha calls the webhook route.
9. Webhook verifies the signature, updates payment state, generates a receipt, and sends email.

## Key Modules

- `src/app`: Next.js routes, pages, and API endpoints.
- `src/lib/booking-schema.ts`: booking validation and deposit estimation.
- `src/lib/ikhokha.ts`: iKhokha request signing and payment-link creation.
- `supabase/migrations`: database schema.
- `tests/unit`: TDD coverage for business rules.
- `tests/e2e`: browser workflow coverage.

## Security Notes

- iKhokha secrets must only be read in server-side API routes.
- Booking endpoints should check Supabase session and verified profile status before persistence.
- Admin pages should require an admin role from the database, not only a hidden URL.
- Webhook routes must verify signatures before trusting payment status.
- Receipts should be generated from server-side payment records, not from client-submitted totals.

## Dependency Audit Note

As of this scaffold, `npm audit` reports a moderate PostCSS advisory through the current Next.js dependency range. The automated `npm audit fix --force` suggestion downgrades Next.js to an old major version, so it is not applied. Recheck after each Next.js release and upgrade when the framework dependency resolves the advisory.
