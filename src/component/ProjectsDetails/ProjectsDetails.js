import React, { Component } from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import detailsImg from '../../../src/asset/images/service-image-1.jpg'

class ProjectsDetails extends Component {
    render() {
        return (
            <>
              <Container className="mt-5">
                  <Row>
                      <Col lg={6} md={6} sm={12}>
                          <img src={detailsImg} alt="" />
                      </Col>

                      <Col lg={6} md={6} sm={12}>
                          <h3 className='mb-3'>Foll Bazzar</h3>
                          <p>Complete App Solution for selling Fruits Online</p>
                          <ul >
                              <li>Unlimited Dynamic Product Category</li>
                              <li>Unlimited Dynamic Product Category</li>
                              <li>Unlimited Dynamic Product Category</li>
                              <li>Unlimited Dynamic Product Category</li>
                              <li>Unlimited Dynamic Product Category</li>                             
                          </ul>      
                          <Link to="#" className="moreInfoBtn">More Info</Link>
                      </Col>
                     
                     

                  </Row>

              </Container>
                
            </>
        );
    }
}

export default ProjectsDetails;