import * as PANOLENS from 'panolens';
import { useEffect } from 'react';
import './Pano.css';

function Pano() {
    
useEffect(()=>{
    const panorama = new PANOLENS.ImagePanorama("assets/test.jpg");
    const viewer = new PANOLENS.Viewer({
        // container: document.querySelector("#viewer")
    });
    console.log({});
    viewer.add(panorama);
},[])

    return (
        <>
            <div id="viewer" className='viewer'>
                {}
            </div>
        </>
    );
}

export default Pano;
