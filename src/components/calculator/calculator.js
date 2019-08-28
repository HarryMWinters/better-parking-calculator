import React from 'react';
import LotSelect from '../lot-select/lot-select'
import DateTimeSelect from '../date-select/date-select'
import CalculateButton from '../calculate-button/calculate-button'
import "./calculator.css"

const parkingOptions = [
    "Economy Parking",
    "Short-Term Parking", 
    "Long-Term Surface Parking",
    "Long-Term Garage Parking",
    "Valet Parking" 
    ]

class calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDownHidden: true,
            parkingOptionSelected: null,
            entryDateTime: undefined,
            exitDateTime: undefined,
        };
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.setParkingOption = this.setParkingOption.bind(this);
        this.entryDateUpdateHandler = this.entryDateUpdateHandler.bind(this)
        this.exitDateUpdateHandler = this.exitDateUpdateHandler.bind(this)
        this.calculateTotal = this.calculateTotal.bind(this)
    }
    
    toggleDropdown(){
        this.setState((state) => {
            return {dropDownHidden: state.dropDownHidden? false: true }
        });
    }
    
    setParkingOption(option){
        this.setState({parkingOptionSelected: option})
    }

    entryDateUpdateHandler(dateTime){
        this.setState({entryDateTime: dateTime})
    }

    exitDateUpdateHandler(dateTime){
        this.setState({exitDateTime: dateTime})
    }

    calculateTotal(){
        console.log("calculating...")
    }

    render(){
        return (
            <div className="calculator">
                <LotSelect 
                    dropDownHidden={this.state.dropDownHidden}
                    parkingOptions={parkingOptions} 
                    toggleDropdown={this.toggleDropdown} 
                    selected={this.state.parkingOptionSelected} 
                    setChosenOption={this.setParkingOption}/>
                <DateTimeSelect 
                    dateTime={this.state.entryDateTime}
                    updateHandler={this.entryDateUpdateHandler}
                    label="Entered at:"/>
                <DateTimeSelect 
                    dateTime={this.state.exitDateTime}
                    updateHandler={this.exitDateUpdateHandler}
                    label="Exited at: "/>
                <CalculateButton handleClick={this.calculateTotal}/>
            </div>);
        }
};

export default calculator;