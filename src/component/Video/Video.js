import React, { Component, Fragment } from 'react';
import {  Col, Container, Modal, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import 'video-react/dist/video-react.css';
import { Player,BigPlayButton } from 'video-react';

class Video extends Component {
    // class component state create korar jonno  constractor us e korte hoi
    constructor(){
        super();
        this.state={
            show:false
        }
    }

    modalClose=()=>(this.setState({show:false}))
    modalOpen=()=>(this.setState({show:true}))

    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <Row>
                        <Col className='videoSection' lg={12} md={12} sm={12}>
                           <div>
                                <h3><small>How</small> I Do</h3>
                                <p className='videoDes'>First I analysis the requirement of project. According to the requirement i make a proper technical analysis than i build a software architecture. According to the planning i start coding. Testing is also going on with coding Final after finishing coding part. After successful implementation i provide 4 month free bug facing service for corresponding project. </p>
                                <p><FontAwesomeIcon onClick={this.modalOpen} className='play-btn' icon={ faPlayCircle} /></p>

                           </div>                       
                        </Col>
                    </Row>
                 </Container>
                  <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                  <FontAwesomeIcon onClick={this.modalClose} className='closeBtn' icon={faTimesCircle} /> 
                        <Modal.Body>
                            <Player>
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                <BigPlayButton position="center" />
                            </Player>
                        </Modal.Body>
                     </Modal>
            </Fragment>
        );
    }
}

export default Video;