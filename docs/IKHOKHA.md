# iKhokha Integration Notes

The attached iKhokha notes define these important endpoints:

- Create payment link: `POST https://api.ikhokha.com/public-api/v1/api/payment`
- Payment history: `GET https://api.ikhokha.com/public-api/v1/api/payments/history?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD`
- Payment status: `GET https://api.ikhokha.com/public-api/v1/api/getStatus/{paylinkId}`
- External payment status: `GET https://api.ikhokha.com/public-api/v1/api/getStatus/external?externalReference={externalTransactionID}`

## Signing

Each server request needs:

- `IK-APPID`
- `IK-SIGN`

The signature is generated with:

```text
hash_hmac("sha256", path + requestBody, AppSecret)
```

The implementation lives in `src/lib/ikhokha.ts`.

## Demo Mode

If `IKHOKHA_APP_ID` or `IKHOKHA_APP_SECRET` is missing, the app returns a local demo payment link. This makes development and testing possible before merchant credentials are available.

## Production Tasks

- Confirm webhook signature rules with iKhokha before going live.
- Persist `paylinkID`, `externalTransactionID`, `amount`, and `status`.
- Make payment callbacks idempotent.
- Generate receipt records only from verified successful payment callbacks.
