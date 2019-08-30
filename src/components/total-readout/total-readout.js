import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function totalReadout(props) {
  function _formatTime(hoursFloat) {
    if (hoursFloat < 1) {
      return "> 1h";
    } else {
      const hours = Math.floor(hoursFloat, 1);
      const minutes = Math.round((hoursFloat - hours) * 60);
      const minutesString = minutes < 10 ? "0" + minutes : minutes;
      return hours + ":" + minutesString;
    }
  }
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
          <Col style={{ width: "50%" }}>
            <Card>
              <Card.Header style={{ fontWeight: "bold" }}>Price: </Card.Header>
              <Card.Body>
                <Card.Title>{props.cost}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default totalReadout;
