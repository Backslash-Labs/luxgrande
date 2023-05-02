import React from "react";
import video from '../images/shortvid.mp4';
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="video h-screen w-screen ">
        <div className="content absolute top-1/3 z-20 text-white mx-6 md:px-48">
          <h2
            className="text-2xl text-primary lg:text-6xl py-10 lg:w-3/4 lg:px-10 animate__animated animate__fadeInUp"
          >
            The Beauty Luxury You Deserve
          </h2>
  
          <p
            className="font-sans leading-loose lg:text-xl lg:w-3/4 lg:px-10 animate__animated animate__fadeInUp"
          >
            At Lux Grande Beauty Lounge, we believe in providing the highest
            quality service in an intimate environment that respects your time and
            your needs.
          </p>
          <Link to={"/services"}>
          <button
            className="btn btn-primary rounded-none my-6 font-sans mb-40 lg:mx-10"
          >
           LEARN MORE
          </button>
          </Link>
        </div>
  
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          className="h-full w-full object-cover"
        >
          <source src={video} className="pb-48" type="video/mp4" />
        </video>
      </div>
    );
    };

export default Hero;