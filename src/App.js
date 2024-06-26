import React, { useEffect, useState, useMemo } from 'react';
// import './App.css';

import { Map, GoogleApiWrapper, Marker, Polyline, useMap,  useMapLibrary, DirectionsService } from 'google-maps-react';
// import { DirectionsService } from 'google-maps-react';




const MapContainer = (props) => {
  
  

  function Directions(){
    
    const map = useMap();
    const routeslibrary = useMapLibrary("routes");
     const [DirectService, setDirectService] = useState();
     const [DirectRenderer, setDirectRenderer] = useState();
     const [routes, setRoutes] = useState([]);
     const [routeIndex, setRouteIndex] = useState(0);
     const selected = routes[routeIndex];
     const leg = selected?.legs[0];
  
  
    
    useEffect(() => {
  
      if (!routeslibrary || !map) return;
      setDirectService(new routeslibrary.DirectService())
      setDirectRenderer(new routeslibrary.DirectRenderer({map}))
    }, [routeslibrary, map]);
    
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



   if (!leg) return null;
   return <div className='direction'>
    <h1> {selected.summary} </h1>
   </div>
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
        
        {/* <Directions/> */}
        
        
       
      </Map>
         
         {/* <Directions/> */}

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









