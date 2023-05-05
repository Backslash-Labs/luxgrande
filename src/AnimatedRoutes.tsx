import React from 'react';
import { Route,Routes, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';



const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>

        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </AnimatePresence>

    );
    };

export default AnimatedRoutes;