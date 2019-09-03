import React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";

import CalculateButton from "./calculate-button";

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

it("renders as expected", () => {
  act(() => {
    render(<CalculateButton />, container);
  });
  expect(container.textContent).toBe("Calculate!");
});

it("fires event when clicked.", () => {
  const mockClickHandler = jest.fn();
  const testButton = <CalculateButton handleClick={mockClickHandler} />;
  act(() => {
    render(testButton, container);
  });
  const button = document.querySelector("#calcButton");
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(mockClickHandler.mock.calls.length).toBe(1);
});
