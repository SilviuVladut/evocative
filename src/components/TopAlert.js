import React from 'react'

const TopAlert = () => {
    const closeAlert = () => {
        let alert1 = document.getElementById("alert1");
        alert1.style.display = "none";

    }

    return (
        <div className="grid-item full-width">
            <div className="alert" id="alert1">
                <div className="alert-middle">
                    Free transport fee for minimum XXX $ shopping!
                </div>
                <button className="btn-slim" onClick={() => closeAlert()}>
                    <ion-icon name="close-outline"></ion-icon>
                </button>
            </div>
        </div>


    )
}

export default TopAlert
