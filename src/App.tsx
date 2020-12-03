import React, { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Map from './components/Map';
import { useFetchAPI } from './hooks/useFetchAPI';

interface IEventData {
   description: string;
   events: [];
   link: string;
   title: string;
}

const App = () => {

   const url = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events';
   const {data, loading} = useFetchAPI(url);
   
   return (
      <div>
         { !loading ? <Map data={ data }/> : <Loader/>}
      </div>
   )
}

export default App;
