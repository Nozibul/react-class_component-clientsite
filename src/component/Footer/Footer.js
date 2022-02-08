import React, { Component } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from 'react-router-dom';


class Footer extends Component {
    render() {
        return (
            <>
                <Container fluid={true} className='text-center'>
                     <Row>
                         <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                          <h3 className='mb-3'>Follow Me</h3>
                           <a className='socialIcon' href="#"><FontAwesomeIcon icon={ faFacebook} /> Facebook</a> <br />
                           <a className='socialIcon' href="#"><FontAwesomeIcon icon={ faYoutube} /> YouTube</a>
                         </Col>
                         <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                           <h3 className='mb-3'>Address</h3>
                           <p><FontAwesomeIcon className='socialIcon' icon={ faEnvelope} /> nozibulislamspi@gmail.com</p>
                           <p><FontAwesomeIcon className='socialIcon' icon={ faPhone} /> +8801406272555</p>
                         </Col>
                         <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                          <h3 className='mb-3'>Information</h3>
                          <Link className='socialIcon' to="/about">About Us</Link> <br />
                          <Link className='socialIcon' to="/contact">Contact Us</Link>
                         </Col>
                         <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                           <h3 className='mb-3'>Legal</h3>
                           <Link className='footerLink' to="/refund">Refound Policy</Link> <br />
                           <Link className='footerLink' to="/privacy">privacy Policy</Link>
                         </Col>
                     </Row>
                </Container>

                <Container fluid={true} className='text-center copySection'>
                    <a className='copyRightSection' href="https://nozibul-portfolio.netlify.app/">nozibul.com &copy; 2021-2022</a>
                </Container>
            </>
        );
    }
}

export default Footer;