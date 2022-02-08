import React, { Component } from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import web1 from "../../asset/images/web.png";
import design1 from "../../asset/images/design.png";
import app1 from "../../asset/images/app1.png";
import { Link } from 'react-router-dom';

class PortfolioPage extends Component {
    render() {
        return (
            <>
             <Container className="projectSection">
          <h2>
            Recent <small>Our</small> Projects
          </h2>
          <Row ClassName="project">
            <Col sm={12} md={6} lg={4} className="mb-3">
              <div class="projectBox">
                <img src={app1} alt="" />
                <h5 className="mt-2">Mobile Application</h5>
                <p className="mt-2">Adipisicing elit. Nesciunt expedita voluptatibus, voluptates asperiores.</p>
                <Link to="/projectsDetails" className="detailBtn">Details</Link>
              </div>
            </Col>
            <Col sm={12} md={6} lg={4} className="mb-3">
              <div class="projectBox">
                <img src={design1} alt="" />
                <h5 className="mt-2">Web Development</h5>
                <p className="mt-2">Adipisicing elit. Nesciunt expedita voluptatibus, voluptates asperiores.</p>
                <Link to="/projectsDetails" className="detailBtn">Details</Link>
              </div>
            </Col>
            <Col sm={12} md={6} lg={4} className="mb-3">
              <div class="projectBox">
                <img src={web1} alt="" />
                <h5 className="mt-2">Web Design</h5>
                <p className="mt-2">Adipisicing elit. Nesciunt expedita voluptatibus, voluptates asperiores.</p>
                <Link to="/projectsDetails" className="detailBtn">Details</Link>
              </div>
            </Col>
          </Row>
        </Container>
                
            </>
        );
    }
}

export default PortfolioPage;