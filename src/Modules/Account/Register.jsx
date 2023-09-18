import React, { useState } from "react";

function Register() {
  const [values, setValue] = useState({
    username:"",
    password:"",
    firstname :"",
    lastname:"",
    email   :"",
    phone_number:"",
    pancard :"",
    bankaccount:"",
    ifsccode:"",
    aadhaarCardNumber:""
  });

  function inputHandle(event) {
    const newObj = { ...values, [event.target.name]: event.target.value };

    setValue(newObj);
  }
  return (
    <>
      <div className="w-[80%] sm:w-[50%] md:w-[60%] lg:w-[60%] xl:w-[35%] p-5 sm:p-10 shadow-2xl rounded-lg  mx-auto mt-10">
        <div className="text-lg md:text-3xl font-bold text-[#0066b2] text-center">
          Register
        </div>
        <form>
          <p className="mt-10">
            <label className="font-semibold text-lg">Username</label>
            <input
              type="text"
              className="w-full p-2 border-2 mt-3 rounded-lg"
              placeholder="Enter Username"
            ></input>
          </p>

          <p className="mt-5">
            <label className="font-semibold text-lg">First Name</label>
            <input
              type="text"
              className="w-full p-2 border-2 rounded-lg mt-3"
              placeholder="First Name"
            ></input>
          </p>

          <p className="mt-5">
            <label className="font-semibold text-lg">Last Name</label>
            <input
              type="text"
              className="w-full p-2 border-2 rounded-lg mt-3"
              placeholder="Last Name"
            ></input>
          </p>

          <p className="mt-5">
            <label className="font-semibold text-lg">Email</label>
            <input
              type="email"
              className="w-full p-2 border-2 rounded-lg mt-3"
              placeholder="Enter Email"
            ></input>
          </p>

          <p className="mt-5">
            <label className="font-semibold text-lg">Phone Number</label>
            <input
              type="tel"
              className="w-full p-2 border-2 rounded-lg mt-3"
              placeholder="Phone Number"
            ></input>
          </p>

          <p className="mt-5">
            <label className="font-semibold text-lg">Date Of Birth</label>
            <input
              type="date"
              className="w-full p-2 border-2 rounded-lg mt-3"
              placeholder="Enter DOB"
            ></input>
          </p>

          <p className="mt-5">
            <label className="font-semibold text-lg">Password</label>
            <input
              type="password"
              className="w-full p-2 border-2 rounded-lg mt-3"
              placeholder="Enter Password"
            ></input>
          </p>

          <p className="mt-5">
            <label className="font-semibold text-lg">Confirm Password</label>
            <input
              type="password"
              className="w-full p-2 border-2 rounded-lg mt-3"
              placeholder="Enter Confirm Password"
            ></input>
          </p>

          <p className="mt-5">
            <label className="font-semibold text-lg">Pan Card Number</label>
            <input
              type="text"
              className="w-full p-2 border-2 rounded-lg mt-3"
              placeholder="Enter PanCard Number"
            ></input>
          </p>

          <p className="mt-5">
            <label className="font-semibold text-lg">Bank Account</label>
            <input
              type="text"
              className="w-full p-2 border-2 rounded-lg mt-3"
              placeholder="Enter Bank Account"
            ></input>
          </p>

          <p className="mt-5">
            <label className="font-semibold text-lg">IFSC Code</label>
            <input
              type="text"
              className="w-full p-2 border-2 rounded-lg mt-3"
              placeholder="Enter IFSC Code"
            ></input>
          </p>

          <p className="mt-5">
            <label className="font-semibold text-lg">Aadhaar Card Number</label>
            <input
              type="text"
              className="w-full p-2 border-2 rounded-lg mt-3"
              placeholder="Enter Aadhaar Card Number"
            ></input>
          </p>

          <button  className="bg-[#2774AE] mt-8 w-full py-2 text-white text-lg font-semibold rounded-lg">
            Register
          </button>
    
        </form>
      </div>
    </>
  );
}

export default Register;
