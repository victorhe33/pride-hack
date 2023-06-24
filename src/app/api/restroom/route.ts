// Victor NESTED test route
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({ data: 'OMG Nested GET Route!' })
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ data: 'OMG Nested POST Route!' })
}