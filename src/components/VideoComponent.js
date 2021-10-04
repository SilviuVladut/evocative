import React from 'react'
import backgrVideo from './backgrVideo2.mp4';

const VideoComponent = () => {
    return (
        <>
            <div className="grid-item">

                <video muted autoPlay loop src={backgrVideo} type="video/mp4" />

                <div className="videoContent">
                    <h2>
                        be the best, be evocative!
                    </h2>
                    <button className="darkBtn">shop</button>
                </div>
            </div >
        </>
    )
}

export default VideoComponent
