import React, { Component } from 'react';
import AboutDescription from '../component/AboutDescription/AboutDescription';
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';
import PageTop from '../component/PageTop/PageTop';

class About extends Component {
    render() {
        return (
            <>
                <Header title="About"/>
                <PageTop pageTitle="About Us" />
                <AboutDescription />
                <Footer />
            </>
        );
    }
}

export default About;