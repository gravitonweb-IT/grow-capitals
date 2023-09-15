
import React, { useState } from "react";
import bannerimg from '../../Assests/ContactPageImages/bannerimg.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';


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

    return (
        <>


            {/* banner part start */}

            <div className="relative ">
                <img className=" inset-0 relative w-[100%] h-[400px] object-cover " src={bannerimg} alt="" />
                <div className="absolute inset-0 bg-#808792 flex flex-col justify-center ">
                    <h1 className="font-bold text-xl md:text-5xl lg:text-6xl text-white text-start pl-12">
                        Contact Us
                    </h1>

                </div>

            </div>

            {/* Banner part End */}


            {/* Contact part start*/}

            <div className="conatiner  flex justify-center">
                <div className=" grid grid-cols-1 min-w-full lg:grid-cols-3  lg:px-32 xl-px-32 py-16 rounded-lg px-8 mt-10 gap-7 lg:ml-20 ">

                    <div className="  bg-blue-500 border rounded-xl shadow-top-md p-12">
                        <h1 className="text-xl font-medium leading-4"> Get it touch</h1>
                        <p className="mt-8">We will get back to you within 24 hours, or call us everyday</p>
                        <div className="flex mt-10">
                            <FaFacebook className="text-white text-2xl mr-4  rounded-full" />
                            <FaTwitter className="text-white text-2xl  mr-4 rounded-full " />
                            <FaInstagram className="text-white text-2xl mr-4" />
                            <FaLinkedin className="text-white text-2xl mr-4" />
                            <FaYoutube className="text-white text-2xl mr-4" />
                        </div>


                    </div>


                    <div className="bg-white  lg:col-span-2 shadow-top-md px-0 sm:px-20  md:px-20  lg:px-20  ">
                        <h4 className="text-start font-bold text-3xl">
                            Request A Quote
                        </h4>
                        <p className="mt-2 font-medium">We will get back to you within 24 hours, or call us everyday  </p>

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
                                <button type="submit" class="bg-blue-500 hover:bg-white text-white hover:text-blue-500 border-2 border-blue-500 font-medium rounded-full p-2 transition duration-300 ease-in-out">
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
                className="m-auto p-2 rounded-md"
            ></iframe>
        </>
    );
};

export default Contact;
