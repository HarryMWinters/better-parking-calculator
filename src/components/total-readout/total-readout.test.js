import React from "react";
import renderer from "react-test-renderer";
import ReadOut from "./total-readout";
import totalReadout from "./total-readout";

it("Matches snapshot", () => {
  const tree = renderer
    .create(<totalReadout errors={""} cost={4} hours={2} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
