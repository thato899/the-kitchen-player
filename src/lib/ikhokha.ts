import crypto from "node:crypto";

const PAYMENT_PATH = "/public-api/v1/api/payment";

export type IkhokhaPaymentLinkRequest = {
  entityID: string;
  externalEntityID?: string;
  amount: number;
  currency: "ZAR";
  requesterUrl: string;
  mode: "live" | "test";
  description?: string;
  externalTransactionID: string;
  urls: {
    callbackUrl: string;
    successPageUrl: string;
    failurePageUrl: string;
    cancelUrl?: string;
  };
};

export type IkhokhaPaymentLinkResponse = {
  responseCode: string;
  message?: string;
  paylinkUrl?: string;
  paylinkID?: string;
  externalTransactionID?: string;
};

export function jsStringEscape(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\u0000/g, "\\0");
}

export function createIkhokhaSignature(path: string, body: string, appSecret: string) {
  const payloadToSign = jsStringEscape(`${path}${body}`);
  return crypto.createHmac("sha256", appSecret.trim()).update(payloadToSign).digest("hex");
}

export async function createPaymentLink(request: IkhokhaPaymentLinkRequest) {
  const appId = process.env.IKHOKHA_APP_ID;
  const appSecret = process.env.IKHOKHA_APP_SECRET;
  const baseUrl = process.env.IKHOKHA_API_BASE_URL ?? "https://api.ikhokha.com/public-api/v1";

  if (!appId || !appSecret) {
    return {
      responseCode: "DEMO",
      message: "Demo payment link generated because iKhokha credentials are not configured.",
      paylinkUrl: `/payment-demo?externalTransactionID=${request.externalTransactionID}`,
      paylinkID: `demo-${request.externalTransactionID}`,
      externalTransactionID: request.externalTransactionID
    } satisfies IkhokhaPaymentLinkResponse;
  }

  const body = JSON.stringify(request);
  const signature = createIkhokhaSignature(PAYMENT_PATH, body, appSecret);
  const response = await fetch(`${baseUrl}/api/payment`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "IK-APPID": appId.trim(),
      "IK-SIGN": signature
    },
    body
  });

  if (!response.ok) {
    throw new Error(`iKhokha payment request failed with status ${response.status}`);
  }

  return (await response.json()) as IkhokhaPaymentLinkResponse;
}
