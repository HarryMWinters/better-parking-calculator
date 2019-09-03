import React from "react";
import renderer from "react-test-renderer";

import ParkingMenu from "./parking-menu";

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

it("Matches snapshot", () => {
  const tree = renderer
    .create(<ParkingMenu parkingInfo={parkingInfo} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
