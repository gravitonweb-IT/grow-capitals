import React, { useState } from "react";
import bannerimg from "../../Assests/ContactPageImages/contact1.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  const [values, setValue] = useState({
    fname: "",

    lname: "",

    email: "",

    subject: "",

    message: "",
  });

  function inputHandle(event) {
    const newObj = { ...values, [event.target.name]: event.target.value };

    setValue(newObj);
  }
const handlesubmit =(s)=>{
  s.preventDefault()
  debugger 
  console.log(values)
  var formdata = new FormData();
  formdata.append("firstname", values.fname);
  formdata.append("lastname", values.lname);
  formdata.append("email",values.email);
  formdata.append("phone", values.message);
  
  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  
  fetch("http://127.0.0.1:8000/main_contact/", requestOptions)
    .then(response => response.json())
    .then(result => {
      alert("successfully stored")
    })
    .catch(error => console.log('error', error));
}
  return (
    <>
      {/* banner part start */}

      <div className="relative w-full h-64 md:h-96 lg:h-96">
        <img
          src={bannerimg }
          alt="Banner"
          className=" object-cover w-full h-64 md:h-96 lg:h-96"
        />

        {/*banner-content */}

        <div className="absolute top-0 left-5 lg:left-20 right-0 bottom-0 text-white flex flex-col justify-center ">
          <div className="container mx-auto">
            <h1 className="text-lg md:text-5xl font-bold">Contact Us</h1>

            <p className="mt-4 text-md md:text-xl font-semibold">
            Get in Touch with Our Stock Market Experts
            </p>
          </div>
        </div>
      </div>

      {/* Banner part End */}

      {/* Contact part start*/}

      <div className="flex justify-center">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 md:mx-20 lg:mx-32 mt-10 md:mt-20">
          <div className=" bg-[#2774AE] border rounded-xl p-12">
            <h1 className="text-3xl font-medium text-white leading-4">
              {" "}
              Get in Touch
            </h1>

            <p className="mt-8 text-justify text-md text-white">
              We will get back to you within 24 hours, or call us everyday
            </p>

            <div className="flex mt-7">
              <FaFacebook className="text-white text-2xl mr-4  rounded-full" />

              <FaTwitter className="text-white text-2xl  mr-4 rounded-full " />

              <FaInstagram className="text-white text-2xl mr-4" />
            </div>

          </div>

          <div className="bg-white  lg:col-span-2 shadow-top-md px-0 sm:px-20  md:px-20  lg:px-20  ">
            <h4 className="text-2xl md:text-4xl font-bold text-[#034694]">
              Request A Quote
            </h4>

            <p className="mt-4 font-medium">
              We will get back to you within 24 hours, or call us everyday{" "}
            </p>

            <form>
              <div className="grid grid-cols-2 gap-5 pb-4 pt-4">
                <input
                  type="text"
                  className="mt-1 px-4 py-3 bg-gray-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 col-span-2 md:col-span-1 "
                  placeholder="Fast Name"
                  onChange={inputHandle}
                  name="fname"
                  value={values.fname}
                />

                <input
                  type="text"
                  className="mt-1 px-4 py-3 bg-gray-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 col-span-2 md:col-span-1"
                  placeholder="Last Name"
                  onChange={inputHandle}
                  name="lname"
                  value={values.lname}
                />

                <input
                  placeholder="Email"
                  cols="5"
                  rows="8"
                  className="mt-1 px-4 py-3 bg-gray-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1  col-span-2  "
                  onChange={inputHandle}
                  name="email"
                  value={values.email}
                />

                <input
                  placeholder="Subject"
                  cols="5"
                  rows="8"
                  className="mt-1 px-4 py-3 bg-gray-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1  col-span-2  "
                  onChange={inputHandle}
                  name="subject"
                  value={values.subject}
                />

                <textarea
                  placeholder="Your Message"
                  cols="5"
                  rows="8"
                  className="mt-1 px-4 py-3 bg-gray-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1  col-span-2  "
                  onChange={inputHandle}
                  name="message"
                  value={values.message}
                />

                <button
                  type="submit"
                  class="bg-[#2774AE] text-white font-semibold rounded-lg px-5 py-3"
                  onClick={handlesubmit }
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5404230564054!2d-0.12174238448021957!3d51.50330061882424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sph!4v1606746108264!5m2!1sen!2sph"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="m-auto p-2 rounded-md mt-10"
      ></iframe>
    </>
  );
};

export default Contact;
