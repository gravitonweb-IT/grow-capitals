import React, { useState } from "react";

const Withdraw = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tableData, setTableData] = useState([
    {
      No: 1,
      Date: "2023-09-25",
      Name: "John Doe",
      Mobile: "123-456-7890",
      Account: "12345",
      IFCS: "ABCD12345",
      "PAN CARD": "PAN123456",
      Amount: "$1000",
    },
    {
      No: 2,
      Date: "2023-09-26",
      Name: "Jane Smith",
      Mobile: "987-654-3210",
      Account: "54321",
      IFCS: "EFGH54321",
      "PAN CARD": "PAN654321",
      Amount: "$800",
    },
    {
      No: 3,
      Date: "2023-09-27",
      Name: "Alice Johnson",
      Mobile: "555-555-5555",
      Account: "98765",
      IFCS: "WXYZ98765",
      "PAN CARD": "PAN987654",
      Amount: "$1200",
    },
    {
      No: 4,
      Date: "2023-09-28",
      Name: "Bob Johnson",
      Mobile: "444-444-4444",
      Account: "77777",
      IFCS: "LMNO77777",
      "PAN CARD": "PAN777777",
      Amount: "$1500",
    },
  ]);

  // Filter the table data based on the search query
  const filteredData = tableData.filter((item) =>
    item["Name"].toLowerCase().includes(searchQuery.toLowerCase())
  );


   // Function to delete a row by index
   const handleDelete = (index) => {
    const updatedTableData = [...tableData];
    updatedTableData.splice(index, 1);
    setTableData(updatedTableData);
  };

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
              <th className="px-6 py-3 bg-black text-left text-lg leading-4 font-medium text-white uppercase tracking-wider">
                No
              </th>
              <th className="px-6 py-3 bg-black text-left text-lg leading-4 font-medium text-white uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 bg-black text-left text-lg leading-4 font-medium text-white uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-black text-left text-lg leading-4 font-medium text-white uppercase tracking-wider">
                Mobile
              </th>
              <th className="px-6 py-3 bg-black text-left text-lg leading-4 font-medium text-white uppercase tracking-wider">
                Account
              </th>
              <th className="px-6 py-3 bg-black text-left text-lg leading-4 font-medium text-white uppercase tracking-wider">
                IFCS
              </th>
              <th className="px-6 py-3 bg-black text-left text-lg leading-4 font-medium text-white uppercase tracking-wider">
                PAN CARD
              </th>
              <th className="px-6 py-3 bg-black text-left text-lg leading-4 font-medium text-white uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 bg-black text-left text-lg leading-4 font-medium text-white uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
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
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Withdraw;
