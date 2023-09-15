

import React, {useState} from 'react';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
      setErrorMessage('Invalid email address');
      return;
    }

    // Password validation (you can add your own criteria)
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
      return;
    }

    // If validation passes, you can proceed with the login logic here
    // For simplicity, we'll just log the email and password for demonstration purposes
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset error message
    setErrorMessage('');
  };

  return (
    <div className="w-full h-full dark:bg-gray-900 bg-cyan-900 pt-10 pb-10">
      <div className="w-80 p-10 bg-gray-300 rounded-lg shadow-lg mx-auto">
        <div className="text-2xl text-center font-semibold mb-8 text-gray-700">Login</div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="relative">
              <input
                required
                type="text"
                className="w-full h-10 pl-12 outline-none border-none text-lg bg-gray-100 text-gray-600 rounded-full shadow-inner focus:shadow-inner-focus"
                placeholder="Email or Username"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <input
                required
                type="password"
                className="w-full h-10 pl-12 outline-none border-none text-lg bg-gray-100 text-gray-600 rounded-full shadow-inner focus:shadow-inner-focus"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <a href="#" className="text-gray-600 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>
          {errorMessage && (
            <div className="text-red-600 text-sm mb-4">{errorMessage}</div>
          )}
          <button className="w-full h-10 bg-cyan-700 hover:bg-blue-950 text-lg font-semibold text-white rounded-full shadow-lg hover:text-white focus:text-blue-500 focus:shadow-lg-focus">
            Login
          </button>
          <div className="mt-4 text-gray-600 text-sm">
            Not a member?{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;


// import React from 'react';

// function LogIn() {
//   return (

//     <div className=" w-full h-full dark:bg-gray-900 bg-cyan-900 pt-10 pb-10">
//       <div className="w-80 p-10 bg-gray-300 rounded-lg shadow-lg mx-auto">
//         <div className="text-2xl text-center font-semibold mb-8 text-gray-700">Login</div>
//         <form action="#">
//           <div className="mb-4">
//             <div className="relative">
//               <input
//                 required
//                 type="text"
//                 className="w-full h-10 pl-12 outline-none border-none text-lg bg-gray-100 text-gray-600 rounded-full shadow-inner focus:shadow-inner-focus"
//                 placeholder="Email or Username"
//               />
//               <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600">
            
//                 {/* Add your SVG icon here */}
//               </span>
//               <label className="absolute left-16 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none">
//                 {/* Email or Phone */}
             
//               </label>
//             </div>
//           </div>
//           <div className="mb-4">
//             <div className="relative">
//               <input
//                 required
//                 type="password"
//                 className="w-full h-10 pl-12 outline-none border-none text-lg bg-gray-100 text-gray-600 rounded-full shadow-inner focus:shadow-inner-focus"
//                 placeholder="Password"
//               />
//               <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600">
//                 {/* Add your SVG icon here */}
//               </span>
//               <label className="absolute left-16 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none">
//                 {/* Password */}
//               </label>
//             </div>
//           </div>
//           <div className="mb-4">
//             <a href="#" className="text-gray-600 text-sm hover:underline">
//               Forgot Password?
//             </a>
//           </div>
//           <button className="w-full h-10 bg-cyan-700 hover:bg-blue-950 text-lg font-semibold text-white rounded-full shadow-lg hover:text-white focus:text-blue-500 focus:shadow-lg-focus">
//             Login
//           </button>
//           <div className="mt-4 text-gray-600 text-sm">
//             Not a member?{' '}
//             <a href="#" className="text-blue-500 hover:underline">
//               Register
//             </a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }



// export default LogIn;