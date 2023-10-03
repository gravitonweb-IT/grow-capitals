import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "./NavbarImages/LogoImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";


const NavigationBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  


  return (
    <>

    <div className="bg-[#2774AE] hidden md:block">
      <div className=" flex justify-between items-center px-5 md:px-20 py-3">
        <div className="flex">
         <p>
          <FontAwesomeIcon
              icon={faEnvelope}
              className="h-5 w-5 text-white pr-3"
            />
          <span className="text-white font-semibold text-lg">info@growwcapitals.in</span>
         </p>
         {/* <p className="pl-10">
           <FontAwesomeIcon
              icon={faPhone}
              className="h-5 w-5 text-white pr-3"
            />
          <span className="text-white font-semibold text-lg">8349227709</span>
         </p> */}
        </div>
        
        <div>
            <FontAwesomeIcon
              icon={faFacebookF}
              className="h-5 w-5 text-white pr-3"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="h-5 w-5 text-white pr-3"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="h-5 w-5 text-white pr-3"
            />
        </div>
      </div>

    </div>
    
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className=" flex justify-between items-center px-5 md:px-10 py-2">
        <div className="">
        <Link to="/">
          <img src={LogoImage} className="w-[100px] h-[75px]"></img>
        </Link>
        </div>

        <div className="lg:hidden">
          {/* Hamburger Icon */}

          <button
            className="text-black p-2 focus:outline-none"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Drawer */}

        {isDrawerOpen && (
          <div className="lg:hidden absolute top-0 right-0 h-screen w-64 bg-[#059DC0] text-white p-4 transition-transform transform translate-x-0">
            <button
              className="text-white p-2 focus:outline-none absolute top-2 right-2"
              onClick={() => setIsDrawerOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <ul className="space-y-3">
              <li>
                <Link
                to="/"
                  className="text-white text-xl hover:text-blue-500"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                to="/about"
                  className="text-white text-xl hover:text-blue-500"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                to="/service"
                  className="text-white text-xl hover:text-blue-500"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Service
                </Link>
              </li>

              <li>
                <Link
                to="/contact"
                  className="text-white text-xl hover:text-blue-500"
                  onClick={() => setIsDrawerOpen(false)}
                >
                 Contact
                </Link>
              </li>

              <li>
            <Link
            to="/loginandregister"
              className="text-white text-xl hover:text-blue-500"
              activeClassName="font-bold"
            >
            Login
            </Link>
          </li>

            </ul>
          </div>
        )}

        <ul className="hidden lg:flex space-x-5">
          <li>
            <Link
            to="/"
              className="text-[#64666C] hover:text-blue-500 text-lg font-semibold"
              activeClassName="font-bold"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
            to="/about"
              className="text-[#64666C] hover:text-blue-500 text-lg font-semibold"
              activeClassName="font-bold"
            >
              About
            </Link>
          </li>

          <li>
            <Link
            to="/service"  
              className="text-[#64666C] hover:text-blue-500 text-lg font-semibold"
              activeClassName="font-bold"
            >
             Service
            </Link>
          </li>

          <li>
            <Link
            to="/contact"
              className="text-[#64666C] hover:text-blue-500 text-lg font-semibold"
              activeClassName="font-bold"
            >
            Contact
            </Link>
          </li>

          <li>
            <Link
            to="/loginandregister"
              className="text-[#64666C] hover:text-blue-500 text-lg font-semibold"
              activeClassName="font-bold"
            >
            Login
            </Link>
          </li>
        </ul>

        
      </div>
    </nav>
    </>
  );
};

export default NavigationBar;
