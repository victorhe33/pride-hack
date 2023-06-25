//GET API fetch request for restroom data by search from external api
export async function getRestroomsBySearch() {
  //hardcoded search query of Taco Bell for testing. Warning, it took a long time to fetch the data in external api's website, may take a while.
  const res = await fetch('https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=10&offset=0&query=Taco%20Bell', {
    headers: {
      'Content-Type' : 'application/json'
    }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}