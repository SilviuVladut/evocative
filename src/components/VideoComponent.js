import React from 'react'
import backgrVideo from './backgrVideo.mp4';

const VideoComponent = () => {
    return (
        <>
            <div className="grid-item">
                <div>
                    <video muted autoPlay loop src={backgrVideo} type="video/mp4" />
                </div>
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
