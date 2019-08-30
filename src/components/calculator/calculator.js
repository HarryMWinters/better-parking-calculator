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
      dropDownHidden: true,
      parkingOptionSelected: null,
      entryDateTime: new Date(),
      exitDateTime: new Date(),
      hoursParked: "-",
      parkingInfo: props.parkingInfo
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.setParkingOption = this.setParkingOption.bind(this);
    this.entryDateTimeUpdateHandler = this.entryDateTimeUpdateHandler.bind(
      this
    );
    this.exitDateUpdateHandler = this.exitDateUpdateHandler.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
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

  exitDateUpdateHandler(date) {
    this.setState({ exitDate: date });
  }

  calculateTotal() {
    let milliSecondsSpent = this.state.exitDateTime - this.state.entryDateTime;
    let hoursSpent = milliSecondsSpent / (1000 * 60 * 60);
    if (hoursSpent < 0) {
      console.error("Exit before entry :|");
    }
    this.setState({ hoursParked: hoursSpent });
  }

  costFunction() {
    let hours = this.state.hoursParked;
    const rate = this.state.parkingInfo[this.state.parkingOptionSelected];
    if (hours <= 1) {
      return rate["Per Hour"];
    }
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    hours = hours - 24 * days - 24 * 7 * weeks;

    return "-";
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
              dateTimeUpdateHandler={this.exitDateUpdateHandler}
              label="Exited at: "
            />
          </Col>
        </Row>
        <CalculateButton handleClick={this.calculateTotal} />
        <TotalReadOut
          hours={this.state.hoursParked}
          cost={this.costFunction(this.state.hoursParked)}
        />
      </div>
    );
  }
}

export default calculator;
