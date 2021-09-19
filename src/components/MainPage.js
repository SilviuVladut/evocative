import React from "react";
import "./styles/styles.css";
import TopAlert from "./TopAlert.js";
import Header from "./Header.js";
import MainPhoto from "./MainPhoto.js";
import SectionTitle from "./SectionTitle.js";
import ProductCard from "./ProductCard.js";
import DualButton from "./DualButton.js";

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

      <div className="grid-full-container" style={{ marginTop: "5px" }}>
        <div className="grid-item full-width">CONTENT</div>
        <div className="grid-item full-width">FOOTER</div>
      </div>
    </>
  );
};

export default MainPage;
