import { NextResponse } from "next/server";
import { bookingRequestSchema, estimateBookingDepositCents } from "@/lib/booking-schema";

export async function POST(request: Request) {
  const formData = await request.formData();
  const rawBooking = Object.fromEntries(formData.entries());
  const parsed = bookingRequestSchema.safeParse(rawBooking);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Booking request is invalid.", errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const depositCents = estimateBookingDepositCents(parsed.data.eventSize);
  const paymentResponse = await fetch(new URL("/api/payments/ikhokha/create-link", request.url), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      booking: parsed.data,
      amount: depositCents
    })
  });

  const payment = await paymentResponse.json();

  if (!paymentResponse.ok) {
    return NextResponse.json(payment, { status: paymentResponse.status });
  }

  if (typeof payment.paylinkUrl === "string") {
    return NextResponse.redirect(new URL(payment.paylinkUrl, request.url), { status: 303 });
  }

  return NextResponse.json(payment);
}
