import React from "react";

const CardPrice = (props) => {
  const { price, discountPercentage, title } = props;
  return (
    <>
      <h5 className="card-title font-weight-bold mt-3 ">
        <a>{title}</a>
      </h5>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {discountPercentage ? (
          <div
            className="fs-5"
            style={{
              marginRight: "10px",
              fontWeight: 500,
              textDecoration: "line-through",
              color: "GrayText",
              opacity: 0.5,
            }}
          >
            ${price}
          </div>
        ) : null}

        <div className="text-success fs-5" style={{ fontWeight: 500 }}>
          ${price - ((price * discountPercentage) / 100).toFixed(2)}
        </div>
      </div>
    </>
  );
};

export default CardPrice;
