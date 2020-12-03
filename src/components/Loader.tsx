import React from 'react';
import loader from '../assets/loader_map.gif';


const Loader = () => {
    return (
        <div className="loader">
            <img src={loader} alt="loading..."/>
        </div>
    )
}

export default Loader;