import React from "react";
import LogoImage from "./NavbarImages/LogoImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const FooterOne = () => {
  return (
    <>
 <div className="bg-[#2774AE] mt-10">
  <div class="p-5 md:p-10 flex flex-col sm:flex-row justify-between">
    <div class="text-white">
      <div className="">
        <img src={LogoImage} className="w-[104px] h-auto"></img>
      </div>
      <p className="mt-4"> Quisque tincidunt justo in libero </p>

      <p>ut fermentum quam accumsan.</p>

      <p> Quisque tincidunt justo in libero </p>

      <p>ut fermentum quam accumsan.</p>
    </div>

    <div class="text-white mt-4 md:mt-0 ">
      <h1 className="font-bold text-2xl ">Contact Us</h1>
      <p className="mt-4">
        <FontAwesomeIcon
          icon={faPhone}
          className="h-4 w-4 text-white pr-3"
        />
        <span className="text-white ">8349227709</span>
      </p>

      <p className="mt-3">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="h-4 w-4 text-white pr-3"
        />
        <span className="text-white ">info@grow-capitals.com</span>
      </p>

      <p className="mt-3">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="h-4 w-4 text-white pr-3"
        />
        <span className="text-white">support@grow-capitals.com</span>
      </p>
    </div>

    <div class=" text-white mt-4 md:mt-0">
      <h1 className="font-bold text-2xl">Service Links</h1>
      <p className="mt-4">
        <Link to="/">Home</Link>
      </p>

      <p className="mt-2">
        <Link to="/about">About</Link>
      </p>

      <p className="mt-2">
        <Link to="/service">Service</Link>
      </p>

      <p className="mt-2">
        <Link to="/contact">Contact</Link>
      </p>
    </div>

    <div class=" text-white mt-4 md:mt-0">
      <h1 className="font-bold text-2xl">Follow Us</h1>

      <p className="mt-4">
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
      </p>
    </div>
  </div>

  <hr class="my-2 md:my-5 w-100 mx-5 md:mx-20 " color="white"></hr>

  <div className="text-center">
    <h1 className="text-white text-lg">&copy; 2023 Grow-Capitals</h1>
  </div>
</div>

    </>
  );
};

export default FooterOne;
