import { NextRequest, NextResponse } from "next/server";
import { verifyRecaptchaToken } from "@/lib/recaptcha";

export async function POST(req: NextRequest) {
  let token: string | undefined;
  try {
    const body = (await req.json()) as { token?: string };
    token = body.token;
  } catch {
    return NextResponse.json({ success: false, message: "Invalid JSON body." }, { status: 400 });
  }

  const result = await verifyRecaptchaToken(token);

  if (!result.success) {
    return NextResponse.json(
      { success: false, score: result.score, message: result.message },
      { status: 403 }
    );
  }

  return NextResponse.json({ success: true, score: result.score });
}
