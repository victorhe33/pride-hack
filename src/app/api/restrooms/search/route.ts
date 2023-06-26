//GET API fetch request for restroom data by search from external api
import { NextResponse } from "next/server";
//Underconstruction, query hardcoded.
export async function GET () {
  const res = await fetch('https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=10&offset=0&query=Taco%20Bell', {
    headers: {
      'Content-Type' : 'application/json'
    }
  })
  const data = await res.json();
  return NextResponse.json({ data })
}