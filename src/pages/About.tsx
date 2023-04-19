import React from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Service from "../components/Service";
import Crew from "../components/Crew";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Header from "../components/shared/Header";

const About = () => {
    return (
       <div>
        <Navbar />
        <Header title="About Us" />
        <AboutUs />
        <Service />
        <Crew />
        <Cta />
        <Footer />

       </div>
    );
    };

export default About;