import { z } from "zod";

export const bookingRequestSchema = z.object({
  eventType: z.string().min(2, "Choose an event type."),
  audience: z.string().min(2, "Tell us who the event is for."),
  name: z.string().min(2, "Name and surname are required."),
  eventSize: z.string().min(1, "Event size is required."),
  location: z.string().min(2, "Location is required."),
  theme: z.string().optional(),
  cookingMenu: z.string().min(2, "Cooking menu is required."),
  equipment: z.string().optional(),
  venueSize: z.string().min(1, "Venue size is required."),
  organizerEmail: z.string().email("A valid email address is required."),
  organizerPhone: z.string().min(7, "A contact number is required.")
});

export type BookingRequest = z.infer<typeof bookingRequestSchema>;

export function estimateBookingDepositCents(eventSize: string) {
  const guests = Number.parseInt(eventSize.replace(/\D/g, ""), 10);

  if (Number.isNaN(guests)) {
    return 150000;
  }

  if (guests >= 200) {
    return 500000;
  }

  if (guests >= 80) {
    return 300000;
  }

  return 150000;
}
