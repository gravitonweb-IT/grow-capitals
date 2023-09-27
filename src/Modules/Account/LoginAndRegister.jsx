
import React, { useState } from "react";

import { Link } from 'react-router-dom';

import RAndL from "../../Assests/Register&Login/Register&LoginImage.jpg";

 

export default function LoginAndRegister() {

 

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

 

  const handleEmailChange = (e) => {

 

    setEmail(e.target.value);

 

  };

 

  const handlePasswordChange = (e) => {

 

    setPassword(e.target.value);

 

  };

 

  const handleSubmit = (e) => {

 

    e.preventDefault();

    if (!email || !password) {

      setErrorMessage("Both email and password are required.");

      return;

    }

    // console.log(formdata)

 

    var formdata = new FormData();

    formdata.append("username", email);

    formdata.append("password", password);

 

    var requestOptions = {

      method: "POST",

      body: formdata,

      redirect: "follow",

 

    };

 

    fetch(

      "https://stockmarketing.pythonanywhere.com/account/login/",

      requestOptions

    )

 

      .then((response) => response.text())

 

      .then((result) => console.log(result))

 

      .catch((error) => console.log("error", error));

 

   

 

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 

    if (!email.match(emailRegex)) {

 

      setErrorMessage("Invalid email address");

 

      return;

 

    }

 

    if (password.length < 6) {

 

      setErrorMessage("Password must be at least 6 characters long");

 

      return;

 

    }

 

    console.log("Email:", email);

    console.log("Password:", password);

    setErrorMessage("");

 

  };

 

 

  return (

    <>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20  mx-10 md:mx-20 lg:mx-32 mt-10 md:mt-20'>

        <div>

          <h1 className='text-lg md:text-5xl font-bold'>

            <span className='text-lg md:text-5xl font-bold text-[#0066b2] pr-3'>

              GROW

            </span>

            CAPITALS

          </h1>

          <form onSubmit={handleSubmit}>

            <p className='mt-10' >

              <label className='font-bold text-2xl'>Username or Email</label>

              <input

                type="email"

                className="w-full p-2 border-2 mt-3"

                placeholder="Username or Email"

                value={email}

                onChange={handleEmailChange}

                required

              />

 

 

            </p>

 

            <p className='mt-5'>

              <label className='font-bold text-2xl'>Password</label>

              <input

                type="password"

                className="w-full p-2 border-2 mt-3"

                placeholder="Enter Password"

                value={password}

                onChange={handlePasswordChange}

                required

              />

 

            </p>

            <Link to="#">

              <h1 className="text-[#64666C] text-lg font-semibold hover:underline mt-3">

                Forgot Password

              </h1>

            </Link>

 

            {errorMessage && (

              <div className="text-red-600 text-sm mb-4">{errorMessage}</div>

            )}

 

            <p className='mt-1'>

              <Link to="">

                <button className="bg-[#2774AE] mt-5 px-10 py-3 text-white text-lg font-semibold rounded-lg">Login</button>

              </Link>

           

              <Link to="/register">

                <button className="bg-[#2774AE] mt-5 px-10 py-3 text-white text-lg font-semibold rounded-lg ml-5">Register</button>

              </Link>

 

            </p>

          </form>

        </div>

 

        <div>

          <img src={RAndL} className='rounded-lg'></img>

        </div>

      </div>

    </>

  )

}

 