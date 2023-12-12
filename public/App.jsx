//App.js
import React, { useEffect, useState } from 'react';
import { GetLatLngGoogleUrl } from 'geo-leaflet';




const App = () => {
  const [coordinates, setCoordinates]= useState([])

  const coordinatesUrl =  GetLatLngGoogleUrl({url:'https://www.google.com/maps/place/Studio+Carolina+Winkler+-+Cilios,+Sobrancelhas,+Depila%C3%A7%C3%A3o,+Massagem,+Limpeza+de+pele,+Manicure+Pedicure+CARAPICUIBA+e+BARUERI/@-23.5390404,-46.8351828,18z/data=!4m6!3m5!1s0x94cf0127eb9b19e3:0x6371dcd074523619!8m2!3d-23.5377239!4d-46.832644!16s%2Fg%2F11sw0612_s?entry=ttu'})

 useEffect(() => {
  if(coordinatesUrl !== null && coordinatesUrl !== undefined && coordinates.length === 0){
    console.log({coordinatesUrl})
    
    setCoordinates([
      {lat:-23.5340096, lng:-46.8366234},
      {lat:-23.5340096, lng:-46.8253836},
      {lat:coordinatesUrl && coordinatesUrl.lat, lng: coordinatesUrl &&coordinatesUrl.lng}])
  }
 },[coordinatesUrl])
 
    
  return (<>
    {/* <ErrorComponent error={503} description="Ocorreu um problema no servidor" /> */}
    <h4>Lat: {coordinates.lat} Long:{coordinates.lng}</h4>

    <div style={{width:'80%', height:400, margin:'auto', background:'#c3c3c3'}}>
       {coordinates.length !== 0 &&  <PointMap coordinates={coordinates} config={{center:{lat:-23.5340096,lng:-46.8253836}}}/>}
    </div>
    </>
  );
};

export default App;
