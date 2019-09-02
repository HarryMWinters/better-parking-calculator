import React from "react";
import TotalReadOut from "../total-readout/total-readout";
import LotSelect from "../lot-select/lot-select";
import DateTimeSelect from "../date-select/date-select";
import CalculateButton from "../calculate-button/calculate-button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const parkingOptions = [
  "Economy Parking",
  "Short-Term Parking",
  "Long-Term Surface Parking",
  "Long-Term Garage Parking",
  "Valet Parking"
];

class calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parkingInfo: props.parkingInfo,
      dropDownHidden: true,
      parkingOptionSelected: null,
      entryDateTime: new Date(),
      exitDateTime: new Date(),
      hoursParked: null,
      price: null,
      errors: ""
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.setParkingOption = this.setParkingOption.bind(this);
    this.entryDateTimeUpdateHandler = this.entryDateTimeUpdateHandler.bind(
      this
    );
    this.exitDateTimeUpdateHandler = this.exitDateTimeUpdateHandler.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.costFunction = this.costFunction.bind(this);
  }

  toggleDropdown() {
    this.setState(state => {
      return { dropDownHidden: state.dropDownHidden ? false : true };
    });
  }

  setParkingOption(option) {
    this.setState({ parkingOptionSelected: option });
  }

  entryDateTimeUpdateHandler(date) {
    this.setState({ entryDateTime: date });
  }

  exitDateTimeUpdateHandler(date) {
    this.setState({ exitDateTime: date });
  }

  calculateTotal() {
    let milliSecondsSpent = this.state.exitDateTime - this.state.entryDateTime;
    let hoursSpent = milliSecondsSpent / (1000 * 60 * 60);
    this.setState({ hoursParked: hoursSpent });
    const { price, errors } = this.costFunction(hoursSpent);
    this.setState({ price: price, errors: errors });
  }

  costFunction(hoursParked) {
    // Had to pass in hoursParked since the state updates
    // asynchronously.
    // ToDo: Design this better.
    function _validateState(s) {
      if (!s.parkingOptionSelected) {
        return "No parking type selected.";
      }
      if (s.exitDateTime - s.entryDateTime < 0) {
        return "Exit time and date before entry time and date.";
      }
      return null;
    }

    const errors = _validateState(this.state);
    if (errors) {
      return { price: "Error", errors: errors };
    }
    let hours = hoursParked;
    const rate = this.state.parkingInfo[this.state.parkingOptionSelected];
    if (hours <= 1) {
      return rate["Per Hour"]
        ? { price: rate["Per Hour"], errors: "" }
        : { price: rate["Daily Maximum"], errors: "" };
    }
    let days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    days = days % 7;
    const remainder = Math.ceil(hours - 24 * days - 24 * 7 * weeks);
    let remainderCost =
      rate["Per Hour"] && remainder * rate["Per Hour"] < rate["Daily Maximum"]
        ? remainder * rate["Per Hour"]
        : rate["Daily Maximum"];
    const price =
      weeks * rate["Per Week"] + days * rate["Daily Maximum"] + remainderCost;
    return { price: price, errors: "" };
  }

  render() {
    return (
      <div className="calculator">
        <LotSelect
          dropDownHidden={this.state.dropDownHidden}
          parkingOptions={parkingOptions}
          toggleDropdown={this.toggleDropdown}
          selected={this.state.parkingOptionSelected}
          setChosenOption={this.setParkingOption}
        />
        <Row>
          <Col>
            <DateTimeSelect
              value={this.state.entryDateTime}
              dateTimeUpdateHandler={this.entryDateTimeUpdateHandler}
              label="Entered at:"
            />
          </Col>
          <Col>
            <DateTimeSelect
              value={this.state.exitDateTime}
              dateTimeUpdateHandler={this.exitDateTimeUpdateHandler}
              label="Exited at: "
            />
          </Col>
        </Row>
        <CalculateButton handleClick={this.calculateTotal} />
        <TotalReadOut
          hours={this.state.hoursParked}
          cost={this.state.price}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default calculator;
