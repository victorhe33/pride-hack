//GET API fetch request for restroom data by location from external api
export async function getRestroomsByLocation() {
  //hardcoded the latitude and longitude of San Diego, CA for testing
  const res = await fetch('https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&lat=32.715736&lng=-117.161087', {
    headers: {
      'Content-Type' : 'application/json'
    }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}