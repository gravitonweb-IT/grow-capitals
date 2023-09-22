
import React, { useState } from "react";

const WithdrawForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    date: "",
    name: "",
    accountNo: "",
    ifscCode: "",
    panNo: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onSubmit(formData);
    setFormData({
      date: "",
      name: "",
      accountNo: "",
      ifscCode: "",
      panNo: "",
      amount: "",
    });
    onClose(); 
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? "" : "hidden"}`}>
      <div className="bg-white w-1/3 p-4 rounded shadow-lg">
       
        <form onSubmit={handleSubmit}>
        <button
          onClick={onClose}
          className=" top-10% ml-[450px]  m-2 text-black hover:bg-gray-100 p-3"
        >
          X
        </button>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-bold">
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="accountNo" className="block text-gray-700 font-bold">
              Account No
            </label>
            <input
              type="text"
              name="accountNo"
              id="accountNo"
              value={formData.accountNo}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ifscCode" className="block text-gray-700 font-bold">
              IFSC CODE
            </label>
            <input
              type="text"
              name="ifscCode"
              id="ifscCode"
              value={formData.ifscCode}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="panNo" className="block text-gray-700 font-bold">
              PAN NO
            </label>
            <input
              type="text"
              name="panNo"
              id="panNo"
              value={formData.panNo}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-gray-700 font-bold">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={formData.amount}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      
      </div>
    </div>
  );
};

export default WithdrawForm;
