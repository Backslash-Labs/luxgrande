import React from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Service from "../components/Service";
import Crew from "../components/Crew";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Header from "../components/shared/Header";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div
        transition={{ ease: "easeInOut", duration: 0.5 }}
        initial={{
            opacity: 0 ,
            //  x: 100,

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
        <Header title="About Us" />
        <AboutUs />
        <Service />
        <Crew />
        <Cta />
        <Footer />

       </motion.div>
    );
    };

export default About;