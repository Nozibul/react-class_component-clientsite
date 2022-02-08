import React, { Component } from 'react';
import Video from 'video-react/lib/components/Video';
import Analysis from '../component/Analysis/Analysis';
import Course from '../component/Course/Course';
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';
import RecentProjects from '../component/RecentProjects/RecentProjects';
import Review from '../component/Review/Review';
import Services from '../component/Services/Services';
import Summary from '../component/Summary/Summary';
import TopBanner from '../component/TopBanner/TopBanner';

class Home extends Component {
    render() {
        return (
            <>     
                <Header title='Home' />          
                <TopBanner />
                <Services />
                <Analysis />
                <Summary />
                <RecentProjects />
                <Course />
                <Video />
                <Review />
                <Footer />
            </>
        );
    }
}

export default Home;