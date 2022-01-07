import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import web from '../../asset/images/web.png' ;
import design from '../../asset/images/design.png' ;
import app from '../../asset/images/app1.png' ;

export default class Services extends Component {
   
    render() {
  
        return (
            <div className="bg-service">              
                 <Container className="pt-5 pb-4 ">
                    <h2 className='services-head'>Our Services</h2>
                    <Row>
                        <Col lg={4} md={6} sm={12} >
                            <div className='box text-center'>
                                <div className='ser-img'>
                                  <img className="services-img" src={web} alt="" />

                                </div>
                               <h3 className="services-title">Web Development</h3>
                               <p>
                                   I am development static and dynamic websites as per your requirements,"web worlds's home"
                               </p>
                            </div>
                        </Col>
                        <Col  lg={4} md={6} sm={12}>
                          <div className='box text-center'>
                          <div className='ser-img'>
                                  <img className="services-img" src={design} alt="" />

                                </div>
                           <h3 className="services-title">Graphics Design</h3>
                            <p>
                               I design modern user interface and other graphical components for your business and institutions.
                            </p>
                          </div>
                        </Col>
                        <Col  lg={4} md={6} sm={12} >
                          <div className='box text-center'>
                          <div className='ser-img'>
                                  <img className="services-img" src={app} alt="" />

                                </div>
                           <h3 className="services-title">App Development</h3>
                           <p>
                               I build native and cross platform mobile app for your business and institution as your requirements.
                           </p>
                          </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

 
