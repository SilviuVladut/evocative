import React from 'react'
import backgrVideo from './backgrVideo2.mp4';

const VideoComponent = () => {
    return (
        <>
            <div className="grid-item videoCompBox">
                <div className="videoContent">
                    <h2>
                        Cele mai calitative echipamente sportive, doar pentru tine!
                    </h2>
                    <button className="mainBtn">Vezi mai mult</button>
                </div>
                <video muted autoPlay loop src={backgrVideo} type="video/mp4" />
            </div >
        </>
    )
}

export default VideoComponent
