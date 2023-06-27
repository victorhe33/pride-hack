import styles from './page.module.css'
const API_URL= process.env.API_URL;
import Tarik from './map/page'

export default async function Home() {
  const hardcode = { lat: 40.70236538915158, lng: -73.91758267534527 }
  const restrooms = await getRestroomsByLocation(40.70236538915158, -73.91758267534527, 1 )
  console.log('restrooms fetch', restrooms)



  return (
    <main className={styles.main}>
      <h1>Pride Hack</h1>
      <button> button </button>
      <Tarik/>
    </main>
  )
}

async function getDefaultRestrooms(pageNum) {
  const res = await fetch(API_URL + `/api/restrooms/${pageNum}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json()
}

async function getRestroomsByDate(year, month, day, pageNum, filterForADA=undefined, filterForUnisex=undefined, filterForUpdated=undefined) {
  const res = await fetch(API_URL + '/api/restrooms/by_date' + `/${year}/${month}/${day}/${pageNum}/${filterForADA}/${filterForUnisex}/${filterForUpdated}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json()
}

async function getRestroomsByLocation(lat, lng, pageNum, filterForADA=undefined, filterForUnisex=undefined) {
  const res = await fetch(API_URL + '/api/restrooms/by_location' + `/${lat}/${lng}/${pageNum}/${filterForADA}/${filterForUnisex}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json()
}

//getRestroomsBySearch endpoint under construction. Hardcoded path for testing, no parameters yet.
async function getRestroomsBySearch(searchQuery, pageNum, filterForADA=undefined, filterForUnisex=undefined) {
  const res = await fetch(API_URL + '/api/restrooms/search' + `/${searchQuery}/${pageNum}/${filterForADA}/${filterForUnisex}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json()
}