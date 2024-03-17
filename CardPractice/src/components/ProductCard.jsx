import React from "react";
import { Container} from "react-bootstrap";
import Product from "./Card";
const ProductCard = () => {
  return (
    <div>
      <Container className="mt-1">
        <Product />
      </Container>
    </div>
  );
};

export default ProductCard;
