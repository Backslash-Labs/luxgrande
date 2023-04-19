import React from "react";
import barber from "../images/IMG_1333.JPG";

const Crew = () => {
  return (
    <div className="crew md:mx-16 mx-6">
      <div className="p-info text-black text-center">
        <h2 className="px-6 py-6 text-xl">Trendy barber & spa</h2>
        <h1 className="px-6 pb-6 text-3xl text-pimary">Our Crew</h1>
      </div>
      <div className="container md:flex items-center justify-center">
        <div className="flex flex-col justify-center w-full m-auto md:m-6 md:w-64 shadow-md">
          <img
            src={barber}
            className="w-full md:w-64 h-64  object-cover"
            alt=""
          />
          <div className="bg-primary text-accent text-center font-sans none hover:block md:w-64">
            <p className="">Name of the person</p>
            <p>Their role</p>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full m-auto md:m-6  md:w-64 shadow-md">
          <img
            src={barber}
            className="w-full md:w-64 h-64  object-cover"
            alt=""
          />
          <div className="bg-primary text-accent text-center font-sans none hover:block md:w-64">
            <p className="">Name of the person</p>
            <p>Their role</p>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full m-auto md:m-6  md:w-64 shadow-md">
          <img
            src={barber}
            className="w-full md:w-64 h-64  object-cover"
            alt=""
          />
          <div className="bg-primary text-accent text-center font-sans  none hover:block md:w-64">
            <p className="">Name of the person</p>
            <p>Their role</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;