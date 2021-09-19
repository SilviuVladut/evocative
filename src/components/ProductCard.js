import React from "react";

const ProductCard = () => {
  return (
    <>
      <div className="el-wrapper">
        <div className="box-up">
          <img
            className="img"
            src="https://cdn.shopify.com/s/files/1/1510/6482/files/168922276_459668792128912_8642063768570378349_n_480x480.jpg?v=1621264681"
            alt=""
          />
          <div className="img-info">
            <div className="info-inner">
              <span className="p-name">I feel like Pablo</span>
              <span className="p-company">Yeezy</span>
            </div>
            <div className="a-size">
              Available sizes : <span className="size">S , M , L , XL</span>
            </div>
          </div>
        </div>

        <div className="box-down">
          <div className="h-bg">
            <div className="h-bg-inner"></div>
          </div>

          <a className="cart" href="#home">
            <span className="price">$120</span>
            <span className="add-to-cart">
              <span className="txt">Add in cart</span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
