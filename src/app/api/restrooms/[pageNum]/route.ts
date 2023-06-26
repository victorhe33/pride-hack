import { NextResponse } from "next/server";

export async function GET (
  request: Request,
  { params }: {
    params: { pageNum: number}
  }
) {
  const res = await fetch(`https://www.refugerestrooms.org/api/v1/restrooms?page=${params.pageNum}&per_page=10&offset=0`, {
    headers: {
      'Content-Type' : 'application/json'
    }
  })
  const data = await res.json();
  return NextResponse.json({ data })
}