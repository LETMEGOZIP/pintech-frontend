import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
  const bid = request.nextUrl.pathname.split('/').pop()

  console.log("urls")
  return NextResponse.json(board ?? {})
}