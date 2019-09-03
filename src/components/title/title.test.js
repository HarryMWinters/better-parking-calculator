import React from "react";
import renderer from "react-test-renderer";
import Title from "./title";

it("Matches snapshot", () => {
  const tree = renderer.create(<Title />).toJSON();
  expect(tree).toMatchSnapshot();
});
