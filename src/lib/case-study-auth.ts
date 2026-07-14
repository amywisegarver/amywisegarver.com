import crypto from "node:crypto";

export const CASE_STUDY_COOKIE = "case_study_access";

function getSecret() {
  const secret = process.env.CASE_STUDY_SECRET;
  if (!secret) {
    throw new Error("CASE_STUDY_SECRET is not set");
  }
  return secret;
}

// One token, shared by every case study — entering the password once unlocks all of them.
export function getAccessToken() {
  return crypto.createHmac("sha256", getSecret()).update("granted").digest("hex");
}

export function checkPassword(password: string) {
  const expected = process.env.CASE_STUDY_PASSWORD ?? "";
  const a = Buffer.from(password);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}
