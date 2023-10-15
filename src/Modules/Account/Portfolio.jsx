import React, { useEffect, useState } from "react";
import { servieUrl } from "../../env/env";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./portfolio.css";
import {
  faAngleLeft,
  faAngleRight,
  faArrowTrendDown,
  faArrowTrendUp,
  faMoneyBill,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
const Portfolio = () => {
  const itemsPerPage = 5;
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    name: "",
    fromDate: "",
    endDate: "",
    quantity: "",
  });
  const filteredData = (e) => {
    const value1 = data.filter((item) => {
      const isNameMatch = filter.name
        ? item.stock_name.toLowerCase() === filter.name.toLowerCase()
        : true;
      const isFromDateMatch = filter.fromDate
        ? item.date >= filter.fromDate
        : true;
      const isEndDateMatch = filter.endDate
        ? item.date <= filter.endDate
        : true;
      const isQuantityMatch = filter.quantity
        ? item.buy_quantity == filter.quantity
        : true;

      return (
        isNameMatch && isFromDateMatch && isEndDateMatch && isQuantityMatch
      );
    });
    debugger;
    console.log(value1);
  };
  const [dataValue, setDataValue] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentData = data.slice(offset, offset + itemsPerPage);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userData") == null) {
      navigate("/loginandregister");
    }
  }, []);
  useEffect(() => {
    var formdata = new FormData();
    formdata.append("userEmail", localStorage.getItem("userData"));

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(servieUrl.url + "rolebased/UserAmountStatus/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setDataValue(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "FOREXCOM:SPXUSD",
          title: "S&P 500",
        },
        {
          proName: "FOREXCOM:NSXUSD",
          title: "US 100",
        },
        {
          proName: "FX_IDC:EURUSD",
          title: "EUR to USD",
        },
        {
          proName: "BITSTAMP:BTCUSD",
          title: "Bitcoin",
        },
        {
          proName: "BITSTAMP:ETHUSD",
          title: "Ethereum",
        },
      ],
      showSymbolLogo: true,
      colorTheme: "light",
      isTransparent: false,
      displayMode: "adaptive",
      locale: "in",
    });
    document.getElementById("tradingview-widget-container").appendChild(script);
    return () => {
      // Clean up the script when the component unmounts
      // document
      //   .getElementById("tradingview-widget-container")
      //   .removeChild(script);
    };
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        // Replace with the actual API endpoint URL
        const apiUrl = servieUrl.otpurl + "growadmin/stock_form/";

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

  const [addfund, setAddfund] = useState([]);

  useEffect(() => {
    async function AddFundfetchData() {
      try {
        // Replace with the actual API endpoint URL
        const apiUrl = servieUrl.url + "growadmin/amount_account/";
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setAddfund(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    AddFundfetchData();
  }, []);

  const handleDelete = async (itemId) => {
    try {
      // Replace with the actual API endpoint URL for deleting an item
      const apiUrl = `${servieUrl.otpurl}growadmin/stock_form/${itemId}`;
      const response = await fetch(apiUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: itemId }), // Pass the item ID to delete
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Assuming successful deletion, you can remove the item from your state
      setData((prevData) => prevData.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <>
      <div
        id="tradingview-widget-container"
        className="tradingview-widget-container"
      >
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://in.tradingview.com/"
            rel="noopener noreferrer"
            target="_blank"
          ></a>
        </div>
      </div>
      <section>
    

        <div className="">
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 px-5">
              <div className="customerProfile mb-5 sm:mb-0 p-10 bg-blue-800 text-white rounded-3xl w-full sm:w-[600px]">
                <p className=" text-2xl md:text-4xl font-bold ">Welcome</p>
                <p className="mt-2">{localStorage.getItem("userData")}</p>
                <p className=" text-2xl md:text-3xl font-semibold  mt-2">
                  Profit & Loss Details
                </p>
              </div>

              <div className="grid  grid-cols-1  sm:grid-cols-2 gap-4 ">
                <div className="  p-4  bg-slate-200 rounded-3xl">
                  <p className="text-2xl  font-bold mt-3  "> Balance Status</p>

                  <div className="grid grid-cols-3 mt-6  ">
                    
                    <FontAwesomeIcon
                      icon={faMoneyBill}
                      className="h-10 w-10  p-4  bg-blue-600 rounded-full"
                    />
                    <div className="font-bold mt-2  ">
                  
                      {dataValue[0]?.fields?.price} 
                     <br />
                      <span className="font-bold text-lg "> PayAmount</span>
                     
                    </div>
                 
                  </div>
            
                </div>
                <div className="  rounded-3xl ">

                  <div className="shadow-xl rounded-lg ">
                    <div className="grid grid-cols-3 mt-5 p-3">
                      <FontAwesomeIcon
                        icon={faArrowTrendUp}
                        className="h-8 w-8  p-4 bg-green-300 rounded-full ml-2"
                      />
                     <div className="font-semibold mt-2  ">
                    
                        {dataValue[0]?.fields?.profit} 
                        <br />
                        <span className="font-bold">   Profit</span>
                      
                      </div>
                    </div>
                  </div>
                  <div className="shadow-xl rounded-lg mt-2 ">
                    <div className="grid grid-cols-3 mt-5 p-3">
                      <FontAwesomeIcon
                        icon={faArrowTrendDown}
                        className="h-8 w-8  p-4 bg-red-600 rounded-full ml-2 "
                      />
                        <div className="font-semibold mt-2  ">
                     
                        {dataValue[0]?.fields?.loss}
                        <br />
                        <span className="font-bold"> Loss</span> 
                      </div>
                    </div>
                  </div>


                </div>
              </div>


            </div>

            <div className="mt-6">
              <div className="text-4xl font-bold mb-4 text-blue-500 text-center">
                CUSTOMER PORTFOLIO PROFIT AND LOSS DETAILS
              </div>
              <div className="bg-[#ccfbf1] p-4 shadow-md">
                <div className="text-xl font-bold mb-3 text-center">
                  WELCOME {localStorage.getItem("userData")}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <div className=" p-4 border border-gray-200 rounded-xl shadow-md">
        <div className="flex flex-wrap items-center justify-center space-y-3 md:space-y-5 md:space-x-6">
          <div className="w-full  md:w-auto ">
            <input
              type="text"
              placeholder="Filter by Name"
              class=" p-2   w-full md:w-auto uppercase border m-3 sm:m-1 border-gray-300 rounded-lg hover:border-sky-900"
              value={filter.name}
              onChange={(e) => setFilter({ ...filter, name: e.target.value })}
            />
            <input
              type="date"
              placeholder="Filter by From Date"
              class=" p-2 border  w-full md:w-auto   m-3 sm:m-1  mx-3 border-gray-300 rounded-lg hover:border-sky-900"
              value={filter.fromDate}
              onChange={(e) =>
                setFilter({ ...filter, fromDate: e.target.value })
              }
            />
            <input
              type="date"
              placeholder="Filter by End Date"
              class=" p-2 border   w-full md:w-auto  m-3 sm:m-1  mx-3 border-gray-300 rounded-lg hover:border-sky-900"
              value={filter.endDate}
              onChange={(e) =>
                setFilter({ ...filter, endDate: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Filter by Quantity"
              class=" p-2 border   w-full md:w-auto   m-3 sm:m-1  border-gray-300 rounded-lg   hover:border-sky-900"
              value={filter.quantity}
              onChange={(e) =>
                setFilter({ ...filter, quantity: e.target.value })
              }
            />
            <button
              onClick={filteredData}
              id="apply-button"
              class="apply-button bg-blue-500   hover:bg-blue-900 text-white py-2 px-6 rounded-full mx-3 w-full md:w-auto mt-4 md:mt-0"
            >
              Apply
            </button>
          </div>
        </div>
      </div>

      
      <div>
        <div className="overflow-x-auto">
          {data.length == 0 ? (
            <p className="py-2 text-center bg-orange-200">
              Please Buy some Stocks
            </p>
          ) : (
            <table className="w-full table-auto border-4">
              <thead className="bg-zinc-400 text-white">
                <tr>
                  <th className="p-2">No</th>
                  <th className="p-2">Date</th>
                  <th className="p-2 ">StockName</th>
                  <th className="p-2 ">Buy Price</th>
                  <th className="p-2">Buy Qauntity</th>
                  <th className="p-2 ">Sell Price</th>
                  <th className="p-2">Sell Quantity</th>
                  <th className="p-2">Buy/Sell</th>
                  <th className="p-2">Email</th>
                  {localStorage.getItem("login") == "admin" ? (
                    <th className="p-2">Action</th>
                  ) : null}
                </tr>
              </thead>
              <tbody>
                {currentData.map((item, index) => (
                  <tr className="border-y-2" key={item.id}>
                    <td className="p-2 text-center  ">{index + 1}</td>
                    <td className="p-2 text-center  ">{item.date}</td>
                    <td className="p-2 text-center bg-slate-300 font-semibold uppercase">
                      {item.stock_name}
                    </td>
                    <td className="p-2 text-center font-bold text-green-600  ">
                      {item.buy_price}
                    </td>
                    <td className="p-2 text-center bg-slate-300 font-semibold">
                      {item.buy_quantity}
                    </td>
                    <td className="p-2 text-center font-bold text-green-600">
                      {item.sell_price}
                    </td>
                    <td className="p-2 text-center bg-slate-300 font-semibold">
                      {item.sell_quantity}
                    </td>
                    <td className="p-2 text-center font-semibold capitalize ">{item.buy_sell}</td>
                    <td className="p-2 text-center bg-slate-300 font-semibold">
                      {item.user_email}
                    </td>
                    {localStorage.getItem("login") == "admin" ? (
                      <th className="p-2">
                        {" "}
                        <td className="flex justify-center items-center">
                          <button
                            onClick={() => handleDelete(item.id)} // Pass the item ID to the delete function
                            className="     hover:cursor-pointer"
                          >
                            <FontAwesomeIcon
                              icon={faTrash}
                              className="h-4 w-4 text-black text-center"
                            />
                          </button>
                        </td>
                      </th>
                    ) : null}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={Math.ceil(data.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination-container"}
            pageClassName={"pagination-page"}
            pageLinkClassName={"pagination-link"}
            activeClassName={"active"}
          />
        </div>

        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="2"
          className="font-bold bg-teal-600 p-3 mt-2"
        >
          म्यूचुअल फंड बाज़ार से जुड़े निवेश हैं और इस तरह वे कभी पूरी तरह से
          सुरक्षित नहीं हो सकते हैं। हालांकि, जोखिम कम करने के लिए इन पर कई तरह
          के नियम लागू होते हैं और म्यूचुअल फण्ड में से पैसा कई क्षेत्रों में
          निवेश किया जाता है, इस तरह स्टॉक या बॉन्ड के मुकाबले इनमें कम जोखिम
          होता है।
        </marquee>
      </div>
    </>
  );
};

export default Portfolio;
