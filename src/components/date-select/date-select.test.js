import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import DateTimeSelect from "./date-select";

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
    render(<DateTimeSelect label={"testLabel"} />, container);
  });
  let title = document.querySelector("label");
  expect(title.textContent).toBe("testLabel");
});

it("It focuses and blurs.", () => {
  act(() => {
    render(<DateTimeSelect />, container);
  });
  const field = document.querySelector(".form-group");
  act(() => {
    field.focus();
    field.blur();
  });
});

it("Updates send new date to call back onBlur", () => {
  const mockDateTimeUpdateHandler = jest.fn();
  act(() => {
    render(
      <DateTimeSelect dateTimeUpdateHandler={mockDateTimeUpdateHandler} />,
      container
    );
  });
  const field = document.querySelector(".form-control");
  act(() => {
    field.focus();
    field.value = "2019-10-02";
    field.blur();
  });
  expect(mockDateTimeUpdateHandler.mock.calls.length).toBe(1);
});
