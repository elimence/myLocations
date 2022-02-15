import React from "react";
import { useScript } from './hooks/use-script'

export const Marker = (options) => {
    const status = useScript(
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyCUDioSf9nqQMCtELkh7duv6HVpJQIJlZI&callback=init"
    );
    const [marker, setMarker] = React.useState();

    React.useEffect(() => {
        if (status === 'ready') {
            if (!marker) {
                setMarker(new window.google.maps.Marker());
            }
    
            // remove marker from map on unmount
            return () => {
                if (marker) {
                    marker.setMap(null);
                }
            };
        }
    }, [marker]);

    React.useEffect(() => {
        if (marker) {
            marker.setOptions(options);
        }
    }, [marker, options]);

    return null;
};