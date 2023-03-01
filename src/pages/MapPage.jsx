import { memo, useCallback, useState } from 'react';
import {
  GoogleMap, 
  DirectionsRenderer, 
  LoadScript, 
  Marker, 
  useJsApiLoader 
} from '@react-google-maps/api';

import './styles/mapPage.css';
import Distance from '../components/Distance';

const containerStyle = {
  width: '100%',
  height: '100%'
};


const MapPage = ({delivery}) => {

  const [directions, setDirections] = useState();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
  });

  const origin = {
    lat: delivery.origin.geometry.location.lat(),
    lng: delivery.origin.geometry.location.lng()
  };

  const destination = {
    lat: delivery.destination.geometry.location.lat(),
    lng: delivery.destination.geometry.location.lng()
  };

  const fetchDirections = (origin, destination) => {
    if (!(origin || destination)) return;

    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route({
      origin: origin,
      destination: destination,
      travelMode: window.google.maps.TravelMode.DRIVING,
    },
    (result, status) => {
      if (status === 'OK' && result) {
        setDirections(result);
      }
    })
  }

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(origin).extend(destination);
    fetchDirections(origin, destination);
    map.fitBounds(bounds);
  }, []);

  return isLoaded ? (
    <div className='mapPageContainer'>
      {directions && <Distance leg={directions.routes[0].legs[0]} />}
      <GoogleMap
        mapContainerStyle={containerStyle}
        onLoad={onLoad}
      >

        {directions && <DirectionsRenderer 
          directions={directions} 
          options={{
            polylineOptions: {
              zIndex: 50,
              strokeColor: '#5491f5',
              strokeOpacity: 100,
              strokeWeight: 5,
            }
          }} 
        />}
        

        <Marker position={origin} />
        <Marker position={destination} />
      </GoogleMap>
    </div>
  
  ) : <></>
};
  
export default memo(MapPage);
