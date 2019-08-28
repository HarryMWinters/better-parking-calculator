import React from 'react';

function totalReadout(props){
    return (
        <div>
            <h3 className="Lefty">Total hours: {props.hours}</h3>
            <h3 className="Righty">Price: {props.cost}</h3>
        </div>
    )
}

export default totalReadout;