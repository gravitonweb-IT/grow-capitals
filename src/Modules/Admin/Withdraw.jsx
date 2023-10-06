import React, { useEffect, useState } from "react";

import { servieUrl } from "../../env/env";

 

const Withdraw = () => {

  const [searchQuery, setSearchQuery] = useState("");

 

 

  const [data, setData] = useState([]);

 

  useEffect(() => {

    async function fetchData() {

      try {

        // Replace with the actual API endpoint URL

        const apiUrl =servieUrl.otpurl+"growadmin/stock_fund/"

     

        const response = await fetch(apiUrl);

        if (!response.ok) {

          throw new Error("Network response was not ok");

        }

        const data = await response.json();

        console.log(data);

        setData(data);

      } catch (error) {

        console.error("Error fetching data:", error);

      }

    }

 

    fetchData();

  }, []);

 

 

  return (

    <>

      {/* Search input field */}

      <div className="mb-4">

        <input

          type="text"

          placeholder="Search by Name"

          value={searchQuery}

          onChange={(e) => setSearchQuery(e.target.value)}

          className="border rounded-md py-2 px-4"

        />

      </div>

 

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead>

            <tr>

              {/* <th className="px-6 py-3 bg-black text-left text-lg leading-4 font-medium text-white uppercase tracking-wider">

                No

              </th> */}

              <th className="px-6 py-3 bg-black text-center text-lg leading-4 font-medium text-white uppercase tracking-wider">

                Date

              </th>

              <th className="px-6 py-3 bg-black text-center text-lg leading-4 font-medium text-white uppercase tracking-wider">

                Name

              </th>

              {/* <th className="px-6 py-3 bg-black text-left text-lg leading-4 font-medium text-white uppercase tracking-wider">

                Mobile

              </th> */}

              <th className="px-6 py-3 bg-black text-center text-lg leading-4 font-medium text-white uppercase tracking-wider">

                Account

              </th>

              <th className="px-6 py-3 bg-black text-center text-lg leading-4 font-medium text-white uppercase tracking-wider">

                IFCS

              </th>

              <th className="px-6 py-3 bg-black text-center text-lg leading-4 font-medium text-white uppercase tracking-wider">

                PAN CARD

              </th>

              <th className="px-6 py-3 bg-black text-center text-lg leading-4 font-medium text-white uppercase tracking-wider">

                Amount

              </th>

              {/* <th className="px-6 py-3 bg-black text-left text-lg leading-4 font-medium text-white uppercase tracking-wider">

                Action

              </th> */}

            </tr>

          </thead>

          <tbody>

            {/* {filteredData.map((row, index) => (

              <tr key={index}>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">

                  {row.No}

                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">

                  {row.Date}

                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">

                  {row.Name}

                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">

                  {row.Mobile}

                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">

                  {row.Account}

                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">

                  {row.IFCS}

                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">

                  {row["PAN CARD"]}

                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">

                  {row.Amount}

                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">

                 

                <button

                    className="bg-red-500 text-white px-2 py-1 rounded ml-2"

                    onClick={() => handleDelete(index)}

                  >

                    Delete

                  </button>

                </td>

              </tr>

            ))} */}

                {data.map((item) => (

                <tr key={item.id}>

                  <td className="p-2 text-center">{item.date}</td>

                  <td className="p-2 text-center">{item.name}</td>

 

                  <td className="p-2 text-center">{item.Account_No}</td>

                  <td className="p-2 text-center">{item.ifsc}</td>

 

                  <td className="p-2 text-center">{item.panNo}</td>

                  <td className="p-2 text-center">{item.price}</td>

                 

 

                  {/* <td className="p-2 text-center">{item.amount}</td> */}

                  {/* <td className="p-2 text-center">

                    <button

                      onClick={EditHandler}

                      className="bg-blue-500 text-white px-2 py-1 rounded"

                    >

                      Edit

                    </button>

                    <button

                      onClick={DeleteHandler}

                      className="bg-red-500 text-white px-2 py-1 rounded ml-2"

                    >

                      Delete

                    </button>

                  </td> */}

                </tr>

              ))}

          </tbody>

        </table>

      </div>

    </>

  );

};

 

export default Withdraw;