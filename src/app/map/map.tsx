import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import { ReactComponentElement, ReactElement, useMemo } from 'react'

export default function Map(props:any) {
  console.log('map', props)
  const center = useMemo(() => ({ lat: 40.70236538915158, lng: -73.91758267534527 }), [])
  const markers: ReactElement[] = [];
  // @ts-ignore
  const marker = props.restrooms.map((restroom, i)=> {
    markers.push(<Marker key={i} position={{lat: +restroom.latitude, lng: +restroom.longitude}} />)
    console.log('markers restroom', restroom)
  })

  return (
    <GoogleMap
      zoom={16}
      center={center}
      mapContainerClassName="map-container">
      {markers}
    </GoogleMap>)
}