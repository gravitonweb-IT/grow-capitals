import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import TradingGraphc from './TradingGraphc';
import { servieUrl } from '../../env/env';
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

{/* <div>
  
      <h1>Image to Base64 Converter</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {base64Image && <img src={base64Image} alt="Selected Image" />}
    </div> */}
    <h1 className="text-2xl md:text-4xl font-bold text-center text-[#034694] mt-10">
      Welcome To user Page
    </h1>

    <h2 className="text-2xl md:text-3xl font-semibold text-center mt-5">
      Here is the link given below
    </h2>

    <div className="text-center mt-8">
      
      <Link to = "/portfolio">
      <button className="bg-[#059DC0] px-5 py-2 text-white font-semibold text-xl rounded-[4px] ml-3">
       Portfolio
      </button>
      </Link>
      

    {/* <Link to ="/addfund">
      <button className="bg-[#059DC0] px-5 py-2 text-white font-semibold text-xl rounded-[4px] md:ml-3 mt-4 md:mt-0">
        Buy Stock 
      </button>
      
      </Link> */}
      <table>
        {/* this{profile[0]?.fields?.phone_number}
{
  
  profile.map(result=>{
    <tr>{result?.fields?.phone_number}</tr>
  })
} */}
</table>

    </div>
  </>
  )
}

export default UserDashboard