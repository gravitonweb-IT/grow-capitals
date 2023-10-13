import React, { useEffect, useState } from "react";
import image5 from "../../Assests/FundPageImages/QRcodeheading1.svg";
import image2 from "../../Assests/FundPageImages/accountdetailheading1.svg";
import image4 from "../../Assests/FundPageImages/Qrcodeimg1.svg";
import image3 from "../../Assests/FundPageImages/UPIheading1.svg";
import image7 from "../../Assests/FundPageImages/UPIdetail.svg";
import image8 from "../../Assests/FundPageImages/bankaccount.svg";
import WithdrawForm from "../Account/WithdrawForm";
import { useNavigate } from "react-router-dom";


// const FlipCard = ({ buttonText, image }) => {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [isFundsPopupOpen, setIsFundsPopupOpen] = useState(false);

//   const handleFlip = () => {
//     setIsFlipped(!isFlipped);
//   };

//   const handleButtonClick = () => {
//     if (buttonText === "Please click button for withdraw") {
//       setIsFormOpen(true);
//     } else if (buttonText === "Please click button for funds") {
//       setIsFundsPopupOpen(true);
//     }
//   };

//   const closeForm = () => {
//     setIsFormOpen(false);
//   };
//   const closeFundsPopup = () => {
//     setIsFundsPopupOpen(false);
//   };

//   return (
//     <></>
//     // <div
//     //   className="w-72 h-80 bg-white shadow-lg overflow-hidden mx-4 my-8 relative"
//     //   onMouseEnter={handleFlip}
//     //   onMouseLeave={handleFlip}
//     // >
//     //   <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
//     //     <div key="front">
//     //       <div className="bg-gray-200 h-full">
//     //         <img src={image} className="w-[300px] h-[350px] object-cover" alt="Card" />
//     //       </div>
//     //     </div>
//     //     <div key="back" style={{ width: '100%', height: '100%' }}>
//     //       <div className="bg-[#2774AE] text-center h-full flex flex-col justify-center items-center">
//     //         <p className="text-2xl text-white font-bold  py-20 ">{buttonText}</p>
//     //         <button
//     //           className="bg-blue-400 text-white px-6 py-3 mb-10 border-2 rounded-lg hover:bg-white hover:text-black"
//     //           onClick={handleButtonClick} // Open the form on button click
//     //         >
//     //           {buttonText === "Please click button for withdraw" ? "Withdraw" : "Funds"}
//     //         </button>
//     //       </div>
//     //     </div>
//     //   </ReactCardFlip>

//     //   {isFormOpen && buttonText === "Please click button for withdraw" && (
//     //     <WithdrawForm
//     //       isOpen={isFormOpen}
//     //       onClose={closeForm}
//     //       onSubmit={(amount) => {
//     //         console.log(`Withdraw amount: ${amount}`);
//     //         closeForm();
//     //       }}
//     //     />
//     //   )}
//     //   {isFundsPopupOpen && buttonText === "Please click button for funds" && (
//     //     <FundsPopup isOpen={isFundsPopupOpen} onClose={closeFundsPopup} />
//     //   )}
//     // </div>
//   );
// };

const Fund = () => {
  const [showWithdrawForm, setShowWithdrawForm] = useState(false);
  const navigate = useNavigate(); 
  const openWithdrawForm = () => {
    setShowWithdrawForm(true);
  };
  useEffect(()=>{
    if(localStorage.getItem("userData")==null){
      navigate("/loginandregister");
    }
    },[])
    

//   };
  return (
    //     <div className="mt-12 md:mt-14 mx-10 sm:mx-14 md:mx-20 lg:mx-40 flex justify-center items-center ">
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center p-10">
    //     <FlipCard
    //       buttonText="Please click button for withdraw"
    //       image={image2}
    //     />
    //     <FlipCard
    //       buttonText="Please click button for funds"
    //       image={image3}
    //     />
    //   </div>
    // </div>
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
      {showWithdrawForm && <WithdrawForm isOpen={true} onClose={() => setShowWithdrawForm(false)} />}
      <div className=" grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5  mx-5  md:mx-10 lg:mx-14  mt-5 md:mt-14   p-5">
        <div className="">
          <div className="">
            <img src={image2}></img>
          </div>
          <div className="mt-10">
            <img src={image8}></img>
          </div>
          <ul className="mt-10">
            <li>Name: Grow capitals </li>
            <li>Account No: 50100655630613 </li>
            <li> IFSC code: HDFC0008694 </li>
    
          </ul>
        </div>

        <div className="">
          <div className=" md:flex md:justify-center">
            <img   src={image5}></img>
          </div>

          <div className="mt-10">
            <img src={image4}></img>
          </div>
        </div>

        <div className="">
          <div className="md:flex md:justify-center">
            <img src={image3}></img>
          </div>

          <div className="mt-10">
            <img src={image7} className="  w-full md:w-4/5  h-auto"></img>
          </div>
          <ul className="mt-5">
            <li>Name: </li>
            <li>UPI ID: capitalssgroww@okicici</li>
            <li>Mobile Number: 1234567890</li>
            <li>Bank Name: ICICI Bank</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Fund;
