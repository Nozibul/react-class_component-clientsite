import React, { Component } from "react";
import { Fragment } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid className="summary mt-5 p-0">
          <div className="summaryOverlay">
            <Container className="text-center">
              <Row>
                <Col lg={8} md={6} sm={12}>
                  <Row className="countSection">
                    <Col lg={6} md={12} sm={12}>
                      <h1 className="countNumber">
                      100
                      </h1>
                      <h3 className="countTitle">Total Projects</h3>
                      {/* <hr className="bg-white text-center w-25" /> */}
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                      <h1 className="countNumber">100</h1>
                      <h3 className="countTitle">Total Clients</h3>
                      {/* <hr className=" bg-dark w-25" /> */}
                    </Col>
                  </Row>
                </Col>

                <Col lg={4} md={6} sm={12}>
                  <Card className="countCard">
                    <Card.Body>
                      <Card.Title className="cardTitle">How I Work</Card.Title>
                      <Card.Text>
                        <p className=" cardContent ">
                          <FontAwesomeIcon
                            className="cardIcon"
                            icon={faCheckCircle}
                          />{" "}
                          Requirement Gathering
                        </p>
                        <p className=" cardContent ">
                          <FontAwesomeIcon
                            className="cardIcon"
                            icon={faCheckCircle}
                          />{" "}
                          System Analysis
                        </p>
                        <p className="cardContent ">
                          <FontAwesomeIcon
                            className="cardIcon"
                            icon={faCheckCircle}
                          />{" "}
                          Coding Testing
                        </p>
                        <p className="cardContent ">
                          <FontAwesomeIcon
                            className="cardIcon"
                            icon={faCheckCircle}
                          />{" "}
                          Implementation
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}
