export default async function getDefaultRestroomData() {
  const res = await fetch('https://www.refugerestrooms.org/api/v1/restrooms?page=1&per_page=10&offset=0');
  const data = await res.json();
  console.log({ restrooms : data});
  res.json({ restroom: data})
}

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