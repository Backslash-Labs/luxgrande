import React from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Service from "../components/Service";
import Crew from "../components/Crew";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

const About = () => {
    return (
       <div>
        <Navbar />
        <AboutUs />
        <Service />
        <Crew />
        <Cta />
        <Footer />

       </div>
    );
    };

export default About;