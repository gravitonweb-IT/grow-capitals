import React, { useState } from "react";
import { Link } from "react-router-dom";

function LogIn() {
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
   
    // Basic email validation (you can use a more robust validation library)
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
      <div className="w-[80%] sm:w-[50%] md:w-[50%] lg:w-[50%] xl:w-[30%] p-5 sm:p-10  shadow-2xl rounded-lg  mx-auto mt-10">
        <div className="text-lg md:text-3xl font-bold text-[#0066b2] text-center">
          Login
        </div>
        <form onSubmit={handleSubmit} className="mt-8">
           <p>
              <input
                required
                type="text"
                className="w-full p-2 border-2 rounded-lg"
                placeholder="Email or Username"
                value={email}
                onChange={handleEmailChange}
              />
           </p>

          <p>
              <input
                required
                type="password"
                className="w-full p-2 border-2 mt-5 rounded-lg"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
          </p>
          
          <div className="mt-4">
           <Link to="#">
           <h1 className="text-[#64666C] text-xl font-semibold">Forgot Password</h1>
           </Link>
          </div>


          {errorMessage && (
            <div className="text-red-600 text-sm mb-4">{errorMessage}</div>
          )}

          <button  className="bg-[#2774AE] mt-5 w-full py-2 text-white text-lg font-semibold rounded-lg">
            Login
          </button>
    
          <div className="mt-5">
           <span className="text-[#64666C] text-lg font-semibold pr-2">Not a Member?</span>
            <Link to="/register" className="text-[#0066b2] text-lg font-semibold">
              Register
            </Link>
          </div>
        </form>
      </div>
    </>
   
  );
}

export default LogIn;

