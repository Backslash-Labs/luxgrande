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
import { motion } from "framer-motion";


const Home = () => {
    return (
        <motion.div
        transition={{ ease: "easeInOut", duration: 0.5 }}

        initial={{
             opacity: 0,
            // x: 100,

            
            }}
        animate={{ 
            opacity: 1,
            // x: 0,
        
        }}
        exit={{ 
            opacity: 0 ,
            // x: -100,
        }}
        >
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
        </motion.div>
    );
    };

export default Home;