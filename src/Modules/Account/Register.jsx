import React, { useState } from "react";

function Register() {

  // const [values, setValue] = useState({

  //   username:"",

  //   password:"",

  //   firstname :"",

  //   lastname:"",

  //   email   :"",

  //   phone_number:"",

  //   pancard :"",

  //   bankaccount:"",

  //   ifsccode:"",

  //   aadhaarCardNumber:""

  // });

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

 

  const handleSubmit = (e) => {

    e.preventDefault();

    var formdata = new FormData();

    formdata.append("username", username);

    formdata.append("password", password);

    formdata.append("firstname", firstname);

    formdata.append("lastname", lastname);

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

 

    fetch(

      "https://stockmarketing.pythonanywhere.com/account/account_register/",

      requestOptions

    )

      .then((response) => response.text())

      .then((result) => console.log(result))

      .catch((error) => console.log("error", error));

 

    console.log({

      username,

      password,

      confirmpassword,

      firstname,

      lastname,

      email,

      phonenumber,

      dateofbirth,

      pancard,

      bankaccount,

      ifsccode,

      aadhaarcardnumber,

    });

 

    // Reset form fields

    setUserName(" ");

    setPassword(" ");

    setConfirmPassword(" ");

    setFirstName(" ");

    setLastName(" ");

    setEmail(" ");

    setPhoneNumber(" ");

    setDateOfBirth(" ");

    setPanCard(" ");

    setBankAccount(" ");

    setIfscCode(" ");

    setAadhaarCardNumber(" ");

  };

 

  // function inputHandle(event) {

  //   const newObj = { ...values, [event.target.name]: event.target.value };

 

  //   setValue(newObj);

  // }

  return (

    <>

      <div className="w-[80%] sm:w-[50%] md:w-[60%] lg:w-[60%] xl:w-[35%] p-5 sm:p-10 shadow-2xl rounded-lg  mx-auto mt-10">

        <div className="text-lg md:text-3xl font-bold text-[#0066b2] text-center">

          Register

        </div>

        <form onSubmit={handleSubmit}>

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

          </p>

          <button className="bg-[#2774AE] mt-8 w-full py-2 text-white text-lg font-semibold rounded-lg">

            Register

          </button>

        </form>

      </div>

    </>

  );

}


export default Register;