import React from 'react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

interface Props {
    lat?: number;
    lng?: number;
    onClick?: () => void
}

const LocationMarker: React.FC<Props> = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="location-icon" />
        </div>
)
}

export default LocationMarker;