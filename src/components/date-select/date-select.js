import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function dateTimeSelect(props) {
  function _extractDateValue(datetime) {
    const monthString =
      datetime.getMonth() + 1 < 10
        ? "0" + (datetime.getMonth() + 1)
        : "" + (datetime.getMonth() + 1);
    const dateString =
      datetime.getDate() < 10
        ? "0" + datetime.getDate()
        : "" + datetime.getDate();
    const yearMonthDateString =
      datetime.getFullYear() + "-" + monthString + "-" + dateString;
    return yearMonthDateString;
  }
  function _extractTimeValue(datetime) {
    const hourString =
      datetime.getHours() < 10
        ? "0" + datetime.getHours()
        : "" + datetime.getHours();
    const minuteString =
      datetime.getMinutes() < 10
        ? "0" + datetime.getMinutes()
        : datetime.getMinutes();
    const timeString = hourString + ":" + minuteString;
    return timeString;
  }
  function _handeDateChange(date) {
    let newDate = props.value ? new Date(props.value.getTime()) : new Date();
    newDate.setFullYear(
      Number(date.slice(0, 4)),
      Number(date.slice(5, 7)) - 1,
      Number(date.slice(8, 10))
    );
    props.dateTimeUpdateHandler(newDate);
  }
  function _handleTimeChange(time) {
    let newDate = props.value ? new Date(props.value.getTime()) : new Date();
    newDate.setHours(Number(time.slice(0, 2)), Number(time.slice(3, 5)));
    props.dateTimeUpdateHandler(newDate);
  }

  return (
    <Form>
      <Form.Group>
        <Form.Label>{props.label}</Form.Label>
        <Row>
          <Col>
            <Form.Control
              type="date"
              name={props.label}
              onBlur={event => _handeDateChange(event.target.value)}
              defaultValue={_extractDateValue(props.value)}
            />
          </Col>
          <Col>
            <Form.Control
              type="time"
              onBlur={event => _handleTimeChange(event.target.value)}
              defaultValue={_extractTimeValue(props.value)}
            />
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
}

export default dateTimeSelect;
