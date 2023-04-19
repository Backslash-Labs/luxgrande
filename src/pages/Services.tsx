import React from "react";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Header from "../components/shared/Header";

const Services = () => {
    return (
        <div>
         <Navbar />
        <Header title="Our services" />
         <Service />
         <Cta />
         <Footer />
        </div>
    );
    };

export default Services;