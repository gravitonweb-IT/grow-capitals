

import React from 'react';

function LogIn() {
  return (

    <div className=" w-full h-full dark:bg-gray-900 bg-cyan-900 pt-10 pb-10">
      <div className="w-80 p-10 bg-gray-300 rounded-lg shadow-lg mx-auto">
        <div className="text-2xl font-semibold mb-8 text-gray-700">Login</div>
        <form action="#">
          <div className="mb-4">
            <div className="relative">
              <input
                required
                type="text"
                className="w-full h-10 pl-12 outline-none border-none text-lg bg-gray-300 text-gray-600 rounded-full shadow-inner focus:shadow-inner-focus"
                placeholder="Email or Phone"
              />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600">
            
                {/* Add your SVG icon here */}
              </span>
              <label className="absolute left-16 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none">
                {/* Email or Phone */}
             
              </label>
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <input
                required
                type="password"
                className="w-full h-10 pl-12 outline-none border-none text-lg bg-gray-300 text-gray-600 rounded-full shadow-inner focus:shadow-inner-focus"
                placeholder="Password"
              />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600">
                {/* Add your SVG icon here */}
              </span>
              <label className="absolute left-16 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none">
                {/* Password */}
              </label>
            </div>
          </div>
          <div className="mb-4">
            <a href="#" className="text-gray-600 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>
          <button className="w-full h-10 bg-gray-300 text-lg font-semibold text-gray-600 rounded-full shadow-lg hover:text-blue-500 focus:text-blue-500 focus:shadow-lg-focus">
            Sign in
          </button>
          <div className="mt-4 text-gray-600 text-sm">
            Not a member?{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Sign up now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}



export default LogIn;