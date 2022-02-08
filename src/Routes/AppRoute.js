import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Courses from "../pages/Courses";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import RefundPage from "../pages/RefundPage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Service from "../pages/Service";
import ProjectsDetailsPage from "../pages/ProjectsDetailsPage";

class AppRoute extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="refund" element={<RefundPage />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="projectsDetails" element={<ProjectsDetailsPage />} />

        </Routes>
      </>
    );
  }
}

export default AppRoute;
