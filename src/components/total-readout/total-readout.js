import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function totalReadout(props) {
  function _formatTime(hoursFloat) {
    if (hoursFloat === null) {
      return "--:--";
    }
    if (hoursFloat < 1) {
      return "less than 1h";
    } else {
      const hours = Math.floor(hoursFloat, 1);
      const minutes = Math.round((hoursFloat - hours) * 60);
      const minutesString = minutes < 10 ? "0" + minutes : minutes;
      return hours + ":" + minutesString;
    }
  }
  const costCard = props.errors ? (
    <Card>
      <Card.Header style={{ fontWeight: "bold" }}> </Card.Header>
      <Card.Body>
        <Card.Title>{props.errors}</Card.Title>
      </Card.Body>
    </Card>
  ) : (
    <Card>
      <Card.Header style={{ fontWeight: "bold" }}>Price: </Card.Header>
      <Card.Body>
        <Card.Title>$ {props.cost}</Card.Title>
      </Card.Body>
    </Card>
  );
  return (
    <div>
      <Container style={{ marginTop: "1em" }}>
        <Row>
          <Col style={{ width: "50%" }}>
            <Card>
              <Card.Header style={{ fontWeight: "bold" }}>
                Total Time:
              </Card.Header>
              <Card.Body>
                <Card.Title style={{ paddingLeft: "1em" }}>
                  {_formatTime(props.hours)}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ width: "50%" }}>{costCard}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default totalReadout;
