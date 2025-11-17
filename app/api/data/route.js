import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    success: true,
    message: 'hle!',
    data: {
      message: 'Message et email envoyés avec succès!',
    }
  }, { status: 200 });
};