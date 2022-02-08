import React, { Component } from 'react';
import ContactPage from '../component/ContactPage/ContactPage';
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';
import PageTop from '../component/PageTop/PageTop';

class Contact extends Component {
    render() {
        return (
            <>
              <Header title="Contact" />
              <PageTop pageTitle="Contact Us"/>  
              <ContactPage />
              <Footer  />
            </>
        );
    }
}

export default Contact;