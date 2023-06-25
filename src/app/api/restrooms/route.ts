import { NextResponse } from "next/server";

export async function GET () {
  const res = await fetch('https://www.refugerestrooms.org/api/v1/restrooms?page=1&per_page=10&offset=0', {
    headers: {
      'Content-Type' : 'application/json'
    }
  })
  const data = await res.json();
  return NextResponse.json({ data })
}