import React, { Component } from 'react';
import Footer from '../component/Footer/Footer';
import Services from '../component/Services/Services';
import Header from '../component/Header/Header';
import PageTop from '../component/PageTop/PageTop';
import ContactPage from '../component/ContactPage/ContactPage';

class Service extends Component {
    render() {
        return (
            <>
                <Header title='service' />
                <PageTop pageTitle="Services"/>  
                <Services />
                <ContactPage />
               <Footer  />
            </>
        );
    }
}

export default Service;