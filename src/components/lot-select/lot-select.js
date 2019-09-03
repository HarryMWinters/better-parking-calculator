import React from "react";
import "./lot-select.css";
import Dropdown from "react-bootstrap/Dropdown";

function LotSelect(props) {
  return (
    <div className="Container">
      <h4 style={{ marginRight: "0.5em" }}>Parking Type </h4>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {props.selected == null ? "Choose Parking Option" : props.selected}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {props.parkingOptions.map(listItem => (
            <li key={listItem} onClick={() => props.setChosenOption(listItem)}>
              {listItem}
            </li>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default LotSelect;
