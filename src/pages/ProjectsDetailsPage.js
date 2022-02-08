import React, { Component } from 'react';
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';
import PageTop from '../component/PageTop/PageTop';
import ProjectsDetails from '../component/ProjectsDetails/ProjectsDetails';

class ProjectsDetailsPage extends Component {
    render() {
        return (
            <>
              <Header title='Projects Details' />
              <PageTop pageTitle="Projects Name" />  
              <ProjectsDetails />
              <Footer />
            </>
        );
    }
}

export default ProjectsDetailsPage;