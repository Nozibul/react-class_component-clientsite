import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class PrivacyDescription extends Component {
    render() {
        return (
            <>
                <Container className='mt-5'>
                    <Row>
                        <Col lg={12}  md={12} sm={12}>
                          <ul>
                              <li>First 7 Days Money Back</li>
                              <li>This not a buy a try a Product.</li>

                              <li>If you decide your piece isn't quite right, you have up to 30 days from the date of delivery to return your item(s). Our team is here to help. You can return your Article product for any reason — even if you just change your mind.</li>

                              <li> Any product in your order up to 30 days after delivery. Shipping on your first exchange for any item is free of charge. If you decide to exchange that item again (i.e. more than once) you will be responsible for any forward and return shipping fees</li>

                              <li>Our team will work with you to coordinate a day and time that works to simultaneously drop off your new item and pick up your exchange. If the item you are exchanging for costs less than the original item, we’ll refund the difference to your credit card. If the new item costs more, we will charge the difference while setting up the exchange</li>

                              <li>Once the item is back at our warehouse it will be inspected by our team. Provided it is in as-new condition, we will issue a refund less 1) repackaging fees (if applicable) and 2) outbound and return shipping fees.</li>
                              
                              <li>Once the item is back at our warehouse it will be inspected by our team. Provided it is in as-new condition, we will issue a refund less 1) repackaging fees (if applicable) and 2) outbound and return shipping fees.</li>
                          </ul>
                        </Col>
                    </Row>
                </Container> 
            </>
        );
    }
}

export default PrivacyDescription;