import React, { useState } from 'react';
import GoogleMapReact, { Coords } from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfo from './LocationInfo';

interface Props {
   center?: Coords;
   zoom?: number;
   data?: any;
}

interface ILocationInfo {
   id: number;
   title: string;
}

const Map: React.FC<Props> = ({center, zoom, data}) => {
   const [locationInfo, setLocationInfo] = useState<ILocationInfo | null>(null);
   const markers = data.events.map((val:any) => {
      if ( val && val.geometries && val.geometries[0].coordinates && val.categories && val.categories[0].id === 8) {
         return <LocationMarker lat={val.geometries[0].coordinates[1]} 
                                 lng={val.geometries[0].coordinates[0]} 
                                 onClick={() => setLocationInfo({id: val.id, title: val.title})}
                                 key={val.id}/>
      }
      return null;
   });
   return (
      <div className="map">
         <GoogleMapReact
            bootstrapURLKeys={{ key: ''}}
            defaultCenter={center}
            defaultZoom={zoom}>
               {markers}
         </GoogleMapReact>
         {locationInfo && <LocationInfo id={locationInfo.id} title={locationInfo.title}/>}
      </div>
   )
}

Map.defaultProps = {
   center: {
      lat: 42.3265,
      lng: -122.8756
   },
   zoom: 6
}

export default Map;