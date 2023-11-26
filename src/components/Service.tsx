import React from "react";
import ServiceCard from "./shared/ServiceCard";
import { Splide } from "@splidejs/react-splide";

const Service = () => {
  return (
    <div className="services bg-gray-200  text-center pb-16">
      <div className="title pt-8">
        <h2 className="text-primary text-2xl">Trendy salon & Spa</h2>
        <h1 className="text-4xl py-6 text-black">Our Services</h1>
        <span className="font-bold text-2xl">---------</span>
      </div>

      <Splide aria-label="Services" options={
        {
          type: 'loop',
         
          autoplay: true,
        }
      }>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </Splide>
    </div>
  );
};

export default Service;
