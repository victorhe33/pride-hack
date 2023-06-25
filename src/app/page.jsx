import styles from './page.module.css'
//import { getDefaultRestrooms } from './api/restrooms/route';
//import { getRestroomsByDate } from './api/restrooms/by_date/route';
//import { getRestroomsByLocation } from './api/restrooms/by_location/route';
//import { getRestroomsBySearch } from './api/restrooms/search/route';

const API_URL= process.env.API_URL;

export default async function Home() {
  const restroomsByLocation = await getRestroomsByLocation();
  console.log(restroomsByLocation);

  return (
    <main className={styles.main}>
      <h1>Pride Hack</h1>
      <button> button </button>
    </main>
  )
}

async function getDefaultRestrooms() {
  const res = await fetch(API_URL + '/api/restrooms')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getRestroomsByDate() {
  const res = await fetch(API_URL + '/api/restrooms/by_date')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getRestroomsByLocation() {
  const res = await fetch(API_URL + '/api/restrooms/by_location')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getRestroomsBySearch() {
  const res = await fetch(API_URL + '/api/restrooms/search')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}