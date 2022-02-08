import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

class PageTop extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid className="topPageBanner p-0">
          <div className="topPageOverlay">
            <Container>
              <Row>
                <Col className="topPageContent">
                <div className="aboutTitle">
                  <h2>{this.props.pageTitle}</h2>
                </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default PageTop;
