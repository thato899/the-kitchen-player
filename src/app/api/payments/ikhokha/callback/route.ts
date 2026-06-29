import { NextResponse } from "next/server";
import { createIkhokhaSignature } from "@/lib/ikhokha";

export async function POST(request: Request) {
  const rawBody = await request.text();
  const appId = request.headers.get("ik-appid");
  const signature = request.headers.get("ik-sign");
  const expectedAppId = process.env.IKHOKHA_APP_ID;
  const appSecret = process.env.IKHOKHA_APP_SECRET;

  if (expectedAppId && appId !== expectedAppId) {
    return NextResponse.json({ message: "Invalid app id." }, { status: 401 });
  }

  if (appSecret) {
    const callbackUrl = new URL(request.url);
    const expectedSignature = createIkhokhaSignature(callbackUrl.pathname, rawBody, appSecret);

    if (signature !== expectedSignature) {
      return NextResponse.json({ message: "Invalid webhook signature." }, { status: 401 });
    }
  }

  const body = JSON.parse(rawBody) as {
    paylinkID: string;
    status: "SUCCESS" | "FAILURE";
    externalTransactionID: string;
    responseCode: string;
  };

  // TODO: Persist payment status, generate receipt PDF, and trigger receipt email.
  return NextResponse.json({ received: true, payment: body });
}
