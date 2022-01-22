import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

import service1 from '../../asset/images/service-image-1.jpg'
import service2 from '../../asset/images/service-image-2.jpg'
import service3 from '../../asset/images/service-image-3.jpg';


class Course extends Component {
  render() {
    return (
      <>
        <Container className="courseSection">
          <h2 className="mt-3 mb-5">
           <small>Our</small> Courses
          </h2>
          <Row>
            <Col className="mb-3" lg={6} sm={12} md={12}>
              <Row>
                <Col lg={6} sm={12} md={6}>
                  <img className="courseImg" src={service1} alt="" />
                </Col>

                <Col lg={6} sm={12} md={6}>
                    <h5 className="mt-3">Web Development</h5>
                    <p>I Build native and cross platform for your business of your Business. </p>
                    <a className="mt-5" className="courseDetails" href="">Details</a>
               </Col>
              </Row>
            </Col>

            <Col className="mb-3" lg={6} sm={12} md={12}>
              <Row>
                <Col lg={6} sm={12} md={6}>
                <img className="courseImg" src={service2} alt="" />
                </Col>
               
                <Col lg={6} sm={12} md={6}>
                  <h5 className="mt-3">Web Development</h5>
                  <p>I Build native and cross platform for your business of your Business. </p>
                  <a className="mt-5" className="courseDetails" href="">Details</a>
               </Col>
              </Row>
            </Col>

            <Col className="mb-3" lg={6} sm={12} md={12}>
              <Row>
                <Col lg={6} sm={12} md={6}>
                <img className="courseImg" src={service3} alt="" />
                </Col>
               
                <Col lg={6} sm={12} md={6}>
                  <h5 className="mt-3">Web Development</h5>
                  <p>I Build native and cross platform for your business of your Business. </p>
                  <a className="mt-5" className="courseDetails" href="">Details</a>
              </Col>
              </Row>
            </Col>

            <Col className="mb-3" lg={6} sm={12} md={12}>
              <Row>
                <Col lg={6} sm={12} md={6}>
                <img className="courseImg" src={service1} alt="" />
                </Col>
               
                 <Col lg={6} sm={12} md={6}>
                  <h5 className="mt-3">Web Development</h5>
                  <p>I Build native and cross platform for your business of your Business. </p>
                  <a className="mt-5" className="courseDetails" href="">Details</a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Course;
