import React, { useState } from "react";

import image5 from "../../Assests/FundPageImages/QRcodeheading1.svg";

import image2 from "../../Assests/FundPageImages/accountdetailheading1.svg";

import image4 from "../../Assests/FundPageImages/Qrcodeimg1.svg";

import image3 from "../../Assests/FundPageImages/UPIheading1.svg";

import image7 from "../../Assests/FundPageImages/UPIdetail.svg";

import image8 from "../../Assests/FundPageImages/bankaccount.svg";

import WithdrawForm from "../Account/WithdrawForm";

 

const Fund = () => {

  const [showWithdrawForm, setShowWithdrawForm] = useState(false);

 

  const openWithdrawForm = () => {

    setShowWithdrawForm(true);

  };

 

  return (

    <>

      <div className=" flex justify-center mt-10 ">

        <button

          onClick={openWithdrawForm}

          className="border-2 border-[#034694] rounded-[4px] px-5 py-2 text-xl cursor-pointer"

        >

          Withdraw

        </button>

        <button className="border-2 border-[#034694] ml-5 rounded-[4px]  px-5 py-2 text-xl">

          Add Funds

        </button>

      </div>

      {showWithdrawForm && (

        <WithdrawForm

          isOpen={true}

          onClose={() => setShowWithdrawForm(false)}

        />

      )}

      <div className=" grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5  mx-5  md:mx-10 lg:mx-14  mt-5 md:mt-14   p-5">

        <div className="">

          <div className="">

            <img src={image2}></img>

          </div>

          <div className="mt-10 flex justify-center ">

            <img src={image8}></img>

          </div>

          <ul className="mt-10 text-center text-lg">

            <li><b>Name: </b> Grow capitals </li>

            <li><b>Account No: </b> 50100655630613 </li>

            <li> <b>IFSC code: </b> HDFC0008694 </li>

          </ul>

        </div>

 

        <div className="">

          <div className=" flex justify-center">

            <img src={image5}></img>

          </div>

 

          <div className="mt-10 ">

            <img src={image4}></img>

          </div>

        </div>

 

        <div className="">

          <div className="flex justify-center">

            <img src={image3}></img>

          </div>

 

          <div className="mt-10 flex justify-center">

            <img src={image7} className="  w-full md:w-4/5  h-auto"></img>

          </div>

          <ul className="mt-5  text-center  text-lg ">

            <li><b>UPI ID: </b> capitalssgroww@okicici</li>

            <li><b>Mobile Number: </b>8962163025 </li>

            <li><b>Bank Name: </b> ICICI Bank</li>

          </ul>

        </div>

      </div>

    </>

  );

};

 

export default Fund;