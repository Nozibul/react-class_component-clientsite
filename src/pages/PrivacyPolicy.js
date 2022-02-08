import React, { Component } from 'react';
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';
import PageTop from '../component/PageTop/PageTop';
import PrivacyDescription from '../component/PrivacyDescription/PrivacyDescription';

class PrivacyPolicy extends Component {
    render() {
        return (
            <>
              <Header title="Privacy Policy" />
              <PageTop pageTitle="Privacy policy"/>  
              <PrivacyDescription />
              <Footer  />
            </>
        );
    }
}

export default PrivacyPolicy;