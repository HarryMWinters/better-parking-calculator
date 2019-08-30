import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function totalReadout(props) {
  return (
    <div>
      <Container style={{ marginTop: "1em" }}>
        <Row>
          <Col style={{ width: "50%" }}>
            <Card>
              <Card.Header style={{ fontWeight: "bold" }}>
                Total hours:
              </Card.Header>
              <Card.Body>
                <Card.Title>{props.hours}</Card.Title>
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
