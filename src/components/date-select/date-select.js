import React from "react";
import Form from "react-bootstrap/Form";

function dateTimeSelect(props) {
  return (
    <Form e>
      <Form.Group>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
          className="dateTimeInpute"
          type="datetime-local"
          name={props.label}
          value={_toISOstring(props.value)}
          onChange={event => props.updateHandler(new Date(event.target.value))}
        />
      </Form.Group>
    </Form>
  );
}

function _toISOstring(dateTime) {
  if (isNaN(dateTime.getTime())) {
    return null;
  } else {
    return dateTime.toISOString().slice(0, -1);
  }
}

export default dateTimeSelect;
