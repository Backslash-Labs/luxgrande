import React from "react";
import sauna from "../images/sauna.JPG";

const Form = () => {
    return (
        <div
        id="form-container"
        className="bg-sauna md:bg-none md:h-screen md:bg-accent bg-blend-multiply bg-slate-600 md:bg-transparent text-white text-left md:flex"
      >
        <div
          className="image hidden md:h-5/6 md:block md:w-1/2 object-cover bg-black"
        >
          <img
            src={sauna}
            className="object-cover w-full pb-0 bg-black h-full"
            alt=""
          />
        </div>
        <div
          className="form md:h-5/6 h-full mx-6 md:mx-0 md:bg-sauna md:bg-no-repeat md:bg-cover md:w-1/2 md:bg-slate-600 md:bg-blend-multiply"
        >
          <div className="tile md:ml-20 md:w-4/5">
            <h1 className="text-3xl text-left py-6 text">Make an appointment</h1>
            <p className="leading-relaxed font-sans text-[#999999] pb-5">
              Our luxurious salon is equipped with modern equipment and
              technologies to give you the best results.
            </p>
            <form action="#" className="md:w-4/5">
              <input
                type="text"
                className="input input-bordered bg-transparent border-[#999999] rounded-none font-sans w-full my-3"
                placeholder="Name"
              />
              <input
                type="email"
                className="input input-bordered bg-transparent border-[#999999] rounded-none font-sans w-full my-3"
                placeholder="Email"
              />
              <input
                type="text"
                className="input input-bordered bg-transparent border-[#999999] rounded-none font-sans w-full my-3"
                placeholder="Phone number"
              />
              <input
                type="text"
                className="input input-bordered bg-transparent border-[#999999] rounded-none font-sans w-full my-3"
                placeholder="Your Free Time"
              />
              <div>
                <select
                  className="select border-[#999999] rounded-none font-normal text-[#999999] my-3 bg-transparent w-full font-sans"
                >
                  <option disabled selected>Pick category</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
              <button
                className="btn btn-primary rounded-none font-sans justify-self-start self-start w-1/2 mb-6 md:mb-0"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
       
    );
    };

export default Form;