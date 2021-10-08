import React from "react";
import "./styles/styles.css";
import TopAlert from "./TopAlert.js";
import Header from "./Header.js";
import MainPhoto from "./MainPhoto.js";
import SectionTitle from "./SectionTitle.js";
import ProductCard from "./ProductCard.js";
import DualButton from "./DualButton.js";
import ThreeButtonComponent from "./ThreeButtonComponent.js";
import VideoComponent from "./VideoComponent.js";
import Footer from "./Footer.js";


const MainPage = () => {
  return (
    <>
      <div className="grid-full-container">
        <TopAlert />
        <Header />
        <MainPhoto />
      </div>

      <div className="grid-full-container align-title">
        <SectionTitle />
      </div>

      <div className="grid-quatro">
        <div className="grid-item">
          <ProductCard />
        </div>
        <div className="grid-item">
          <ProductCard />
        </div>
        <div className="grid-item">
          <ProductCard />
        </div>
        <div className="grid-item">
          <ProductCard />
        </div>
      </div>

      <div className="grid-dual">
        <DualButton />
      </div>

      <div className="grid-trio">
        <ThreeButtonComponent />
      </div>

      <div className="grid-full-container">
        <VideoComponent />
      </div>

      <div className="grid-full-container">
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
