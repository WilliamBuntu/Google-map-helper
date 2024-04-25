import React, { useEffect, useState, useMemo } from 'react';
// import './App.css';

import { Map, 
  GoogleApiWrapper, 
  Marker,
   Polyline, 
   useMap,
    useMapLibrary,  } from '@vis.gl/react-google-maps';





const MapContainer = (props) => {

  const stops = useMemo(() => [
    // {lat: 1.939826787816454, lng: 30.0445426438232, name:"Nyabugogo"},
    { lat: -1.9355377074007851, lng: 30.060163829002217, name: 'Stop A' },
    { lat: -1.9358808342336546, lng: 30.08024820994666, name: 'Stop B' },
    { lat: -1.9489196023037583, lng: 30.092607828989397, name: 'Stop C' },
    { lat: -1.9592132952818164, lng: 30.106684061788073, name: 'Stop D' },
    { lat: -1.9487480402200394, lng: 30.126596781356923, name: 'Stop E' },
    { lat: -1.9365670876910166, lng: 30.13020167024439, name: 'Kimironko' },
  ], []);

  
 
  function Directions(){
    const map = useMap();
    const routeslibrary = useMapLibrary("routes");
     const [DirectService, setDirectService] = useState();
     const [DirectRenderer, setDirectRenderer] = useState();
     const [routes, setRoutes] = useState([]);
  
  
    
    useEffect(() => {
  
      if (!routeslibrary || !map) return;
      setDirectService(new routeslibrary.DirectService())
      setDirectRenderer(new routeslibrary.DirectRenderer({map}))
    }, [routeslibrary, map]); 
      console.log(DirectService)
    useEffect(() => {
      if (!DirectService || !DirectRenderer) return;
      DirectService.route({
        origin: new window.google.maps.LatLng(-1.939826787816454, 30.0445426438232),
        destination: new window.google.maps.LatLng(-1.9365670876910166, 30.13020167024439),//remember about window you added
        travelMode: window.google.maps.TravelMode.DRIVING ,// or Travel mode
        provideRouteAlternatives: true
      }).then(Response => {
        DirectRenderer.setDirections(Response)// remember setDirections
        setRoutes(Response.routes)

      })
      
    }, [DirectService, DirectRenderer]);
    return null;
   }


  return (
    <div className='h-full'> 
      <Map
        google={props.google}
        style={{ width: '100%', height: '100%', position: 'relative' }}
        initialCenter={{ lat: -1.939826787816454, lng: 30.0445426438232 }}
        zoom={12}

        fullscreenControl={false}
        // onClick={handleMapClick} // Add onClick event handler
      >
        <Directions/>
        {/* {stops.map((stop, index) => (
          <Marker key={index} position={{ lat: stop.lat, lng: stop.lng }} title={stop.name} />
        ))} */}
        {/* <Polyline
          path={stops.map((stop) => ({ lat: stop.lat, lng: stop.lng }))}
          options={{
            strokeColor: '#0000FF',
            strokeOpacity: 0.8,
            strokeWeight: 2,
          }}
        /> */}
        {/* {driverPosition && (
          <Marker
            position={driverPosition}
            icon={{
              url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
              scaledSize: new window.google.maps.Size(40, 40),
            }}
            title="Driver"
          />
        )} */}
      </Map>


      {/* {eta && (
        <p className="text-center bg-red-700">
          ETA to next stop: {eta}<br />
          Distance to next stop: {distanceToNextStop}
        </p>
      )} */}


    </div>
  );


};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapContainer);








