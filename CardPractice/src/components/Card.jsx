import React from "react";
import { Card, CardBody, Col, Row } from "react-bootstrap";
import CardImages from "./CardImages";
import CardStars from "./CardStars";
import CardPrice from "./CardPrice";
import data from "../data/products.json";
const Product = () => {
  return (
    <>
      <Row className="card-container">
        {data.map((product) => (
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={product.id}
            style={{ marginBottom: "20px" }}
          >
            <Card className="card">
              <CardImages
                images={product.images}
                discountPercentage={product.discountPercentage}
              />
              <CardBody>
                <CardStars rating={product.rating} />
                <CardPrice
                  price={product.price}
                  discountPercentage={product.discountPercentage}
                  title={product.title}
                />
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Product;
