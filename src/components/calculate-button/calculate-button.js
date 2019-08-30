import React from "react";
import Button from "react-bootstrap/Button";

function calculateButton(props) {
  return (
    <Button
      variant="primary"
      size="lg"
      block
      onClick={props.handleClick}
      className="calculateButton"
    >
      Calculate!
    </Button>
  );
}

export default calculateButton;
