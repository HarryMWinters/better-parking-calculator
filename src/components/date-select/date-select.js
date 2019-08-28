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
                    value={props.value}
                    onChange={(event) => props.updateHandler(event.target.value)}
                />
            </form>
        </React.Fragment>
    )
}

export default dateTimeSelect;