
import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host")?.split(":")[0] || "";
  const pathname = request.nextUrl.pathname;

  // Main landing page
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return NextResponse.next();
  }

  // Extract subdomain from *.localhost
  const match = hostname.match(/^([a-z0-9-]+)\.localhost$/i);

  if (!match) {
    return NextResponse.next();
  }

  const slug = match[1];

  // Reserved subdomains
  const reserved = ["www", "api", "admin"];

  if (reserved.includes(slug)) {
    return NextResponse.next();
  }

  // Exclude API and static files
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Prevent rewrite loops: if already under /store, skip
  if (pathname.startsWith("/store")) {
    return NextResponse.next();
  }

  // Rewrite to store page
  const url = request.nextUrl.clone();
  url.pathname = `/store/${slug}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
