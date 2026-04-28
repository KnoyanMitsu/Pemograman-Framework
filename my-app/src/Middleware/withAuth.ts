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

    // 1. Jika rute butuh login (requireAuth) tapi tidak ada token, tendang ke login
    if (requireAuth.includes(pathname) && !token) {
      const loginUrl = new URL("/auth/login", req.url);
      loginUrl.searchParams.set("callbackUrl", encodeURI(req.url));
      return NextResponse.redirect(loginUrl);
    }

    // 2. Jika sudah login (token ada), atur pengalihan otomatis (Conditional Redirect)
    if (token) {
      // Jika user baru login dan masih di halaman login, arahkan ke dashboard masing-masing
      if (pathname === "/auth/login") {
        if (token.role === "admin")
          return NextResponse.redirect(new URL("/admin", req.url));
        if (token.role === "editor")
          return NextResponse.redirect(new URL("/editor", req.url));
        return NextResponse.redirect(new URL("/", req.url));
      }

      // 3. PROTEKSI KHUSUS ADMIN: Hanya Admin yang boleh masuk /admin
      if (pathname.startsWith("/admin") && token.role !== "admin") {
        return NextResponse.redirect(new URL("/", req.url));
      }

      // 4. PROTEKSI KHUSUS EDITOR: Hanya Editor & Admin yang boleh masuk /editor
      if (
        pathname.startsWith("/editor") &&
        token.role !== "editor" &&
        token.role !== "admin"
      ) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    // 5. Izinkan lanjut ke rute berikutnya jika semua valid
    return middleware(req, next);
  };
}
