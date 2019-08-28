import React from 'react';
import './date-select.css'

function dateTimeSelect(props){
    return (
        <React.Fragment>
            <form className="form">
                <label className="label" >{props.label}</label>
                <input
                    className="dateTimeInpute"
                    type="datetime-local"
                    name={props.label}
                    value={_toISOstring(props.value)}
                    onChange={(event) => props.updateHandler(new Date(event.target.value))}
                />
            </form>
        </React.Fragment>
    );
};

function _toISOstring(dateTime){
    if(isNaN(dateTime.getTime())){
        return null
    } else {
        return dateTime.toISOString().slice(0,-1);
    }
};

export default dateTimeSelect;