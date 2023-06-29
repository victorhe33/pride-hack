'use client'
// import styles from '../page.module.css'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import { useMemo } from 'react'
import  Map from './map'

export default function Tarik(props:any) {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: String(process.env.NEXT_PUBLIC_GOOGLE_MAP_SECRET_KEY) });
  const { restrooms } = props;

  if (!isLoaded) return <div>LOADING...</div>
  return <Map restrooms={restrooms.data}/>
}

