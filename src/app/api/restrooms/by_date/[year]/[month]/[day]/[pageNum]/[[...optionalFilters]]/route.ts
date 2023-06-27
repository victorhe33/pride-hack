//GET API fetch request for restroom data by date from external api
import { NextResponse } from "next/server";
import { useRouter } from 'next/router';

export async function GET (
  request: Request, 
  {params} : {
    params: {
      pageNum: number,
      day: number,
      month: number,
      year: number,
      optionalFilters?: (boolean | string)[]
    } 
  }
) {
  const { pageNum, day, month, year } = params;

  const BASE_URL=`https://www.refugerestrooms.org/api/v1/restrooms/`;
  let apiUrl = BASE_URL + `by_date?page=${pageNum}&per_page=10&offset=0&day=${day}&month=${month}&year=${year}`;

  if ('optionalFilters' in params) {
    //The elements of optionalFilters controls whether the restroom data required the following: ADA Accessibility, unisex, or updated since given date.
    const optionalFilters = params.optionalFilters;
    apiUrl = apiUrl + ((optionalFilters[0] != undefined) ? `&ada=${optionalFilters[0]}` : "") + ((optionalFilters[1] != "undefined") ? `&unisex=${optionalFilters[1]}` : "") + ((optionalFilters[2] != undefined) ? `&updated=${optionalFilters[2]}` : "")
  }

  const res = await fetch(apiUrl, {
    headers: {
      'Content-Type' : 'application/json'
    }
  })
  
  const data = await res.json();
  return NextResponse.json({ data })

}