import React, { Component } from 'react';
import Header from '../component/Header/Header';
import PageTop from '../component/PageTop/PageTop';
import AllCourses from '../component/AllCourses/AllCourses';
import Footer from '../component/Footer/Footer';


class Courses extends Component {
    render() {
        return (
            <>
                <Header title="course" />
                <PageTop pageTitle="Our Courses" />
                <AllCourses />
                <Footer />
               
            </>
        );
    }
}

export default Courses;