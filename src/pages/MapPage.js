import { memo } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

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
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
        </LoadScript>
    </div>
  );
}
  
export default memo(MapPage);



// function MyComponent() {
//   return (
//     <LoadScript
//       googleMapsApiKey="YOUR_API_KEY"
//     >
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//       >
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//     </LoadScript>
//   )
// }

// export default React.memo(MyComponent)