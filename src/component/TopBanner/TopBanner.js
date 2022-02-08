import React, { Component, Fragment } from 'react';
import { Typewriter } from 'react-simple-typewriter';
// import Particles from "react-tsparticles";

// import './topBanner.css'
import { Col, Container, Row } from 'react-bootstrap'


export default class TopBanner extends Component {
    render() {
       
        return (
            <Fragment >
                      
                <Container fluid className="topBanner p-0">
                
                  <div className="bannerOverlay">
                      <Container>
                          <Row>
                              <Col className="bannerContent">
                                 <div>
                                 <span>W</span>
                                  <span>e</span>
                                  <span>b</span>
                                  <span>D</span>
                                  <span>e</span>
                                  <span>v</span>
                                  <span>e</span>
                                  <span>l</span>
                                  <span>o</span>
                                  <span>p</span>
                                  <span>e</span>
                                  <span>r</span>
                                 </div>
                              </Col>
                                <div className='feature'>
                                 <h5 > Our Courses <span style={{ color: 'tomato', fontWeight: 'bold' }}>
                                        
                                        <Typewriter
                                            words={['React JS 🤍', 'Redux 🤍', 'Node JS 🤍', 'Next JS 🤍', 'GraphQL ❤', 'Express JS ❤', 'MongoDB ❤', 'MySQL ❤']}
                                            loop={true}
                                            cursor
                                            // cursorStyle='❤'
                                            typeSpeed={80}
                                            deleteSpeed={70}
                                            delaySpeed={1500}
                                        
                                        />
                                        </span>
                                    </h5>
                                    <a className='banner-link' href="#">More Info</a>

                                
                                </div>
                          </Row>
                      </Container>
                  </div>
                </Container>
            </Fragment>
        )
    }
}

