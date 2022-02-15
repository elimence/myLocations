import React, {useRef, useEffect} from 'react'
import {Wrapper, Status} from "@googlemaps/react-wrapper";
import { Marker } from './marker-component';

const render = (status) => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return null;
};

function MyMapComponent({center}) {
    const ref = useRef();

    useEffect(() => {
        new window.google.maps.Map(ref.current, {
            center,
            zoom: 20,
        });
    });

    return <div className='w-100 h-100' ref={ref} id="map"/>;
}



const MapComponent = ({center}) => {
    return (<Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY} render={render}>
        <MyMapComponent center={center}>
            <Marker 
                position={center}
                icon={{
                    url:"https://en.wikipedia.org/wiki/Google_Maps#/media/File:175-free-google-maps-pointer.svg"
                }}
            />
        </MyMapComponent>
    </Wrapper>)
};

export default MapComponent
