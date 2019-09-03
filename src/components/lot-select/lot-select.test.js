import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import LotSelect from "./lot-select";

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

it("Shows and hides when clicked", () => {
  act(() => {
    render(<LotSelect selected={false} parkingOptions={[]} />, container);
  });
  const dropDownButton = document.querySelector("#dropdown-basic");
  act(() => {
    dropDownButton.click();
  });
  const dropDownMenu = document.querySelector(".dropdown-menu");
  expect(dropDownMenu.className).toBe("dropdown-menu show");
});

it("Renders with proper options", () => {
  const mockChoices = ["foo", "bar"];
  act(() => {
    render(
      <LotSelect selected={false} parkingOptions={mockChoices} />,
      container
    );
  });
  const dropDownButton = document.querySelector("#dropdown-basic");
  act(() => {
    dropDownButton.click();
  });
  const pType = document.querySelectorAll("li");
  Object.keys(pType).map(elem => {
    expect(pType[elem].textContent).toBe(mockChoices[elem]);
  });
});
