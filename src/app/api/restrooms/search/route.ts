//GET API fetch request for restroom data by search from external api
import { NextResponse } from "next/server";

export async function GET (
  request: Request, 
  {params} : {
    params: {
      searchQuery: string,
      pageNum: number,
      optionalFilters?: (boolean | string)[]
    } 
  }
) {
  const { searchQuery, pageNum } = params;

  const BASE_URL=`https://www.refugerestrooms.org/api/v1/restrooms`;
  let apiUrl = BASE_URL + `/search?page=${pageNum}&per_page=10&offset=0&query=${searchQuery}`;

  if ('optionalFilters' in params) {
    //The elements of optionalFilters controls whether the restroom data required the following: ADA Accessibility or unisex.
    const optionalFilters = params.optionalFilters;
    apiUrl = apiUrl + ((optionalFilters[0] != undefined) ? `&ada=${optionalFilters[0]}` : "") + ((optionalFilters[1] != "undefined") ? `&unisex=${optionalFilters[1]}` : "");
  }

  const res = await fetch(apiUrl, {
    headers: {
      'Content-Type' : 'application/json'
    }
  })
  const data = await res.json();
  return NextResponse.json({ data })
}