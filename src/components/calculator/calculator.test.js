import React from "react";
import TotalReadOut from "../total-readout/total-readout";
import LotSelect from "../lot-select/lot-select";
import DateTimeSelect from "../date-select/date-select";
import CalculateButton from "../calculate-button/calculate-button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { render, unmountComponentAtNode } from "react-dom";

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("Calculator matches snapshot", () => {});
