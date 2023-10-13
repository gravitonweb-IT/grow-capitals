import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import TradingGraphc from './TradingGraphc';
import { servieUrl } from '../../env/env';


// import "./Userdashboard.css";
import { BsBrowserEdge } from "react-icons/bs";
const UserDashboard = () => {
  const navigate = useNavigate(); 
  const [base64Image, setBase64Image] = useState(null);
  const [profile,setProfile]=useState([])
 const uploadImage =(value)=>{
  debugger
 
 }
useEffect(()=>{
  
if(localStorage.getItem("userData")==null){
  navigate("/loginandregister");
}
},[])

 useEffect(()=>{
  var formdata = new FormData();
  formdata.append("userEmail", localStorage.getItem("userData"));
  debugger
  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  
  fetch(servieUrl.url+"rolebased/uploadProfile/", requestOptions)
    .then(response => response.json())
    .then(result => {
      
      setProfile(result)
    })
    .catch(error => console.log('error', error));
    console.log(profile)
 },[])

  const handleImageChange = (e) => {
    
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBase64Image(e.target.result);
        if(e.target.result){
          var formdata = new FormData();
          formdata.append("userEmail",localStorage.getItem("userData"));
          formdata.append("image",e.target.result);
          
          var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
          };
          
          fetch(servieUrl.url+"rolebased/uploadProfile/", requestOptions)
            .then(response => response.json())
            .then(result => {
              alert("successfully update image")
            })
            .catch(error => console.log('error', error));
        }
        // console.log("base64",e.target.result)
      };
      reader.readAsDataURL(file);
    }
    console.log("base64",e.target.result)
   
  
   
  };

  return (
    <>
      <h1 className="text-2xl md:text-4xl font-bold text-center text-[#034694] mt-10">
        Welcome To user Page
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-center mt-5">
        Here is the link given below
      </h2>

      <div className="text-center mt-8">
        <Link to="/portfolio">
          <button className="bg-[#059DC0] px-5 py-2 text-white font-semibold text-xl rounded-[4px] ml-3">
            Portfolio
          </button>
        </Link>

        {/* <Link to ="/addfund">
      <button className="bg-[#059DC0] px-5 py-2 text-white font-semibold text-xl rounded-[4px] md:ml-3 mt-4 md:mt-0">
        Buy Stock 
      </button>
      
      </Link> */}
      </div>

      {/* new  */}

      <div>
        <div className="grid lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="bg-white mx-5 shadow-2xl text-center">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="Admin"
                className="rounded-circle m-auto"
                width="150"
              />

              <div className="mt-3">
                <h4>John Doe</h4>

                <p className="text-secondary mb-1">Full Stack Developer</p>

                <p className="text-muted font-size-sm ">
                  Bay Area, San Francisco, CA
                </p>

                <button className="p-2 bg-blue-600  text-white border-2 my-2">
                  Follow
                </button>

                <button className="p-2  border-2 my-2">Message</button>
              </div>
            </div>

            <div className="flex mt-6 p-4 justify-between bg-white mx-5 shadow-2xl text-center">
              <h2 className="flex p-1">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-facebook mr-2 icon-inline text-primary"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </p>{" "}
                <p className="pl-3">Facebook</p>
              </h2>

              <p>https://bootdey.com</p>
            </div>

            <div className="flex mt-6 p-4 justify-between bg-white mx-5 shadow-2xl text-center">
              <h2 className="flex p-1">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-github mr-2 icon-inline"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </p>{" "}
                <p className="pl-3">Github</p>
              </h2>

              <p>bootdey</p>
            </div>

            <div className="flex mt-6 p-4 justify-between bg-white mx-5 shadow-2xl text-center">
              <h2 className="flex p-1">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-twitter mr-2 icon-inline text-info"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </p>{" "}
                <p className="pl-3">Twitter</p>
              </h2>

              <p>https://bootdey.com</p>
            </div>

            <div className="flex mt-6 p-4 justify-between bg-white mx-5 shadow-2xl text-center">
              <h2 className="flex p-1">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-instagram mr-2 icon-inline text-danger"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </p>{" "}
                <p className="pl-3">Instagram</p>
              </h2>

              <p>https://bootdey.com</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className=" bg-white mx-5 p-3 py-3 shadow-2xl">
              <div className="flex  p-3 gap-5 mx-5">
                <p className=" pr-10">FullName:</p>

                <p>Kenneth Valdez</p>
              </div>

              <hr />

              <div className="flex  p-3 gap-5 mx-5">
                <p className="pr-10">Email:</p>

                <p> fip@jukmuh.al</p>
              </div>

              <hr />

              <div className="flex  p-3 gap-5 mx-5">
                <p className="pr-10">Mobile</p>

                <p> (320) 380-4539</p>
              </div>

              <hr />

              <div className="flex  p-3 gap-5 mx-5">
                <p className="pr-10">Address:</p>

                <p> Bay Area, San Francisco, CA</p>
              </div>
              <button className="p-2  bg-blue-600 border-2 my-2 text-white">
                Message
              </button>
              <hr />
            </div>

            <div className="grid grid-cols-2 mt-4 gap-2">
              <div className=" bg-white mx-5 p-3 py-3 shadow-2xl">
                <div class="card-body">
                  <h6 class="d-flex align-items-center mb-3">
                    <i class="material-icons text-info mr-2">Assignment</i>
                    Project Status
                  </h6>
                  <small>Web Design</small>
                  <div class="progress mb-3 ">
                    <div
                      class="progress-bar bg-primary w-[80%]"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <small>Website Markup</small>
                  <div class="progress mb-3 ">
                    <div
                      class="progress-bar bg-primary w-[72%]"
                      role="progressbar"
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <small>One Page</small>
                  <div class="progress mb-3 ">
                    <div
                      class="progress-bar bg-primary w-[89%]"
                      role="progressbar"
                      aria-valuenow="89"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <small>Mobile Template</small>
                  <div class="progress mb-3 ">
                    <div
                      class="progress-bar bg-primary w-[70%]"
                      role="progressbar"
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <small>Backend API</small>
                </div>
              </div>

              <div className=" bg-white mx-5 p-3 py-3 shadow-2xl">
                <div class="card-body">
                  <h6 class="d-flex align-items-center mb-3">
                    <i class="material-icons text-info mr-2">assignment</i>
                    Project Status
                  </h6>
                  <small>Web Design</small>
                  <div class="progress  h-10">
                    <div
                      class="progress-bar bg-primary w-[80%]"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <small>Website Markup</small>
                  <div class="progress  h-10">
                    <div
                      class="progress-bar bg-primary w-[72%]"
                      role="progressbar"
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <small>One Page</small>
                  <div class="progress h-10">
                    <div
                      class="progress-bar bg-primary w-[89%]"
                      role="progressbar"
                      aria-valuenow="89"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <small>Mobile Template</small>
                  <div class="progress mb-3 h-10">
                    <div
                      class="progress-bar bg-primary w-[55%]"
                      role="progressbar"
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <small>Backend API</small>
                  <div class="progress mb-3 h-10">
                    <div
                      class="progress-bar bg-primary w-[66%]"
                      role="progressbar"
                      aria-valuenow="66"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
