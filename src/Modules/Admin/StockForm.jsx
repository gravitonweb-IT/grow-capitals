import React, { useState } from "react";

const StockForm = () => {

  const [formData, setFormData] = useState({

    type: "",

    buyPrice: "",

    sellPrice: "",

    amount: "",

    profit: "",

    stockName: "",

    buyQuantity: "",

    sellQuantity: "",

    loss: "",

    date: "",

    userEmail: "",

  });

 

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

  };

 

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);

  };


  return (

    <div className="flex justify-center items-center min-h-screen bg-blue-300">

      <div className="bg-white p-6 rounded-md shadow-md w-[900px] ">

        <form onSubmit={handleSubmit}>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div>

              <label

                htmlFor="type"

                className="block text-lg font-medium text-gray-700"

              >

                Buy/Sell

              </label>

              <select

                name="type"

                id="type"

                className="mt-1 p-2 block w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"

                onChange={handleChange}

                value={formData.type}

                required

              >

                <option value="" disabled>

                  Select

                </option>

                <option value="buy">Buy</option>

                <option value="sell">Sell</option>

              </select>

            </div>

 

            <div>

              <label

                htmlFor="stockName"

                className="block text-lg font-medium text-gray-700"

              >

                Stock Name

              </label>

              <input

                type="text"

                name="stockName"

                id="stockName"

                className="mt-1 p-2 block w-full border rounded-md hover:bg-gray-100"

                onChange={handleChange}

                value={formData.stockName}

                required

              />

            </div>

            <div>

              <label

                htmlFor="buyPrice"

                className="block text-lg font-medium text-gray-700"

              >

                Buy Price

              </label>

              <input

                type="text"

                name="buyPrice"

                id="buyPrice"

                className="mt-1 p-2 block w-full border rounded-md hover:bg-gray-100"

                onChange={handleChange}

                value={formData.buyPrice}

                required

              />

            </div>

            <div>

              <label

                htmlFor="buyQuantity"

                className="block text-lg font-medium text-gray-700"
              >
                Buy Quantity

              </label>

              <input

                type="text"

                name="buyQuantity"

                id="buyQuantity"

                className="mt-1 p-2 block w-full border rounded-md hover:bg-gray-100"

                onChange={handleChange}

                value={formData.buyQuantity}

                required
              />
            </div>
            <div>
              <label
                htmlFor="sellPrice"
                className="block text-lg font-medium text-gray-700"
              >
                Sell Price

              </label>

              <input

                type="text"

                name="sellPrice"

                id="sellPrice"

                className="mt-1 p-2 block w-full border rounded-md hover:bg-gray-100"

                onChange={handleChange}

                value={formData.sellPrice}

                required
              />
            </div>
            <div>
              <label
                htmlFor="sellQuantity"
                className="block text-lg font-medium text-gray-700"
              >
                Sell Quantity
              </label>

              <input

                type="text"

                name="sellQuantity"

                id="sellQuantity"

                className="mt-1 p-2 block w-full border rounded-md hover:bg-gray-100"

                onChange={handleChange}

                value={formData.sellQuantity}

                required
              />
            </div>
            <div>

              <label

                htmlFor="amount"

                className="block text-lg font-medium text-gray-700"

              >

                Amount

              </label>

              <input

                type="text"

                name="amount"

                id="amount"

                className="mt-1 p-2 block w-full border rounded-md hover:bg-gray-100"

                onChange={handleChange}

                value={formData.amount}
                required
              />
            </div>
            <div>

              <label

                htmlFor="loss"

                className="block text-lg font-medium text-gray-700"
              >
                Loss

              </label>
              <input
                type="text"

                name="loss"

                id="loss"

                className="mt-1 p-2 block w-full border rounded-md hover:bg-gray-100"

                onChange={handleChange}

                value={formData.loss}

                required

              />
            </div>
            <div>

              <label

                htmlFor="profit"

                className="block text-lg font-medium text-gray-700"
              >
                Profit
              </label>
              <input
                type="text"

                name="profit"

                id="profit"

                className="mt-1 p-2 block w-full border rounded-md hover:bg-gray-100"

                onChange={handleChange}

                value={formData.profit}

                required

              />
            </div>
            <div>

              <label

                htmlFor="date"

                className="block text-lg font-medium text-gray-700"
              >
                Date

              </label>

              <input

                type="date"

                name="date"

                id="date"

                className="mt-1 p-2 block w-full border rounded-md hover:bg-gray-100"

                onChange={handleChange}

                value={formData.date}

                required

              />
            </div>
            <div>
              <label
                htmlFor="userEmail"

                className="block text-lg font-medium text-gray-700"

              >
                User Email

              </label>

              <input

                type="email"

                name="userEmail"

                id="userEmail"

                className="mt-1 p-2 block w-full border rounded-md hover:bg-gray-100"

                onChange={handleChange}

                value={formData.userEmail}

                required

              />
            </div>

          </div>
          <div className="mt-5">

            <button

              type="submit"

              className="bg-blue-500 hover:bg-white text-white hover:text-black border-2 border-blue-500 text-lg rounded-full w-[130px]   p-1 transition duration-300 ease-in-out"

            >
              Submit

            </button>

          </div>

        </form>

      </div>

    </div>

  );

};

 

export default StockForm;