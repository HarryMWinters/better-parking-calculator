import React from "react";
import "./App.css";
import Title from "./components/title/title";
import Calculator from "./components/calculator/calculator";
import ParkingMenu from "./components/parking-menu/parking-menu";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const parkingInfo = {
  "Economy Parking": {
    "Per Hour": 2.0,
    "Daily Maximum": 9.0,
    "Per Week": 63.0
  },
  "Short-Term Parking": {
    "Per Hour": 2.0,
    "Daily Maximum": 24.0,
    "Per Week": 168.0
  },
  "Long-Term Surface Parking": {
    "Per Hour": 2.0,
    "Daily Maximum": 12.0,
    "Per Week": 84.0
  },
  "Long-Term Garage Parking": {
    "Per Hour": 2.0,
    "Daily Maximum": 17.0,
    "Per Week": 119.0
  },
  "Valet Parking": {
    "Per Hour": null,
    // Valet parking is only charged per day.
    "Daily Maximum": 24.0,
    "Per Week": 169.0
  }
};

function App() {
  return (
    <div className="App">
      <Title />
      <Row>
        <Col style={{ margin: "1em" }}>
          <Calculator />
        </Col>
        <Col style={{ margin: "1em" }}>
          <ParkingMenu parkingInfo={parkingInfo} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
