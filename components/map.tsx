import { useState, useCallback, memo} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

function GGMap({prop}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyC5BbhHRpZDvC0dLI_QkgTevZ6hlD3Knrg"
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(prop.center);
    map.fitBounds(bounds);
    
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={prop.center}
        zoom={8}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={prop.center}/>
      </GoogleMap>
  ) : <></>
}

export default memo(GGMap)