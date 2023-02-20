import { memo, useCallback, useState } from 'react';
import { GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';

import './styles/mapPage.css'

const containerStyle = {
  width: '100%',
  height: '90vh'
};


const MapPage = ({delivery}) => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
  })

  // const [map, setMap] = useState(null)

  const from = {
    lat: delivery.from.geometry.location.lat(),
    lng: delivery.from.geometry.location.lng()
  }

  const to = {
    lat: delivery.to.geometry.location.lat(),
    lng: delivery.to.geometry.location.lng()
  }

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(from).extend(to);
    map.fitBounds(bounds);

    // setMap(map)
  }, [])

  return isLoaded ? (
    
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={from}
        zoom={13}
        onLoad={onLoad}
      >
        <Marker position={from} />
        <Marker position={to} />
      </GoogleMap>
  
  ) : <></>
}
  
export default memo(MapPage);
