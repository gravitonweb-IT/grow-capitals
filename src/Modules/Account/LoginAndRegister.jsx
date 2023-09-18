import React from 'react';
import {Link} from 'react-router-dom';
import RAndL from "../../Assests/Register&Login/Register&LoginImage.jpg";

export default function LoginAndRegister() {
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
    <form>
    <p className='mt-10' >
    <label className='font-bold text-2xl'>Username or Email</label>
     <input 
     type="email"
     className="w-full p-2 border-2 mt-3"
     placeholder="Username or Email">   
    </input>
    </p>

   <p className='mt-5'>
   <label className='font-bold text-2xl'>Password</label>
     <input 
     type="password"
     className="w-full p-2 border-2 mt-3"
     placeholder="Enter Password">   
    </input>
   </p>

   <p className='mt-5'>
    <Link to="/login">
    <button  className="bg-[#2774AE] mt-5 px-10 py-3 text-white text-lg font-semibold rounded-lg">Login</button>
    </Link>


    <Link to="/register">
    <button  className="bg-[#2774AE] mt-5 px-10 py-3 text-white text-lg font-semibold rounded-lg ml-5">Register</button>
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
