import React from "react";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";

const CardStars = (props) => {
  const { rating } = props;

  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<TiStarFullOutline key={i} className="text-warning fs-4" />);
    } else {
      stars.push(<TiStarOutline key={i} className="text-warning fs-4" />);
    }
  }

  return (
    <>
      <ul className="list-unstyled list-inline mb-0">
        {stars.map((star, index) => (
          <li className="list-inline-item me-0" key={index}>
            {star}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CardStars;
