//GET API fetch request for defaultRestroomData from external api
export async function getDefaultRestrooms() {
  const res = await fetch('https://www.refugerestrooms.org/api/v1/restrooms?page=1&per_page=10&offset=0', {
    headers: {
      'Content-Type' : 'application/json'
    }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}