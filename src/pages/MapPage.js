import { memo } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import './styles/mapPage.css'

const containerStyle = {
  width: '100%',
  height: '90vh'
};


const MapPage = ({delivery}) => {

  const from = {
    lat: delivery.from.geometry.location.lat(),
    lng: delivery.from.geometry.location.lng()
  }

  const to = {
    lat: delivery.to.geometry.location.lat(),
    lng: delivery.to.geometry.location.lng()
  }

  return (
    <div className='mapPageContainer'>
      <GoogleMap
        // googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        mapContainerStyle={containerStyle}
        center={from}
        zoom={13}
      >
        
        <Marker position={from} />
      </GoogleMap>
    </div>
  );
}
  
export default memo(MapPage);
