import React from 'react';
import "./lot-select.css"

function LotSelect (props){
    return (
        <div>
            <div  className="LotSelect" onMouseLeave={props.toggleDropdown} onClick={props.toggleDropdown}>
                <div onMouseEnter={props.toggleDropdown}> 
                    {props.selected == null? "Choose Parking Option": props.selected} 
                </div>
                {props.dropDownHidden ? null: (
                <ul>{props.parkingOptions.map(
                    (listItem) => <li key={listItem} onClick={() => props.setChosenOption(listItem)}>{listItem}</li>
                )}</ul>)}
                
            </div>
        </div>
    );
}


export default LotSelect;