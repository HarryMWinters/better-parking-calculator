import React from "react";
import Table from "react-bootstrap/Table";

function parkingMenu(props) {
  const menu = props.parkingInfo;
  const parkingTypes = Object.keys(menu);
  const pricingTypes = Object.keys(menu[parkingTypes[0]]);

  return (
    <div>
      <Table striped="true">
        <thead>
          <tr>
            <th></th>
            {pricingTypes.map(t => (
              <th>{t}</th>
            ))}
          </tr>
        </thead>
        <tbody>{parkingTypes.map(pType => _makeCatagory(pType, menu))}</tbody>
      </Table>
    </div>
  );
}

function _makeCatagory(catagoryName, catagoryObject) {
  let priceCats = Object.keys(catagoryObject[catagoryName]);
  return (
    <tr>
      <td>{catagoryName}</td>
      {priceCats.map(cat => (
        <td>${catagoryObject[catagoryName][cat]}.00</td>
      ))}
    </tr>
  );
}
export default parkingMenu;
