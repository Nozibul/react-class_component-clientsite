import React, { Component, Fragment } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap';
import Style from '../CommonStyle/CommonStyle';
import slider from 'react-slick/lib/slider';
import profile from '../../asset/images/profile.jpg'

class Review extends Component {
 
    render() {
        const settings = {
                autoplay: true,
                autoplaySpeed: 2000,
                dots: true,
                infinite: true,
                speed: 2000,
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: true,
                verticalSwiping: true,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: true
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      initialSlide: 1
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
                ]
              };
        return (
            <Fragment>
              <Container className="text-center reviewSection p-5" >
                <h2>
                   Client<small style={{color:Style.spanColor}}> Says</small> 
                </h2>
                <Slider {...settings}>
                 <div>
                        <Row className='text-center justify-content-center'>
                            <Col lg={8} md={8} sm={12}>
                               <img className='reviewImg' src={profile} alt="" />
                               <h2>Web Development</h2>
                               <p>Testing is also going on with coding Final after finishing coding part. After successful implementation i provide 4 month free bug facing service for corresponding project.</p>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className='text-center justify-content-center' >
                            <Col lg={8} md={8} sm={12}>
                               <img className='reviewImg' src={profile} alt="" />
                               <h2>Web Development</h2>
                               <p>Testing is also going on with coding Final after finishing coding part. After successful implementation i provide 4 month free bug facing service for corresponding project.</p>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className='text-center justify-content-center'>
                            <Col lg={8} md={8} sm={12}>
                               <img className='reviewImg' src={profile} alt="" />
                               <h2>Web Development</h2>
                               <p>Testing is also going on with coding Final after finishing coding part. After successful implementation i provide 4 month free bug facing service for corresponding project.</p>
                            </Col>
                        </Row>
                    </div>
                </Slider>
              </Container>
            </Fragment>
        );
    }
}

export default Review;