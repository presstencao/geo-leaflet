import  { useState } from 'react'
import P from 'prop-types'



/**
* Returns the latitude and longitude coordinates of a location from a Google Maps search query
* @param {string} url - The URL of the Google Maps search point
* @example 
* const coordinatesUrl = GetLatLngGoogleUrl({url:'https://www.google.com/maps/place/Londres,+Reino+Unido/@51.5287398,-0.2664034,11z/data=!3m1!4b1!4m6!3m5!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862!16zL20vMDRqcGw?entry=ttu'})
* @returns {object} - An object containing the latitude and longitude coordinates of the location
* @example coordinatesUrl:{lat:51.5287398, lng:-0.2664034}
*/
//Function to get the latitude and longitude from the url
function GetLatLngGoogleUrl(props) {
    //Declare two state variables to store the latitude and longitude
    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)

    //Function to get the latitude and longitude from the url
   
        //Get the data from the url
        const data = props.url && props.url?.split('@')[1] || []
       
        //Check if the url is valid
        if (data.length === 0) {
            console.error('Url Inválido!')
        }
        //Get the coordinates from the data
        const coord = data.length !== 0 && data?.split(',') || []
        //Check if the coordinates are valid
        if (coord.length === 0) {
            console.error('Coordenadas inválidas')
        }
        //Set the latitude and longitude state variables
        setLat(coord[0])
        setLng(coord[1])

 

    //Return the latitude and longitude
    return lat && lng && { lat: parseFloat(lat), lng: parseFloat(lng) }
}

//Set the prop types


//Export the component
export default GetLatLngGoogleUrl
GetLatLngGoogleUrl.propTypes = {
    url:P.string.isRequired
}