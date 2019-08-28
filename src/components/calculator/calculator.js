import React from 'react';
import LotSelect from '../lot-select/lot-select'
import DateTimeSelect from '../date-select/date-select'
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
        };
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.setParkingOption = this.setParkingOption.bind(this);
    }
    
    toggleDropdown(){
        this.setState((state) => {
            return {dropDownHidden: state.dropDownHidden? false: true }
        });
    }
    
    setParkingOption(option){
        this.setState({parkingOptionSelected: option})
    }
    render(){
        return (
            <div>
                <h2>I'm a Calculator</h2>
                <LotSelect 
                    dropDownHidden={this.state.dropDownHidden}
                    parkingOptions={parkingOptions} 
                    toggleDropdown={this.toggleDropdown} 
                    selected={this.state.parkingOptionSelected} 
                    setChosenOption={this.setParkingOption}/>
                <DateTimeSelect/>
            </div>);
        }
};

export default calculator;