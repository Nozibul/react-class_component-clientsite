import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

class CourseDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid className="topPageBanner p-0">
          <div className="topPageOverlay">
            <Container>
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <h3>Developed Dynamic Website </h3>
                  <p>Total Projects: 99</p>
                </Col>

                <Col lg={6} md={6} sm={12}>
                  <p>which facilitate formal verification, a practice commonly used in mission-critical industries, spanning from which facilitate formal verification, a practice commonly used in mission-critical industries, spanning from nuclear and aerospace to semiconductor and others.Unlike Proof-of-Work blockchains like Bitcoin or Ethereum.Proof-of-Stake requires significantly less energy and cost to operate, making it an ideal alternative platform for building blockchain applications that are eco-friendly.</p>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default CourseDetails;
