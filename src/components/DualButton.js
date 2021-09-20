import React from "react";

const DualButton = () => {
  return (
    <>
      <div className="grid-item full-section-btn">
        <div className="left-img">
          <h2>
            Shop <br /> women
          </h2>
          <button className="mainBtn">shop</button>
        </div>
      </div>
      <div className="grid-item full-section-btn">
        <div className="right-img">
          <h2>
            Shop <br /> men
          </h2>
          <button className="mainBtn">shop</button>
        </div>
      </div>
      ;
    </>
  );
};

export default DualButton;
