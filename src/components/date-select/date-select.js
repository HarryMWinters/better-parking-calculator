import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function dateTimeSelect(props) {
  return (
    <Form>
      <Form.Group>
        <Form.Label>{props.label}</Form.Label>
        <Row>
          <Col>
            <Form.Control
              type="date"
              name={props.label}
              value={props.value}
              onChange={event =>
                props.dateUpdateHandler(new Date(event.target.value))
              }
            />
          </Col>
          <Col>
            <Form.Control type="time" />
          </Col>
        </Row>
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
