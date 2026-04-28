import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./Middleware/withAuth";

export function mainMiddleware(request: NextRequest) {
  return NextResponse.next();
}

export default withAuth(mainMiddleware, [
  "/produk",
  "/about",
  "/admin",
  "/editor",
]);

export const config = {
  matcher: [
    "/produk/:path*",
    "/about/:path*",
    "/admin/:path*",
    "/editor/:path*",
  ],
};
