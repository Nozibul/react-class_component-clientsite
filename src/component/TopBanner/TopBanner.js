import React, { Component, Fragment } from 'react';
import { Typewriter } from 'react-simple-typewriter';
// import Particles from "react-tsparticles";

// import './topBanner.css'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../Header/Header';

export default class TopBanner extends Component {
    render() {
        // const particlesInit = (main) => {
        //     console.log(main);
        
        //     // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        //   };
        
        //   const particlesLoaded = (container) => {
        //     console.log(container);
        //   };
       
        return (
            <Fragment >
                     {/* <Particles
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                          background: {
                            color: {
                              value: "#ddd",
                            },
                          },
                          
                          fpsLimit: 60,
                          interactivity: {
                            events: {
                              onClick: {
                                enable: true,
                                mode: "bubble",
                              },
                              onHover: {
                                enable: true,
                                mode: "repulse",
                              },
                              resize: true,
                            },
                            modes: {
                              bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.5,
                                size: 40,
                              },
                              push: {
                                quantity: 4,
                              },
                              repulse: {
                                distance: 50,
                                duration: 0.4,
                              },
                            },
                          },
                          particles: {
                            color: {
                              value: "#ffffff",
                            },
                            links: {
                              color: "#ffffff",
                              distance: 150,
                              enable: true,
                              opacity: 0.3,
                              width: 1,
                            },
                            collisions: {
                              enable: true,
                            },
                            move: {
                              direction: "none",
                              enable: true,
                              outMode: "bounce",
                              random: false,
                              speed: 2,
                              straight: false,
                            },
                            number: {
                              density: {
                                enable: true,
                                value_area: 800,
                              },
                              value: 80,
                            },
                            opacity: {
                              value: 0.5,
                            },
                            shape: {
                              type: "star",
                            },
                            size: {
                              random: true,
                              value: 3,
                            },
                          },
                          detectRetina: true,
                        }}
                      />               */}

                      
                <Container fluid className="topBanner p-0">
                <Header />
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

