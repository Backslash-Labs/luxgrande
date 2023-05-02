import React from "react";
import sauna from '../images/sauna.JPG'
import shave from '../images/shave.JPG'
import barber from '../images/IMG_1333.JPG'
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div
        className="intro flex flex-col md:flex-row  items-center text-center bg-secondary py-12 md:px-48"
      >
        <div className="content md:w-1/2">
          <div className="sub">
            <h2 className="text-2xl text-primary pt-5 ">Introducing</h2>
            <h1 className="text-4xl text-neutral  p-3" data-aos="fade-up">
              The Beauty Luxury You Deserve
            </h1>
            <div className="img-beard m-auto flex items-center justify-center my-4">
              <svg
                className="w-2/6 md:w-1/6"
                width="40%"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 1614.911 1744.783"
                // style="enable-background: new 0 0 1614.911 1744.783"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M1547.065,635.938c-1.434-41.905-7.077-94.733-30.374-99.438c-63.202-12.764-18.01,260.217-127.661,320.325
          c-94.956,52.055-34.171,82.062-336.71-132.757c-127.616-90.615-152.772-43.432-200.208-37.029
          c-27.479,3.71-54.309-8.164-81.28-14.602c-66.048-15.766-110.405,43.896-164.304,71.699c-25.689,13.251-54.042,20.7-79.795,33.825
          c-39.358,20.058-51.641,58.34-84.942,84.463c-31.21,24.482-64.463,52.029-105.72,54.375
          c-123.259,7.007-195.46-221.197-200.974-344.305c-4.855-108.43-148.707-37.388-3.109,468.298
          c48.537,168.58,331.64,447.677,478.393,545c106.487,70.62,203.234,110.298,330.281,71.246
          c156.262-48.034,242.996-176.353,338.065-297.541C1479.879,1103.076,1556.997,926.299,1547.065,635.938z M1007.706,1072.111
          c5.004-16.058,15.607-7.234-30.333-35.064c-177.711-107.654-213.115-44.528-288.825-2.219
          c-20.784,11.616-12.705,18.998-14.247,38.975c-3.155,40.768-92.165,1.817-107.338-11.95c-32.727-29.695-6.77-102.461,9.084-134.051
          c74.538-148.523,184.054-141.341,270.174-146.446c114.245-6.773,166.454,19.43,235.467,145.917
          C1161.713,1073.943,995.975,1109.757,1007.706,1072.111z"
                  />
                  <path
                    d="M871.357,113.73c275.621-66.24,610.011-36.266,622.898-15.014c18.113,29.87,8.134,70.294-16.099,84.727
          c-80.322,47.839-32.364,264.622-167.413,289.112c-337.591,61.22-391.161-39.358-446.404-231.024
          c-8.895-30.86-50.841-29.391-82.809-24.415c-13.858,2.157-22.962,8.56-27.288,23.113c-11.64,39.154-28.717,76.392-42.418,114.797
          c-25.72,72.101-76.802,112.244-151.098,123.534c-41.294,6.275-122.798,25.564-269.534-10.212
          c-44.583-10.87-73.34-73.381-85.176-120.922c-29.826-119.799-26.527-136.445-64.983-164.377
          c-25.64-18.623-32.301-89.002,7.261-94.163C589.651,31.317,739.385,145.447,871.357,113.73z"
                  />
                </g>
              </svg>
            </div>
            <p
              data-aos="fade-up"
              className="about font-sans text-black leading-loose px-6 md:w-3/4 m-auto"
            >
              At Lux Grande Beauty Lounge, we believe in providing the highest
              quality service in an intimate environment that respects your time
              and your needs. You deserve nothing less than excellence when it
              comes to your appearance, and we are here to make sure that happens!
            </p>
            <Link to="/about">
            <button className="btn btn-primary rounded-none my-6 font-sans">
              More About Us
            </button>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex md:flex-col md:h-1/2 relative pb-32">
          <img
            src={sauna}
            className="md:h-80 object-cover w-80 rounded-lg "
            alt="some"
            data-aos="fade-left"
          />
          <img
            src={shave}
            className="md:h-80 md:hidden lg:block object-cover w-80 translate-x-44 rounded-lg absolute top-32 "
            alt="hey"
          />
          <img
            src={barber}
            className="lg:h-80 md:hidden lg:block object-cover w-80 rounded-lg absolute left-80 top-10"
            alt="lol"
            data-aos="fade-left"
          />
        </div>
      </div>
  
    );
    };

export default AboutUs;