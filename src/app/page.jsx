import styles from './page.module.css'
// import fetch from 'node-fetch';


// Victor Test Api Endpoint Call
// async function getData() {
//   const res = await fetch('http://localhost:3000/api/')
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }

export default async function Home() {
  const data = await getDefaultRestroomData();
  console.log(data);
  return (
    <main className={styles.main}>
      <h1>Pride Hack</h1>
      <button> button </button>
    </main>
  )
}

async function getDefaultRestroomData() {
  const res = await fetch('https://www.refugerestrooms.org/api/v1/restrooms?page=1&per_page=10&offset=0', {
    headers: {
      'Content-Type' : 'application/json'
    }
  })

  if(!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json();
}
