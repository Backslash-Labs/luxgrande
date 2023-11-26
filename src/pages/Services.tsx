import React from "react";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Header from "../components/shared/Header";
import { motion } from "framer-motion";

const Services = () => {
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
        <Header title="Our services" />
         <Service />
         <Cta />
         <Footer />
        </motion.div>
    );
    };

export default Services;