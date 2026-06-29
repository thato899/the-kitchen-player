# TDD Guide

This project is designed to demonstrate test-driven development clearly.

## Unit Test Targets

- Booking validation.
- Deposit estimation.
- iKhokha signature generation.
- Permission checks for verified clients and admins.
- Receipt total calculations.

## Browser Test Targets

- Public gallery can be viewed without login.
- Booking requires verified login.
- Verified client can submit a booking.
- Payment link redirect is created.
- Admin can create a gallery album.
- Admin can view payment and expense summaries.

## Workflow

```powershell
npm run test:watch
```

Write the test first, confirm it fails, then implement the feature.

Before pushing:

```powershell
npm run verify
```
