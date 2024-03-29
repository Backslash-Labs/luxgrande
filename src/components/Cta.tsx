import React from "react";
import { Link } from "react-router-dom";

const Cta = () => {
    return (
        <section>
        <div className="info text-center px-6 h-[400px] m-auto text-accent flex flex-col justify-center items-center">
            <h1 className="text-3xl capitalize">Making You Look Good Is in our heritage</h1>
            <p className="my-8">Barber is a person whose occupation is mainly to cut dress groom
                style and shave men's and boys hair.</p>

               <Link to={'/contact'}> <button className="btn btn-primary rounded-none">Contact Us</button></Link>
        </div>
    </section>
    );
    };

export default Cta;