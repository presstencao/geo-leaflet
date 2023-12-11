# geo-leaflet

Some functions are available to make it easier to generate a map, capture coordinates through a Google Map URL or even geolocation

## Description


This library is based on Leaflet.js, a JavaScript library for mobile-friendly interactive maps.

## Installation
Use the command
```bash
npm i geo-leaflet
```
## Usage
### Capture coordinates via Google Maps url

Please use the following function to capture coordinates from a Google Map URL

Remember to add the url string in object!
```javascript
import { GetLatLngGoogleUrl } from 'geo-leaflet';

export const MyComponent = () => {
   const coordinatesUrl = GetLatLngGoogleUrl({url:'https://www.google.com/maps/place/Londres,+Reino+Unido/@51.5287398,-0.2664034,11z/data=!3m1!4b1!4m6!3m5!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862!16zL20vMDRqcGw?entry=ttu'})

   console.log({coordinatesUrl})

}
```
Output: (Object)
```json
coordinatesUrl:{
   "lat": 51.5072178,
   "lng": -0.1275862
   }
```

### Generate map with location points
(In creation)
