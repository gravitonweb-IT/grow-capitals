
import React, { useState } from 'react';
import image2 from '../../Assests/FundPageImages/cardone.jpg';
import image3 from '../../Assests/FundPageImages/moneyone.jpg';
import ReactCardFlip from 'react-card-flip';
import WithdrawForm from '../Account/WithdrawForm';
import FundsPopup from '../Account/FundsPopup';

const FlipCard = ({ buttonText, image }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFundsPopupOpen, setIsFundsPopupOpen] = useState(false);
 const [addFund,setAddFund]=useState(false)
 const [widraw,setWidraw]=useState(false)
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleButtonClick = () => {
    if (buttonText === "Please click button for withdraw") {
      setIsFormOpen(true);
    } else if (buttonText === "Please click button for funds") {
      setIsFundsPopupOpen(true);
    }
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };
  const closeFundsPopup = () => {
    setIsFundsPopupOpen(false);
  };

  return (
    <div
      className="w-72 h-80 bg-white shadow-lg overflow-hidden mx-4 my-8 relative"
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlip}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div key="front">
          <div className="bg-gray-200 h-full">
            <img src={image2} className="w-[300px] h-[350px] object-cover" alt="Card" />
          </div>
        </div>
        <div key="back" style={{ width: '100%', height: '100%' }}>
          <div className="bg-[#2774AE] text-center h-full flex flex-col justify-center items-center">
            <p className="text-2xl text-white font-bold  py-20 ">{buttonText}</p>
            <button
              className="bg-blue-400 text-white px-6 py-3 mb-10 border-2 rounded-lg hover:bg-white hover:text-black"
              onClick={handleButtonClick} // Open the form on button click
            >
              {buttonText === "Please click button for withdraw" ? "Withdraw" : "Funds"}
            </button>
          </div>
        </div>
      </ReactCardFlip>

      {isFormOpen && buttonText === "Please click button for withdraw" && (
        <WithdrawForm
          isOpen={isFormOpen}
          onClose={closeForm}
          onSubmit={(amount) => {
            console.log(`Withdraw amount: ${amount}`);
            closeForm();
          }}
        />
      )}
      {isFundsPopupOpen && buttonText === "Please click button for funds" && (
        <FundsPopup isOpen={isFundsPopupOpen} onClose={closeFundsPopup} />
      )}
    </div>
  );
};

const Fund = () => {
  return (
   
<>
<>
 
  <div>


  <section className="bank-section">
    <h2>Bank Account Information</h2>
    <p>Account Holder: John Doe</p>
    <p>Account Number: XXXX-XXXX-XXXX-1234</p>
  </section>
  <section className="qr-code-section">
    <h2>QR Code</h2>
    <div className='qrCode'>
    <img id={image2} src="https://qrscanneronline.com/images/qrscanneronline.png" alt="QR Code" />
    </div>
   
  </section>
  <section className="upi-id-section">
    <h2>UPI ID</h2>
    <p>Your UPI ID: john@example.com</p>
  </section>
  </div>
</>
<div className="mt-12 md:mt-14 mx-10 sm:mx-14 md:mx-20 lg:mx-40 flex justify-center items-center ">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center p-10">
    <FlipCard
      buttonText="Please click button for withdraw"
      image={image2}
    />
    <FlipCard
      buttonText="Please click button for funds"
      image={image3}
    />
  </div>
</div>

</>
  
  );
};

export default Fund;