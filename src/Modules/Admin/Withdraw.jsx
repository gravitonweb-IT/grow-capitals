import React, { useEffect, useState } from "react";

import { servieUrl } from "../../env/env";



const Withdraw = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Replace with the actual API endpoint URL
        const apiUrl = servieUrl.otpurl + 'growadmin/stock_fund/';

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const apiData = await response.json();

        // Filter the data based on the search query
        const filteredData = apiData.filter(item =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [searchQuery]); // Run the effect whenever searchQuery changes

  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
  };
  

  return (

    <>

      {/* Search input field */}


      <div className="my-2 pl-2">
        <input
          type="text"
          placeholder="Search by Name.."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="border rounded-md py-2 px-4"
        />
      
      </div>


      {/* Table */}

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead>

            <tr>

              <th className="px-6 py-3 bg-black text-center text-lg leading-4 font-medium text-white uppercase tracking-wider">

                Date

              </th>

              <th className="px-6 py-3 bg-black text-center text-lg leading-4 font-medium text-white uppercase tracking-wider">

                Name

              </th>

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

            </tr>

          </thead>

          <tbody>

          

            {data.map((item) => (

              <tr key={item.id}>

                <td className="p-2 text-center">{item.date}</td>

                <td className="p-2 text-center">{item.name}</td>

                <td className="p-2 text-center">{item.Account_No}</td>

                <td className="p-2 text-center">{item.ifsc}</td>

                <td className="p-2 text-center">{item.panNo}</td>

                <td className="p-2 text-center">{item.price}</td>



              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </>

  );

};



export default Withdraw;