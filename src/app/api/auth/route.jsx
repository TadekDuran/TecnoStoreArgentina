import { NextResponse } from "next/server";

export async function POST(req) {
  const { password } = await req.json();

  if (password === process.env.ADMIN_SECRET) {
    const response = NextResponse.json({ success: true });

    response.cookies.set("adminToken", process.env.ADMIN_SECRET, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    return response;
  }

  return NextResponse.json({ success: false, message: "Clave incorrecta" }, { status: 401 });
}