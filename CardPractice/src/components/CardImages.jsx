import React from "react";
import { Image } from "react-bootstrap";

const CardImages = (props) => {
  const { images, discountPercentage } = props;

  return (
    <>
      <div style={{ position: "relative" }}>
        <Image src={images} fluid style={{ width: "100%", height: "auto" }} />
        {discountPercentage ? (
          <span
            className="badge badge-primary"
            style={{
              position: "absolute",
              top: 4,
              left: 4,
              backgroundColor: "green",
            }}
          >
            {discountPercentage}%
          </span>
        ) : null}
      </div>
    </>
  );
};

export default CardImages;
