import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    dateOfBirth: null, // Use null to represent an empty date initially
    panNumber: '',
    bankAccountNumber: '',
    ifscCode: '',
    aadharNumber: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateOfBirthChange = (date) => {
    setFormData({ ...formData, dateOfBirth: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.match(emailRegex)) {
      setErrorMessage('Invalid email address');
      return;
    }

    // Password validation (You can customize it)
    if (formData.password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
      return;
    }

    // Add more validation rules for other fields as needed

    // If validation passes, you can proceed with registration logic here
    console.log('Form Data:', formData);

    // Reset error message
    setErrorMessage('');
  };

  return (
    <>
      <div className=" dark:bg-gray-900 bg-cyan-900 ">
        
          <div className=" bg-gray-300 rounded-lg shadow dark:border  dark:bg-gray-800 dark:border-gray-700">
          <div className="grid items-center justify-center " >
            <div className="px-10 py-5 border-2 border-black rounded-lg ">
              <h1 className="text-xl font-bold  text-gray-900 md:text-2xl ">
                Create Your Account
              </h1>
              <form className=" mt-5" onSubmit={handleSubmit}>
             
                <div>
                  <label for="username" className="block mt-3 text-lg font-medium text-gray-900 dark:text-white">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block px-6 py-3 w-[500px] mt-3"
                    placeholder="Username"
                    onChange={handleChange}
                    value={formData.username}
                    required
                  />
                </div>
                <div>
                  <label for="firstName" className="block mt-3 text-lg font-medium text-gray-900 dark:text-white">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block px-6 py-3 w-[500px] mt-3"
                    placeholder="Enter your First Name"
                    onChange={handleChange}
                    value={formData.firstName}
                    required
                  />
                </div>
                <div>
                  <label for="lastName" className="block mt-3 text-lg font-medium text-gray-900 dark:text-white">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block px-6 py-3 w-[500px] mt-3"
                    placeholder="Enter your Last Name"
                    onChange={handleChange}
                    value={formData.lastName}
                    required
                  />
                </div>
                <div>
                  <label for="email" className="block mt-3 text-lg font-medium text-gray-900 dark:text-white">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block px-6 py-3 w-[500px] mt-3"
                    placeholder="Your@gmail.com"
                    onChange={handleChange}
                    value={formData.email}
                    required
                  />
                </div>
                <div>
                  <label for="mobileNumber" className="block mt-3 text-lg font-medium text-gray-900 dark:text-white">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    name="mobileNumber"
                    id="mobileNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block px-6 py-3 w-[500px] mt-3"
                    placeholder="Mobile Number"
                    onChange={handleChange}
                    value={formData.mobileNumber}
                    required
                  />
                </div>
                <div>
                  <label for="dateOfBirth" className="block mt-4 text-lg font-medium text-gray-900 dark:text-white">
                    Birth Date
                  </label>
                  <DatePicker
                    selected={formData.dateOfBirth}
                    onChange={handleDateOfBirthChange}
                    placeholderText="Select Date of Birth"
                    dateFormat="dd/MM/yyyy"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block px-6 py-3 w-[500px] mt-3"
                    required
                  />
                </div>
                <div>
                  <label for="password" className="block mt-3 text-lg font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block px-6 py-3 w-[500px] mt-3"
                    placeholder="Password"
                    onChange={handleChange}
                    value={formData.password}
                    required
                  />
                </div>
                <div>
                  <label for="confirmPassword" className="block mt-3 text-lg font-medium text-gray-900 dark:text-white">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block px-6 py-3 w-[500px] mt-3"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    value={formData.confirmPassword}
                    required
                  />
                </div>
                <div>
                  <label for="panNumber" className="block mt-3 text-lg font-medium text-gray-900 dark:text-white">
                    PAN Number
                  </label>
                  <input
                    type="text"
                    name="panNumber"
                    id="panNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block px-6 py-3 w-[500px] mt-3"
                    placeholder="PAN Number"
                    onChange={handleChange}
                    value={formData.panNumber}
                    required
                  />
                </div>
                <div>
                  <label for="bankAccountNumber" className="block mt-3 text-lg font-medium text-gray-900 dark:text-white">
                    Bank Account Number
                  </label>
                  <input
                    type="text"
                    name="bankAccountNumber"
                    id="bankAccountNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block px-6 py-3 w-[500px] mt-3"
                    placeholder="Bank Account Number"
                    onChange={handleChange}
                    value={formData.bankAccountNumber}
                    required
                  />
                </div>
                <div>
                  <label for="ifscCode" className="block mt-3 text-lg font-medium text-gray-900 dark:text-white">
                    IFSC Code
                  </label>
                  <input
                    type="text"
                    name="ifscCode"
                    id="ifscCode"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block px-6 py-3 w-[500px] mt-3"
                    placeholder="IFSC Code"
                    onChange={handleChange}
                    value={formData.ifscCode}
                    required
                  />
                </div>
                <div>
                  <label for="aadharNumber" className="block mt-3 text-lg font-medium text-gray-900 dark:text-white">
                    Aadhar Number
                  </label>
                  <input
                    type="text"
                    name="aadharNumber"
                    id="aadharNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block px-6 py-3 w-[500px] mt-3 mb-4"
                    placeholder="Aadhar Number"
                    onChange={handleChange}
                    value={formData.aadharNumber}
                    required
                  />
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                      I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button type="submit" className="w-full text-white bg-cyan-700 hover:bg-blue-950 font-medium rounded-lg text-lg px-5 py-2 text-center mt-4">
                  Register
                </button>
                <p className="mt-2 text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account? <a href="#" className="text-cyan-700 hover:underline font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Login here
                  </a>
                </p>
                {errorMessage && (
                  <div className="text-red-600 text-sm mb-4">{errorMessage}</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;




// import React from 'react'

// const Register = () => {
//   return (
//     <>

//       <div className=" w-full h-full dark:bg-gray-900 bg-cyan-900 p-12">
//         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

//           <div className="w-full bg-gray-300 rounded-lg shadow dark:border  mt-10 mb-10x sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//               <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                 Create Your account 
//               </h1>
//               <form className="space-y-4 md:space-y-6 " action="#">
//                 <div>
//                   <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
//                   <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name" required />
//                 </div>
//                 <div>
//                   <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                   <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your@gmail.com" required />
//                 </div>
//                 <div>
//                   <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                   <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
//                 </div>
//                 <div>
//                   <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
//                   <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm-password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
//                 </div>
//                 <div className="flex items-start">
//                   <div className="flex items-center h-5">
//                     <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
//                   </div>
//                   <div className="ml-3 text-sm">
//                     <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
//                   </div>
//                 </div>
//                 <button type="submit" className="w-full text-white bg-cyan-700 hover:bg-blue-950  font-medium rounded-lg text-lg px-5 py-2 text-center">Register</button>

//                 <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                   Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//     </>
//   )
// }

// export default Register