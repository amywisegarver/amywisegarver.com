import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { CASE_STUDY_COOKIE, getAccessToken } from "@/lib/case-study-auth";

export function proxy(request: NextRequest) {
  const token = request.cookies.get(CASE_STUDY_COOKIE)?.value;

  if (token === getAccessToken()) {
    return NextResponse.next();
  }

  const unlockUrl = new URL("/unlock", request.url);
  unlockUrl.searchParams.set("next", request.nextUrl.pathname);
  return NextResponse.redirect(unlockUrl);
}

export const config = {
  matcher: "/work/:path*",
};
