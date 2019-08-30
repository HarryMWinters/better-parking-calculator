import React from "react";
import "./lot-select.css";
import Dropdown from "react-bootstrap/Dropdown";

function LotSelect(props) {
  return (
    <div className="Container">
      <h4 id="typeSelecth4">Parking Type </h4>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {props.selected == null ? "Choose Parking Option" : props.selected}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item> */}
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
