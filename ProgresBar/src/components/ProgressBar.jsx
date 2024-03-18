import React, { useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";

const ProgressBar = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    if (count >= 100) return;
    setCount((prev) => prev + 10);
  };

  const decrease = () => {
    if (count <= 0) return;
    setCount((prev) => prev - 10);
  };

  return (
    <>
      <Container>
        <ButtonGroup>
          <Button variant="primary" size="lg" onClick={decrease}>
            -
          </Button>

          <Button variant="danger" size="lg" onClick={increase}>
            +
          </Button>
        </ButtonGroup>

        <div className="progress mt-4" style={{ height: "25px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${count}%` }}
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {count}%
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProgressBar;
