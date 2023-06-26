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
      optionalFilters?: (boolean | undefined)[]
    } 
  }
) {
  const { pageNum, day, month, year } = params;

  const BASE_URL=`https://www.refugerestrooms.org/api/v1/restrooms/`;
  let apiUrl = BASE_URL + `by_date?page=${pageNum}&per_page=10&offset=0&day=${day}&month=${month}&year=${year}`;

  console.log("params", params)

  if ('optionalFilters' in params) {
    console.log("exist");
  }

  if (params?.optionalFilters) {
    console.log("exist2")
  }

  //filterOptions is for the optional filters for unisex, accessible restrooms, or restrooms updated since the submited date. All of them are boolean if they exist.
  //EX:ada=true&unisex=false&updated=true

  //Trying to add the optional filters to the apiUrl if they exist
  //not sure how to multiple handle optional params in the route handler
  // if(typeof params.optionalFilters !== null){
  //   // console.log(`ada=${optionalFilters[0]}`)
  //   // apiUrl = apiUrl + `&ada=${optionalFilters[0]}`
  //   console.log("activated")
  // }

  const res = await fetch(apiUrl, {
    headers: {
      'Content-Type' : 'application/json'
    }
  })
  
  const data = await res.json();
  return NextResponse.json({ data })

}