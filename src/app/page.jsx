import styles from './page.module.css'
const API_URL= process.env.API_URL;

export default async function Home() {
  //Testing API
  //const restroomsByLocation = await getRestroomsByLocation();
  //console.log(restroomsByLocation);

  return (
    <main className={styles.main}>
      <h1>Pride Hack</h1>
      <button> button </button>
    </main>
  )
}

async function getDefaultRestrooms(pageNum) {
  const res = await fetch(API_URL + `/api/restrooms/${pageNum}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getRestroomsByDate(year, month, day, pageNum, filterForADA=udefined, filterForUnisex=undefined, filterForUpdated=undefined) {
  const res = await fetch(API_URL + '/api/restrooms/by_date' + `/${year}/${month}/${day}/${pageNum}/${filterForADA}/${filterForUnisex}/${filterForUpdated}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getRestroomsByLocation(lat, lng, pageNum, filterForADA=undefined, filterForUnisex=undefined, filterForUpdated=undefined) {
  const res = await fetch(API_URL + '/api/restrooms/by_location' + `/${lat}/${lng}/${pageNum}/${filterForADA}/${filterForUnisex}/${filterForUpdate}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

//getRestroomsBySearch endpoint under construction. Hardcoded path for testing, no parameters yet.
async function getRestroomsBySearch() {
  const res = await fetch(API_URL + '/api/restrooms/search')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}