// Victor test route
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) { 
  return NextResponse.json({ data: 'Victor and Keyla are the best!' })
}