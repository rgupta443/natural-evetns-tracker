import React, { useState } from 'react';
import GoogleMapReact, { Coords } from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfo from './LocationInfo';
import DropDown from '../shared/hooks/components/dropDown/DropDown';

interface Props {
   center?: Coords;
   zoom?: number;
   data?: any;
}

interface ILocationInfo {
   id: number;
   title: string;
}

let list: ILocationInfo[] = [];
let markers: any;

const Map: React.FC<Props> = ({ center, zoom, data }) => {
   const [locationInfo, setLocationInfo] = useState<ILocationInfo | null>(null);
   const [selectedItemValue, setSelectedItemValue] = useState<ILocationInfo | null>({ id: -1, title: 'Select event' });

   data.events.forEach((elem: any, index: number) => {
      if (list.findIndex(el => el.id === elem.categories[0].id) === -1) {
         list.push({
            id: elem.categories[0].id,
            title: elem.categories[0].title
         })
      }
   });

   const toggleSelectedItem = (item: ILocationInfo): void => {
      setSelectedItemValue({
         id: item.id,
         title: item.title
      });

      markers = data.events.map((val: any) => {
         if (val && val.geometries && val.geometries[0].coordinates && val.categories && val.categories[0].id === item.id) {
            return <LocationMarker lat={val.geometries[0].coordinates[1]}
               lng={val.geometries[0].coordinates[0]}
               onClick={() => setLocationInfo({ id: val.id, title: val.title })}
               key={val.id} />
         }
         return null;
      });
   }
   return (
      <div className="map">
         <div className="drop-down">
            {<DropDown dropDownItems={list} title={selectedItemValue?.title} toggleSelectedItem={toggleSelectedItem} />}
         </div>
         <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            defaultCenter={center}
            defaultZoom={zoom}>
            {markers}
         </GoogleMapReact>
         {locationInfo && <LocationInfo id={locationInfo.id} title={locationInfo.title} />}
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