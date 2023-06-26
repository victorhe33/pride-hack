//GET API fetch request for restroom data by location from external api
import { NextResponse } from "next/server";

export async function GET (
  request: Request, 
  {params} : {
    params: {
      lat: number,
      lng: number,
      pageNum: number,
      optionalFilters?: (boolean | undefined)[]
    } 
  }
) 
{
  const { lat, lng, pageNum } = params;
  console.log(params)
  const BASE_URL=`https://www.refugerestrooms.org/api/v1/restrooms`;
  let apiUrl = BASE_URL + `/by_location?page=${pageNum}&per_page=10&offset=0&lat=${lat}&lng=${lng}`;

  //'https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&lat=32.715736&lng=-117.161087'
  const res = await fetch(apiUrl, {
    headers: {
      'Content-Type' : 'application/json'
    }
  })
  const data = await res.json();
  return NextResponse.json({ data })
  }