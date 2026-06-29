import { expect, test } from "@playwright/test";

test("home page links to booking and gallery", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "The Kitchen Player" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Start a booking" })).toHaveAttribute("href", "/book");
  await expect(page.getByRole("link", { name: "View gallery" })).toHaveAttribute("href", "/gallery");
});
