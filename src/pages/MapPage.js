import { memo } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import './styles/mapPage.css'

const containerStyle = {
  width: '100%',
  height: '90vh'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const MapPage = () => {
  return (
    <div className='mapPageContainer'>
      <GoogleMap
        // googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </div>
  );
}
  
export default memo(MapPage);
