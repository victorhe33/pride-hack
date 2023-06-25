import styles from './page.module.css'
import { getDefaultRestrooms } from './api/restrooms/route';
import { getRestroomsByDate } from './api/restrooms/by_date/route';
import { getRestroomsByLocation } from './api/restrooms/by_location/route';
import { getRestroomsBySearch } from './api/restrooms/search/route';

export default async function Home() {
  const defaultRestroomData = await getRestroomsByLocation();
  console.log(defaultRestroomData);

  return (
    <main className={styles.main}>
      <h1>Pride Hack</h1>
      <button> button </button>
    </main>
  )
}

// async function getDefaultRestroomData({ query }) {
//   const res = await fetch('https://www.refugerestrooms.org/api/v1/restrooms?page=1&per_page=10&offset=0', {
//     headers: {
//       'Content-Type' : 'application/json'
//     }
//   })

//   if(!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
//   return res.json();
// }
