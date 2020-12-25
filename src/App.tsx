import React from 'react';
import Loader from './components/Loader';
import Map from './components/Map';
import { useFetchAPI } from './shared/hooks/useFetchAPI';

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
