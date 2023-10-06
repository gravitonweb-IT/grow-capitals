import React, { useState } from "react";
import { servieUrl } from "../../env/env";

function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [dateofbirth, setDateOfBirth] = useState("");
  const [pancard, setPanCard] = useState("");
  const [bankaccount, setBankAccount] = useState("");
  const [ifsccode, setIfscCode] = useState("");
  const [aadhaarcardnumber, setAadhaarCardNumber] = useState("");
  const [checkOtp, setOtp] = useState(false)
  const [otpValue, setOtpValue] = useState(null)

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    confirmpassword: "",
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    dateofbirth: "",
    pancard: "",
    bankaccount: "",
    ifsccode: "",
    aadhaarcardnumber: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const sendOtp = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!username) {
      newErrors.username = "Username is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    if (!confirmpassword) {
      newErrors.confirmpassword = "Confirm Password is required";
    } else if (password !== confirmpassword) {
      newErrors.confirmpassword = "Passwords do not match";
    }

    if (!firstname) {
      newErrors.firstname = "First Name is required";
    }

    if (!lastname) {
      newErrors.lastname = "Last Name is required";
    }

    if (!email) {
      newErrors.email = "Email is required";
    }

    if (!phonenumber) {
      newErrors.phonenumber = "Phone Number is required";
    }

    if (!dateofbirth) {
      newErrors.dateofbirth = "Date of Birth is required";
    }

    if (!pancard) {
      newErrors.pancard = "Pan Card Number is required";
    }

    if (!bankaccount) {
      newErrors.bankaccount = "Bank Account Number is required";
    }

    if (!ifsccode) {
      newErrors.ifsccode = "IFSC Code is required";
    }

    if (!aadhaarcardnumber) {
      newErrors.aadhaarcardnumber = "Aadhaar Card Number is required";
    }

    // Update the errors state with the new errors
    setErrors(newErrors);



    setIsLoading(true);


    // If there are no errors, submit the form
    if (Object.values(newErrors).every((error) => !error)) {
      setOtp(true)
      var formdata = new FormData();
      formdata.append("number", phonenumber);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

      fetch(servieUrl.otpurl + "rolebased/sendOTP/", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    else {
      setIsLoading(false);
    }

  }

  const verifyOtp = () => {

    var formdata = new FormData();
    formdata.append("number", phonenumber);
    formdata.append("otp", otpValue);

    var requestOptions = {
      method: 'PUT',
      body: formdata,
      redirect: 'follow'
    };

    fetch(servieUrl.otpurl + "rolebased/checkOTP/", requestOptions)
      .then(response => response.json())
      .then(result => {

        if (result.status) {
          handleSubmit()
        } else {
          alert("otp is wrong entered")
        }
      })
      .catch(error => console.log('error', error));
  }

  const handleSubmit = async () => {

    // debugger
    // Disable the button to prevent multiple submissions

    if (true) {
      try {
        var formdata = new FormData();

        formdata.append("username", username);
        formdata.append("password", password);
        formdata.append("first_name", firstname);
        formdata.append("last_name", lastname);
        formdata.append("email", email);
        formdata.append("phone_number", phonenumber);
        formdata.append("pancard", pancard);
        formdata.append("bankaccount", bankaccount);
        formdata.append("ifsccode", ifsccode);
        formdata.append("aadhaarCardNumber", aadhaarcardnumber);



        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow",
        };

        const response = await fetch(
          servieUrl.otpurl + "rolebased/register/",
          requestOptions
        );

        setUserName("");
        setPassword("");
        setConfirmPassword("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setDateOfBirth("");
        setPanCard("");
        setBankAccount("");
        setIfscCode("");
        setAadhaarCardNumber("");

        // Show a success alert
        // alert("Registration successful!");
      } catch (error) {
        console.error("Error:", error);
        alert("Registration failed. Please try again later.");
      } finally {
        // Re-enable the button after registration process finishes
        setIsLoading(false);
      }
    }
    setRegistrationSuccess(true);
  };

  return (
    <>
      {checkOtp ?
        <div className="mt-16 flex items-center justify-center">
          <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">OTP Verification</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                {/* <label htmlFor="email" className="block text-gray-600">Email</label> */}
                <input
                  type="text"
                  id="number"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter your OTP"
                  value={otpValue}
                  onChange={(e) => setOtpValue(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <button
                  onClick={verifyOtp}
                  type="submit"
                  className="w-full px-4 py-2 bg-[#2774AE] text-white rounded-md hover:bg-blue-600"
                >


                  Verify OTP
                </button>
              </div>
            </form>
          </div>
        </div>

        :
        <div className="w-[80%] sm:w-[50%] md:w-[60%] lg:w-[60%] xl:w-[35%] p-5 sm:p-10 shadow-2xl rounded-lg  mx-auto mt-10">
          <div className="text-lg md:text-3xl font-bold text-[#0066b2] text-center">
            Register
          </div>

          <form onSubmit={sendOtp}>
            <p className="mt-10">
              <label className="font-semibold text-lg">Username</label>
              <input
                type="text"
                className="w-full p-2 border-2 mt-3 rounded-lg"
                placeholder="Enter Username"
                id="uname"
                name="uname"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              ></input>
              {errors.username && (
                <p className="text-red-500 mt-2">{errors.username}</p>
              )}
            </p>

            <p className="mt-5">
              <label className="font-semibold text-lg">First Name</label>

              <input
                type="text"
                className="w-full p-2 border-2 rounded-lg mt-3"
                placeholder="First Name"
                id="fname"
                name="fname"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
              {errors.firstname && (
                <p className="text-red-500 mt-2">{errors.firstname}</p>
              )}
            </p>

            <p className="mt-5">
              <label className="font-semibold text-lg">Last Name</label>

              <input
                type="text"
                className="w-full p-2 border-2 rounded-lg mt-3"
                placeholder="Last Name"
                id="lname"
                name="lname"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              ></input>
              {errors.lastname && (
                <p className="text-red-500 mt-2">{errors.lastname}</p>
              )}
            </p>

            <p className="mt-5">
              <label className="font-semibold text-lg">Email</label>

              <input
                type="email"
                className="w-full p-2 border-2 rounded-lg mt-3"
                placeholder="Enter Email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              {errors.email && (
                <p className="text-red-500 mt-2">{errors.email}</p>
              )}
            </p>

            <p className="mt-5">
              <label className="font-semibold text-lg">Phone Number</label>

              <input
                type="tel"
                className="w-full p-2 border-2 rounded-lg mt-3"
                placeholder="Phone Number"
                id="pnumber"
                name="pnumber"
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              ></input>
              {errors.phonenumber && (
                <p className="text-red-500 mt-2">{errors.phonenumber}</p>
              )}
            </p>

            <p className="mt-5">
              <label className="font-semibold text-lg">Date Of Birth</label>

              <input
                type="date"
                className="w-full p-2 border-2 rounded-lg mt-3"
                placeholder="Enter DOB"
                id="dob"
                name="dob"
                value={dateofbirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              ></input>
              {errors.dateofbirth && (
                <p className="text-red-500 mt-2">{errors.dateofbirth}</p>
              )}
            </p>

            <p className="mt-5">
              <label className="font-semibold text-lg">Password</label>

              <input
                type="password"
                className="w-full p-2 border-2 rounded-lg mt-3"
                placeholder="Enter Password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              {errors.password && (
                <p className="text-red-500 mt-2">{errors.password}</p>
              )}
            </p>

            <p className="mt-5">
              <label className="font-semibold text-lg">Confirm Password</label>

              <input
                type="password"
                className="w-full p-2 border-2 rounded-lg mt-3"
                placeholder="Enter Confirm Password"
                id="cpassword"
                name="cpassword"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
              {errors.confirmpassword && (
                <p className="text-red-500 mt-2">{errors.confirmpassword}</p>
              )}
            </p>

            <p className="mt-5">
              <label className="font-semibold text-lg">Pan Card Number</label>

              <input
                type="text"
                className="w-full p-2 border-2 rounded-lg mt-3"
                placeholder="Enter PanCard Number"
                id="pcard"
                name="pcard"
                value={pancard}
                onChange={(e) => setPanCard(e.target.value)}
              ></input>
              {errors.pancard && (
                <p className="text-red-500 mt-2">{errors.pancard}</p>
              )}
            </p>

            <p className="mt-5">
              <label className="font-semibold text-lg">Bank Account</label>

              <input
                type="text"
                className="w-full p-2 border-2 rounded-lg mt-3"
                placeholder="Enter Bank Account"
                id="bankaccount"
                name="bankaccount"
                value={bankaccount}
                onChange={(e) => setBankAccount(e.target.value)}
              ></input>
              {errors.bankaccount && (
                <p className="text-red-500 mt-2">{errors.bankaccount}</p>
              )}
            </p>

            <p className="mt-5">
              <label className="font-semibold text-lg">IFSC Code</label>

              <input
                type="text"
                className="w-full p-2 border-2 rounded-lg mt-3"
                placeholder="Enter IFSC Code"
                id="ifsc"
                name="ifsc"
                value={ifsccode}
                onChange={(e) => setIfscCode(e.target.value)}
              ></input>
              {errors.ifsccode && (
                <p className="text-red-500 mt-2">{errors.ifsccode}</p>
              )}
            </p>

            <p className="mt-5">
              <label className="font-semibold text-lg">Aadhaar Card Number</label>

              <input
                type="text"
                className="w-full p-2 border-2 rounded-lg mt-3"
                placeholder="Enter Aadhaar Card Number"
                id="aadhaar"
                name="aadhaar"
                value={aadhaarcardnumber}
                onChange={(e) => setAadhaarCardNumber(e.target.value)}
              ></input>
              {errors.aadhaarcardnumber && (
                <p className="text-red-500 mt-2">{errors.aadhaarcardnumber}</p>
              )}
            </p>

            <button
              className="bg-[#2774AE] mt-8 w-full py-2 text-white text-lg font-semibold rounded-lg"
              type="submit"
              disabled={isLoading} // Disable the button when isLoading is true
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
            {registrationSuccess && (

              <p className="text-green-500 mb-2"> Registration Successfully!</p>

            )}
          </form>
        </div>
      }

    </>
  );
}

export default Register;
