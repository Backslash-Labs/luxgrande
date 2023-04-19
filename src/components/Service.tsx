import React from "react";
import ServiceCard from "./shared/ServiceCard";

const Service = () => {
    return (
        <div className="services bg-gray-200 mb-40 text-center">
        <div className="title pt-8">
          <h2 className="text-primary text-2xl">Trendy salon & Spa</h2>
          <h1 className="text-4xl py-6 text-black">Our Services</h1>
          <span className="font-bold text-2xl">---------</span>
        </div>
        <div className="services-m md:flex md:p-10 md:justify-center flex-wrap">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        </div>
      </div>
    );
    };

export default Service;