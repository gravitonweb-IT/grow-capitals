import React, { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";
import { servieUrl } from "../../env/env";
import "tailwindcss/tailwind.css";
import ReactPaginate from "react-paginate";
import "./pendingRequest.css"
const PendingRequest = () => {
  const [pendingRequest, setPendingRequest] = useState([]);
  const [conditiion, seteCondition] = useState(true);

  const updateValue = (value) => {
    seteCondition(!conditiion);
    var formdata = new FormData();
    formdata.append("userEmail", value);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(servieUrl.url + "rolebased/pendingRequest/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // Handle the response as needed
      })
      .catch((error) => console.log("error", error));
    alert("Successfully updated");
  };

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("userEmail", "anujweb123@gmail.com");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(servieUrl.url + "rolebased/pendingRequest/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setPendingRequest(result);
      })
      .catch((error) => console.log("error", error));
  }, [conditiion]);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedItems = pendingRequest.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-4 py-8">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Email</th>
            <th className="p-2">Aadhaar Card</th>
            <th className="p-2">Bank Account</th>
            <th className="p-2">Pancard</th>
            <th className="p-2">Phone Number</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {displayedItems.map((result) => (
            <tr key={result.pk} className="text-center">
              <td className="p-2">{result.fields.email}</td>
              <td className="p-2">{result.fields.aadhaarCardNumber}</td>
              <td className="p-2">{result.fields.bankaccount}</td>
              <td className="p-2">{result.fields.pancard}</td>
              <td className="p-2">{result.fields.phone_number}</td>
              <td className="p-2">
                {result.fields.is_active ? (
                  <>
                    <span className="text-green-600">Approved</span>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full ml-2"
                      onClick={() => updateValue(result.fields.email, false)}
                    >
                      Reject
                    </button>
                  </>
                ) : (
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full ml-2"
                    onClick={() => updateValue(result.fields.email, true)}
                  >
                    Approve
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="my-4 flex justify-center">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={Math.ceil(pendingRequest.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          pageLinkClassName={"rounded-full border px-2 py-1 m-1"}
        />
      </div>
    </div>
  );
};

export default PendingRequest;
