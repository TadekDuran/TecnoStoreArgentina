import { NextResponse } from "next/server";

export function validateAuth(req) {
  const token = req.cookies.get("adminToken")?.value;

  if (token !== process.env.ADMIN_SECRET) {
    return NextResponse.redirect(new URL("/admin-login", req.url));
  }

  return NextResponse.next();
}