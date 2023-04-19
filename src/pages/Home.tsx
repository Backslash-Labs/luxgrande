import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Service from "../components/Service";
import Form from "../components/Form";
import Crew from "../components/Crew";
// import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Cta from "../components/Cta";
import Footer from "../components/Footer";


const Home = () => {
    return (
        <div>
       <Navbar />
       <Hero />
       <AboutUs />
       <Service />
       <Form />
       <Crew />
       {/* <Testimonials /> */}
       <Pricing />
       <Cta />
       <Footer />
        </div>
    );
    };

export default Home;