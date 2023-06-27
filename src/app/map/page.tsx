'use client'
// import styles from '../page.module.css'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import {useMemo} from 'react'

export default function Home() {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: String(process.env.NEXT_PUBLIC_GOOGLE_MAP_SECRET_KEY) });


  if (!isLoaded) return <div>LOADING...</div>
  return <Map/>    
}

function Map() {
  const center = useMemo(() => ({ lat: 40.70236538915158, lng: -73.91758267534527 }),[])

  return (
    <GoogleMap 
      zoom={10}
      center={center} 
      mapContainerClassName="map-container">
      <Marker position={center}/>
    </GoogleMap>)
}

// 40.70236538915158, -73.91758267534527