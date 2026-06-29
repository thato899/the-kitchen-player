import { describe, expect, it } from "vitest";
import { createIkhokhaSignature, jsStringEscape } from "@/lib/ikhokha";

describe("iKhokha signing helpers", () => {
  it("escapes JSON payloads before signing", () => {
    expect(jsStringEscape('/path{"amount":100}')).toBe('/path{\\"amount\\":100}');
  });

  it("creates deterministic HMAC signatures", () => {
    const first = createIkhokhaSignature("/public-api/v1/api/payment", '{"amount":100}', "secret");
    const second = createIkhokhaSignature("/public-api/v1/api/payment", '{"amount":100}', "secret");

    expect(first).toBe(second);
    expect(first).toHaveLength(64);
  });
});
