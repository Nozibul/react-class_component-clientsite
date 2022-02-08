import React, { Component } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

class ContactPage extends Component {
    render() {
        return (
            <>
                <Container className="mt-5">
                    <h3>Quick Connect</h3>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control className='form-control' type="text" placeholder="your name" />                       
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="your email" />                       
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows="3" />                       
                                </Form.Group>
                                <Button variant="success" type="submit">
                                    Submit
                                </Button>
                            </Form>                         
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                          <h3 className='mb-3'>Discussion Now</h3>
                          <p><FontAwesomeIcon className='socialIcon' icon={ faEnvelope} /> nozibulislamspi@gmail.com</p>
                          <p><FontAwesomeIcon className='socialIcon' icon={ faPhone} /> +8801406272555</p>

                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default ContactPage;