/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Contact = () => {
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
    <div className="md:mx-20">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7888725960474!2d-0.1336801250752504!3d5.59818089438265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf85dda356dbeb%3A0xaebf88989f51adde!2sLux%20Grande%20Beauty%20Lounge!5e0!3m2!1sen!2ske!4v1681905591958!5m2!1sen!2ske"
              width="600"
              height="450"
              style={{
                  border: 0,
                  width: "100%",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="form-info text-accent flex flex-col mt-10 mx-6 md:flex-row">
              <div className="contact-info">
                  <h1 className="text-2xl mb-6">Get in touch with us & send us message today!</h1>
                  <p className="font-sans mb-6 md:w-3/4">
                      Saasbiz is a different kind of architecture practice. Founded by
                      LoganCee in 1991, we’re an employee-owned firm pursuing a democratic
                      design process that values everyone’s input.
                  </p>
                  <div className="loca mb-6">


                      <h2>198 West 21th Street, Suite 721</h2>
                      <h2>New York, NY 10010</h2>
                  </div>

                  <div className="details mb-6">
                      <p>Email: Dynamiclayers.Net</p>
                      <p>Phone: +88 (0) 101 0000 000</p>
                  </div>
              </div>

              <form action="#" className="mb-10">
                  <input type="text" className="input input-primary border-accent w-full md:w-3/4 rounded-none mb-6" placeholder="Name" />
                  <input type="email" className="input input-primary border-accent w-full rounded-none mb-6 md:w-3/4" placeholder="Email" />
                  <textarea placeholder="Message" className="textarea-primary border-accent border w-full min-h-[190px] md:w-3/4 p-4"></textarea>
                  <button className="btn btn-primary rounded-none w-full mt-6 md:w-1/2">Send Message</button>
              </form>
          </div>

      </div><Footer />
      </motion.div>

  );
};

export default Contact;
