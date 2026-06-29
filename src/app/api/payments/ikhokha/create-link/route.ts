import { NextResponse } from "next/server";
import { z } from "zod";
import { createPaymentLink } from "@/lib/ikhokha";
import { bookingRequestSchema } from "@/lib/booking-schema";

const createPaymentRequestSchema = z.object({
  booking: bookingRequestSchema,
  amount: z.number().int().positive()
});

export async function POST(request: Request) {
  const payload = createPaymentRequestSchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json({ message: "Invalid payment request." }, { status: 400 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? new URL(request.url).origin;
  const externalTransactionID = crypto.randomUUID();
  const payment = await createPaymentLink({
    entityID: process.env.IKHOKHA_ENTITY_ID ?? externalTransactionID,
    externalEntityID: payload.data.booking.organizerEmail,
    amount: payload.data.amount,
    currency: "ZAR",
    requesterUrl: `${siteUrl}/book`,
    mode: (process.env.IKHOKHA_MODE as "live" | "test") ?? "live",
    description: `Deposit for ${payload.data.booking.eventType} catering booking`,
    externalTransactionID,
    urls: {
      callbackUrl: `${siteUrl}/api/payments/ikhokha/callback`,
      successPageUrl: `${siteUrl}/payment-success?reference=${externalTransactionID}`,
      failurePageUrl: `${siteUrl}/payment-failed?reference=${externalTransactionID}`,
      cancelUrl: `${siteUrl}/book`
    }
  });

  return NextResponse.json(payment);
}
