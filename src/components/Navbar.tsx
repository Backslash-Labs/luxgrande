import React from "react";
import { Link } from "react-router-dom";
import Logo from '../images/Logo svg side by side.svg'
// create a function that onclicks toggles hidden class on the nav-items div


const Navbar = () => {
    function toggleNavItems() {
        const navItems = document.getElementById("nav-items");
        console.log(navItems);
        if (navItems) {
          navItems.classList.toggle("hidden");
        }
      }
      
    return (
        <nav
        className="flex h-16 w-full shadow-md items-center fixed md:w-full md:justify-between md:backdrop-blur-sm  top-0 z-50 md:flex font-sans bg-accent px-10 md:bg-blend-multiply"
      >
        <div className="flex -translate-x-16 md:-translate-x-0">
          <img
            src={Logo}
            className="w-64 h-12"
            alt="Luxgrande Logo"
          />
        </div>
  
        <div className="menu absolute top-3 right-3 z-50 md:hidden">
          <button onClick={toggleNavItems}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="white"
              className="fill-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z"
                fill="white"
              />
              <path
                d="M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z"
                fill="White"
              />
              <path
                d="M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H5Z"
                fill="White"
              />
            </svg>
          </button>
        </div>
        <div className="nav-items flex flex-col bg-white md:bg-transparent md:w-1/2">
          <div
           id="nav-items"
            className="text-accent  hidden top-[60px] left-0 pb-10 md:pb-0 md:animate__animated animate__fadeInLeft    bg-white md:bg-transparent z-50 pl-6 text-2xl hover:border-primary  md:h-fit md:flex md:flex-row md:justify-center md:w-full md:text-xs flex-col cursor-pointer uppercase absolute md:relative md:top-0 md:left-0  md:text-white md:z-40 w-full"
          >
            <div className="z-[150]">
              <Link className="mr-10 py-10" to="/">Home</Link>
            </div>
            <div>
              <Link className="mr-10" to="/about">About</Link>
            </div>
            <div>
              <Link className="mr-10" to="/services">Services</Link>
            </div>
            <div>
              <Link className="mr-10" to="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <button
        id="main-button"
          className="btn btn-primary md:relative md:top-0 md:mr-20 border-none rounded-none text-xs p-1 py-0 absolute top-16 left-5 "
        >
          Book an appointment
        </button>
      </nav>
    );
    };

export default Navbar;
