import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function validateAuth(req) {
  const token = req.cookies.get("adminToken")?.value;

  if (token !== process.env.ADMIN_SECRET) {
    return NextResponse.redirect(new URL("/admin-login", req.url));
  }

  return NextResponse.next();
}

export async function validateAdmin() {
  const token = (await cookies()).get("adminToken")?.value;

  if (token !== process.env.ADMIN_SECRET) {
    throw new Error("Unauthorized");
  }
}
