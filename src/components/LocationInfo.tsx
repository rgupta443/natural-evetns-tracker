import React from 'react'

interface Props {
    id: number;
    title: string;
}

const LocationInfo: React.FC<Props> = ({id, title}) => {
    return (
        <div className="location-marker-info">
            <span className="id">{id}</span>
            <span className="title">{title}</span>
        </div>
    )
}

export default LocationInfo;