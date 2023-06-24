import Image from 'next/image'
import styles from './page.module.css'


export default async function Home() {
  const defaultRestroomsData = await getDefaultRestroomsData();
  console.log(defaultRestroomsData);

  return (
    <main className={styles.main}>
      <h1>Pride Hack</h1>
      
    </main>
  )
}

async function getDefaultRestroomsData() {
  const res = await fetch('https://www.refugerestrooms.org/api/v1/restrooms?page=1&per_page=10&offset=0');
  
  if(!res.ok) {
    throw new Error('Failed to fetch defaultRestroomsData')
  }

  return res.json();
}

