import React, { useEffect } from 'react';
import P from 'prop-types'
import L from 'leaflet';

const PointMap = (props) => {
const {coordinates, config} = props

  useEffect(() => {
    if(coordinates.length !== 0){

   
    const  map = L.map('map', {center:[config.center.lat, config.center.lng], zoomControl:true, zoomSnap:0.1,zoomAnimation:true,boxZoom:true,trackResize:true}).setView([-23.5340096, -46.8253836],13); 
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    map.panTo(L.latLng(config.center.lat, config.center.lng));
    
    coordinates.map(c => {
      L.marker([c.lat, c.lng]).addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();
    })
    L.marker([-23.5340096, -46.8253836]).addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();
      

map.on('click', onMapClick);


}
  }, []);
  function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

  return <div id="map"  style={{width:'100%', height:'100%'}}></div>;
};

export default PointMap;
PointMap.propTypes = {
coordinates:P.array.isRequired,
config:P.object
}
