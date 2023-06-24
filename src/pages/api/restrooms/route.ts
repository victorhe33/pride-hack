import { NextResponse } from "next/server";

export async function GET() {
  // try {
  //   const res = await fetch('https://www.refugerestrooms.org/api/v1/restrooms?page=1&per_page=10&offset=0', {
  //     headers: {
  //       'Content-Type' : 'application/json'
  //     }
  //   })
  //   const data = await res.json();
  //   return NextResponse.json({
  //     defaultRestroomData: data,
  //   }) 
  // } catch (error) {
  //   return new NextResponse('Internal Server Error', { status: 500 });
  // }
  return NextResponse.json({
    defaultRestroomData: 'Test Data',
  })
}

/*
export default async function getDefaultRestroomData() {
  const res = await fetch('https://www.refugerestrooms.org/api/v1/restrooms?page=1&per_page=10&offset=0');
  const data = await res.json();
  return {
    props: {
      defaultRestroomsData: "data"
    }
  }
}
*/
  //fetch default restroom data 
  /*
    page integer
    per_page integer
    offset integer
    ADA accessible boolean
    unisex boolean
  */ 
  // const res = await fetch('https://www.refugerestrooms.org/api/v1/restrooms?page=1&per_page=10&offset=0');
  // const data = await res.json();