import React from 'react'
import { Link } from "react-router-dom";
const UserDashboard = () => {
  return (
    <>
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

       
    </div>
  </>
  )
}

export default UserDashboard