import React from 'react'
import "./styles/styles.css"
import TopAlert from './TopAlert.js';
import Header from './Header.js';
import MainPhoto from "./MainPhoto.js";

const MainPage = () => {
    return (
        <>
            <div className="grid-full-container">
                <TopAlert />
                <Header />
                <MainPhoto />
            </div >

            <div className="grid-dual">
                <div className="grid-item">SUB-HEADER4</div>
                <div className="grid-item">SUB-HEADER5</div>
            </div>
            <div className="grid-full-container" style={{ marginTop: "5px" }}>
                <div className="grid-item full-width">CONTENT</div>
                <div className="grid-item full-width">FOOTER</div>
            </div>
        </>
    )
}

export default MainPage
