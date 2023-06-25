//GET API fetch request for restroom data by location from external api
import { NextResponse } from "next/server";

export async function GET () {
  const res = await fetch('https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&lat=32.715736&lng=-117.161087', {
    headers: {
      'Content-Type' : 'application/json'
    }
  })
  const data = await res.json();
  return NextResponse.json({ data })
}