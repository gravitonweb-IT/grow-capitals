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
 const sourceDiv = document.querySelector('.tv-embed-widget-wrapper__body');
 const targetDiv = document.getElementById('grapch');
useEffect(()=>{
  // targetDiv?.innerHTML = sourceDiv?.innerHTML;
if(localStorage.getItem("userData")==null){
  navigate("/loginandregister");
}
},[])
const [dataValue, setDataValue] = useState([]);
useEffect(() => {
  var formdata = new FormData();
  formdata.append("userEmail", localStorage.getItem("userData"));

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  fetch(servieUrl.url+"rolebased/UserAmountStatus/", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      setDataValue(result);
    })
    .catch((error) => console.log("error", error));
}, []);

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
     


      <div>
        <div className="grid lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="bg-white mx-5 shadow-2xl text-center">
              <img
                src={base64Image ?base64Image:profile[0]?.fields?.Image?profile[0]?.fields?.Image:"https://bootdey.com/img/Content/avatar/avatar7.png"}
                alt="Admin"
                className="rounded-circle m-auto"
                width="150"
              />
             

              <div className="mt-3">
                <h4>{profile[0]?.fields?.first_name}</h4>

                <p className="text-secondary mb-1">{profile[0]?.fields?.email}</p>

                <p className="text-muted font-size-sm ">
                 {profile[0]?.fields?.created_date}
                </p>

                <label className="custom-file-input">
        <input type="file" accept="image/*" onChange={handleImageChange} />
      
      </label>
    
                <button className="p-2  border-2 my-2">Add Fund</button>
              </div>
            </div>

            <div className="flex mt-6 p-4 justify-between bg-white mx-5 shadow-2xl text-center">
              <h2 className="flex p-1">
                {/* <p>
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
                </p>{" "} */}
                <p className="pl-3">Balance Sheet</p>
              </h2>

              <p> {dataValue[0]?.fields?.price}</p>
            </div>

            <div className="flex mt-6 p-4 justify-between bg-white mx-5 shadow-2xl text-center">
              <h2 className="flex p-1">
                {/* <p>
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
                </p>{" "} */}
                <p className="pl-3">Profit</p>
              </h2>

              <p> {dataValue[0]?.fields?.profit}</p>
            </div>

            <div className="flex mt-6 p-4 justify-between bg-white mx-5 shadow-2xl text-center">
              <h2 className="flex p-1">
                {/* <p>
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
                </p>{" "} */}
                <p className="pl-3">Loss</p>
              </h2>

              <p> {dataValue[0]?.fields?.loss}</p>
            </div>

           
          </div>

          <div className="lg:col-span-2">
            <div className=" bg-white mx-5 p-3 py-3 shadow-2xl">
              <div className="flex  p-3 gap-5 mx-5">
                <p className=" pr-10">FullName:</p>

                <p>{profile[0]?.fields?.first_name}</p>
              </div>

              <hr />

              <div className="flex  p-3 gap-5 mx-5">
                <p className="pr-10">Email:</p>

                <p> {profile[0]?.fields?.email}</p>
              </div>

              <hr />

              <div className="flex  p-3 gap-5 mx-5">
                <p className="pr-10">Mobile</p>

                <p> {profile[0]?.fields?.phone_number}</p>
              </div>

              <hr />

              <div className="flex  p-3 gap-5 mx-5">
                <p className="pr-10">Date Joined:</p>

                <p> {profile[0]?.fields?.date_joined}</p>
              </div>
              <button className="p-2  bg-blue-600 border-2 my-2 text-white">
                PortFolio
              </button>
              <hr />
            </div>

            <div className="grid grid-cols-2 mt-4 gap-2">
              <div className=" bg-white mx-5 p-3 py-3 shadow-2xl">
                <div class="card-body">
                  <h6 class="d-flex align-items-center mb-3">
                    <i class="material-icons text-info mr-2">Bank Details</i>
                   
                  </h6>
                  <small>aadhaarCardNumber</small>
                  <div class="progress mb-3 ">
                    <div
                      class="progress-bar bg-primary w-[80%]"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >{profile[0]?.fields?.aadhaarCardNumber}</div>
                  </div>
                  <small>bankaccount</small>
                  <div class="progress mb-3 ">
                    <div
                      class="progress-bar bg-primary w-[72%]"
                      role="progressbar"
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >{profile[0]?.fields?.bankaccount}</div>
                  </div>
                  <small>pancard</small>
                  <div class="progress mb-3 ">
                    <div
                      class="progress-bar bg-primary w-[89%]"
                      role="progressbar"
                      aria-valuenow="89"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >{profile[0]?.fields?.pancard}</div>
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

             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
