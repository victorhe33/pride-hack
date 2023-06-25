//GET API fetch request for restroom data by date from external api
import { NextResponse } from "next/server";

export async function GET () {
  const res = await fetch('https://www.refugerestrooms.org/api/v1/restrooms/by_date?page=1&per_page=10&offset=0&day=1&month=1&year=2023', {
    headers: {
      'Content-Type' : 'application/json'
    }
  })
  const data = await res.json();
  return NextResponse.json({ data })
}