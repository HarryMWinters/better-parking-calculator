import React from "react";
import TotalReadOut from "../total-readout/total-readout";
import LotSelect from "../lot-select/lot-select";
import DateTimeSelect from "../date-select/date-select";
import CalculateButton from "../calculate-button/calculate-button";

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
      hoursParked: "-"
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.setParkingOption = this.setParkingOption.bind(this);
    this.entryDateUpdateHandler = this.entryDateUpdateHandler.bind(this);
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

  entryDateUpdateHandler(dateTime) {
    this.setState({ entryDateTime: dateTime });
  }

  exitDateUpdateHandler(dateTime) {
    this.setState({ exitDateTime: dateTime });
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
        <DateTimeSelect
          value={this.state.entryDateTime}
          updateHandler={this.entryDateUpdateHandler}
          label="Entered at:"
        />
        <DateTimeSelect
          value={this.state.exitDateTime}
          updateHandler={this.exitDateUpdateHandler}
          label="Exited at: "
        />
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
