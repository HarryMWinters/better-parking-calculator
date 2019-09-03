import React from "react";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
configure({ adapter: new Adapter() });

import Calculator from "./calculator";

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

let testCalculator = shallow(<Calculator parkingInfo={parkingInfo} />);

it("Renders correctly when parking type is NOT selected", () => {
  const entryDate = new Date("2019-08-02T22:16:43.383Z");
  const exitDate = new Date("2019-09-02T22:16:43.383Z");
  testCalculator.setState({ entryDateTime: entryDate, exitDateTime: exitDate });
  const tree = renderer.create(testCalculator).toJSON();
  expect(tree).toMatchSnapshot();
});

// it("Renders correctly when parking type IS selected", () => {
//   const entryDate = new Date("2019-08-02T22:16:43.383Z");
//   const exitDate = new Date("2019-09-02T22:17:43.383Z");
//   testCalculator.setState({
//     entryDateTime: entryDate,
//     exitDateTime: exitDate,
//     parkingOptionSelected: "Long-Term Garage Parking"
//   });
//   const tree = renderer.create(testCalculator).toJSON();
//   expect(tree).toMatchSnapshot();
// });
