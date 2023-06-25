//GET API fetch request for restroom data by date from external api
export async function getRestroomsByDate() {
  //hardcoded the date, month, and year for testing
  const res = await fetch('https://www.refugerestrooms.org/api/v1/restrooms/by_date?page=1&per_page=10&offset=0&day=1&month=1&year=2023', {
    headers: {
      'Content-Type' : 'application/json'
    }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}