import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = [],
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;
    const token: any = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    // 1. Jika rute butuh login tapi gak ada token, tendang ke login
    if (requireAuth.includes(pathname) && !token) {
      const loginUrl = new URL("/auth/login", req.url);
      loginUrl.searchParams.set("callbackUrl", encodeURI(req.url));
      return NextResponse.redirect(loginUrl);
    }

    // 2. PROTEKSI KHUSUS: Hanya Admin yang boleh masuk rute /admin
    if (pathname.startsWith("/admin") && token?.role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // 3. Jika sudah login (Admin atau User), rute lain (seperti /product) silakan lewat
    return middleware(req, next);
  };
}
