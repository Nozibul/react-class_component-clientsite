import React, { Component } from 'react';
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';
import PageTop from '../component/PageTop/PageTop';
import PortfolioPage from '../component/PortfolioPage/PortfolioPage';

class Portfolio extends Component {
    render() {
        return (
            <>
              <Header title='portfolio' />
              <PageTop pageTitle="Portfolio" />  
              <PortfolioPage />
              <Footer />
            </>
        );
    }
}

export default Portfolio;