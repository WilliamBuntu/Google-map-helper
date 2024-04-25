import React, { useEffect, useState,  } from 'react';
// import './App.css';

import { Map, APIProvider, Marker, Polyline, useMap, useMapLibrary, } from '@vis.gl/react-google-maps';



export default function Intro(){

    return (
       
        <div>
            <APIProvider  apiKey = {process.env.REACT_APP_GOOGLE_MAPS_API_KEY} >
           
           <Map
            style={{ width: '100%', height: '100%', position: 'relative' }}
            initialCenter={{ lat: -1.939826787816454, lng: 30.0445426438232 }}
            zoom={12}
            fullscreenControl={false}
           >
           {/* <Directions /> */}
           </Map>

            </APIProvider>
        </div>
    );
}









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