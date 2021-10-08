import React from "react";

const Footer = () => {
    return (
        <>
            <footer >
                <div className="grid-item row-1-footer" >
                    <a href="/products/men" className="navIcon13">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <a href="/mycart" className="navIcon23">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                </div>
                <div className="grid-item row-2-footer" >
                    <a href="/products/men" className="navIcon13">
                        Acasa
                    </a>
                    <a href="/mycart" className="navIcon23">
                        Produse
                    </a>
                    <a href="/mycart" className="navIcon33">
                        Contul meu
                    </a>
                    <a href="/products/men" className="navIcon33">
                        Termeni si conditii
                    </a>
                </div>
                <div className="grid-item row-3-footer" >
                    Evocative © 2021
                </div>


            </footer>


        </>
    );
};

export default Footer;
