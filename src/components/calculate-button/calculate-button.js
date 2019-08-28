import React from 'react';

function calculateButton(props){
    return <button onClick={props.handleClick}>Calculate!</button>
}

export default calculateButton;