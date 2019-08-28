import React from 'react';
import './calculate-button.css'

function calculateButton(props){
    return <button 
        onClick={props.handleClick}
        className="calculateButton">
            Calculate!
        </button>
}

export default calculateButton;