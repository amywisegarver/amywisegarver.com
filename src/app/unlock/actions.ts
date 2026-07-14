"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { CASE_STUDY_COOKIE, checkPassword, getAccessToken } from "@/lib/case-study-auth";

function safeNext(next: string) {
  return next.startsWith("/work/") ? next : "/";
}

export async function unlock(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  const next = safeNext(String(formData.get("next") ?? "/"));

  if (!checkPassword(password)) {
    redirect(`/unlock?next=${encodeURIComponent(next)}&error=1`);
  }

  const cookieStore = await cookies();
  cookieStore.set(CASE_STUDY_COOKIE, getAccessToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  redirect(next);
}
