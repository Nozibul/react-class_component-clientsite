import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class AboutDescription extends Component {
    render() {
        return (
            <>
                <Container className='mt-5'>
                    <Row>
                        <Col>
                          <h3>Our Mission</h3> <hr />
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque quis corporis perspiciatis explicabo dicta neque quibusdam maiores quidem? Dolorem beatae, sit ea exercitationem odit aperiam distinctio consequuntur accusamus vel iure eos omnis maiores, vitae ad voluptates facere necessitatibus pariatur itaque rerum excepturi illo, odio non. Molestiae assumenda placeat hic tenetur?</p>


                          <h3>Our Vission</h3> <hr />
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque quis corporis perspiciatis explicabo dicta neque quibusdam maiores quidem? Dolorem beatae, sit ea exercitationem odit aperiam distinctio consequuntur accusamus vel iure eos omnis maiores, vitae ad voluptates facere necessitatibus pariatur itaque rerum excepturi illo, odio non. Molestiae assumenda placeat hic tenetur?</p>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default AboutDescription;