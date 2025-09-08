import { NextResponse } from "next/server";

export function middleware() {
  if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true") {
    return NextResponse.rewrite(
      new URL(
        "/maintenance",
        process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
      )
    );
  }
}
