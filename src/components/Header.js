import React from 'react'

const Header = () => {
    return (
        <>

            <div className="grid-item header-body width13">
                <a href="/" className="logo">
                    evocative
                </a>
            </div>
            <div className="grid-item header-body width23">
                <div className="grid-dual">
                    <div className="navLink1 navTrans">
                        <a href="/products/women">Women</a>
                    </div>
                    <div className="navLink2 navTrans">
                        <a href="/products/men" >Men</a>
                    </div>
                </div>
            </div>
            <div className="grid-item header-body width13">
                <div className="navIcon">
                    <a href="/products/men" className="navIcon13">
                        <ion-icon name="search-outline"></ion-icon>
                    </a>
                    <a href="/mycart" className="navIcon23">
                        <ion-icon name="cart-outline"></ion-icon>
                    </a>
                    <a href="/login" className="navIcon33">
                        <ion-icon name="person-outline"></ion-icon>
                    </a>
                </div>
            </div>

        </>
    )
}

export default Header
