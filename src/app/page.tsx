import Image from 'next/image'
import styles from './page.module.css'


export default async function Home() {
  const data = await getDefaultRestroomData()
  console.log("insidepage:",data);

  return (
    <main className={styles.main}>
      <h1>Pride Hack</h1>
      
    </main>
  )
}

async function getDefaultRestroomData() {
  const data = await fetch(`/api/restrooms`)

  if(!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}

