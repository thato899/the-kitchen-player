import { describe, expect, it } from "vitest";
import { bookingRequestSchema, estimateBookingDepositCents } from "@/lib/booking-schema";

describe("bookingRequestSchema", () => {
  it("accepts a complete catering booking request", () => {
    const result = bookingRequestSchema.safeParse({
      eventType: "Wedding",
      audience: "Family",
      name: "Player Chef",
      eventSize: "120 guests",
      location: "Johannesburg",
      theme: "Elegant",
      cookingMenu: "Buffet and dessert",
      equipment: "Tables and warmers",
      venueSize: "Large hall",
      organizerEmail: "client@example.com",
      organizerPhone: "0712345678"
    });

    expect(result.success).toBe(true);
  });

  it("rejects invalid organizer email addresses", () => {
    const result = bookingRequestSchema.safeParse({
      eventType: "Wedding",
      audience: "Family",
      name: "Player Chef",
      eventSize: "120 guests",
      location: "Johannesburg",
      cookingMenu: "Buffet",
      venueSize: "Large hall",
      organizerEmail: "not-an-email",
      organizerPhone: "0712345678"
    });

    expect(result.success).toBe(false);
  });
});

describe("estimateBookingDepositCents", () => {
  it("uses larger deposits for larger events", () => {
    expect(estimateBookingDepositCents("40 guests")).toBe(150000);
    expect(estimateBookingDepositCents("100 guests")).toBe(300000);
    expect(estimateBookingDepositCents("250 guests")).toBe(500000);
  });
});
