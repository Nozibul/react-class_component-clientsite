import React, { Component } from 'react';
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';
import PageTop from '../component/PageTop/PageTop';
import RefundPolicy from '../component/RefundPolicy/RefundPolicy';

class RefundPage extends Component {
    render() {
        return (
            <>
                <Header title="Privacy Policy"/>
                <PageTop pageTitle="Privacy Policy" />
                <RefundPolicy />
                <Footer />
                
            </>
        );
    }
}

export default RefundPage;