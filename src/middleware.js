import { validateAuth } from "@/utils/middlewares/validateAuth";

export function middleware(req) {
  return validateAuth(req);
}

export const config = {
  matcher: "/admin/:path*",
};
