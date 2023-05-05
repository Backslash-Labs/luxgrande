import React from "react";
import Logo from "../images/Logo svg side by side.svg";

const Footer = () => {
    return (
        <><div className="bg-accent md:flex justify-between flex-1 flex-grow-0 md:px-10 lg:pl-40 lg:pr-[226px] py-12">
            <div className="logo mx-6 md:mx-0 md:ml-20 md:w-1/3 ">
                <img src={Logo} className="w-40" alt="" />
                <p className="text-[#999999] font-sans mt-3 ">
                    Our luxurious salon is equipped with modern equipment and technologies
                    to give you the best results.
                </p>
                <div className="socials py-5">
                    <div className="icons-links">
                        <a href="#" className="text-[#999999] mr-3">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#" className="text-[#999999] mr-3">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="#" className="text-[#999999] mr-3">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="location mx-6 md:mx-0 md:mt-0 mt-6 md:w-1/3 md:flex items-end flex-col">
                <div>

                <h1 className="text-2xl text-white">Location</h1>
                <p className="text-[#999999] py-4 font-sans">
                    Ground Floor, Rrylord Plaza,
                </p>
                <p className="text-[#999999] pb-4 font-sans">East Airport, Accra</p>
                </div>
            </div>
            <div className="opening-hrs md:mx-0 mx-6  md:mt-0 md:w-1/3 md:flex flex-col  justify-end items-end">
                <div>

                <h1 className="text-white text-2xl">Opening Hours</h1>
                <p className="text-[#999999] py-4 font-sans">
                    Monday - Thursday: 9am to 8pm
                </p>
                <p className="text-[#999999] pb-4 font-sans">
                    Friday- Saturday: 9am to 9:30pm
                </p>
                <p className="text-[#999999] pb-4 font-sans">Sunday: 2pm to 8pm</p>
                </div>
            </div>
        </div><div
            className="copy-rights bg-accent text-center text-white font-sans"
        >
                2023 Luxgrande. All rights reserved.
            </div></>
    );
    };

export default Footer;