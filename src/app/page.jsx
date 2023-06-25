import styles from './page.module.css'
import { getDefaultRestrooms } from './api/restrooms/route';

// async function getDefaultRestrooms() {
//   const data = await fetch(`${endpoint}/restrooms`)

//   if (!data.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   return data.json()
// }

export default async function Home() {
  const defaultRestroomData = await getDefaultRestrooms();
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
