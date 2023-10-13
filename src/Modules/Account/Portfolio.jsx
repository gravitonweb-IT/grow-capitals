import React, { useEffect, useState } from "react";
import { servieUrl } from "../../env/env";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faArrowTrendDown,
  faArrowTrendUp,
  faMoneyBill,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  const [dataValue, setDataValue] = useState([]);
  useEffect(() => {
    var formdata = new FormData();
    formdata.append("userEmail", localStorage.getItem("userData"));

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/rolebased/UserAmountStatus/", requestOptions)
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

  const [data, setData] = useState([]);

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
        {/* <div className="row">
          <div className="col-lg-4">
            <div className="border  "></div>
          </div>
          <div className="col-lg-4"></div>
          <div className="col-lg-4"></div>
        </div> */}

        <div className="">
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 mx-6">
              <div className="customerProfile  p-10 bg-blue-800 text-white rounded-3xl w-full sm:w-[600px]">
                <p className=" text-2xl md:text-4xl font-bold ">Welcome</p>
                <p className="mt-2">{localStorage.getItem("userData")}</p>
                <p className=" text-2xl md:text-3xl font-semibold  mt-2">
                  Profit & Loss Details
                </p>
              </div>

              <div className="grid  grid-cols-1  sm:grid-cols-2 gap-4">
                <div className="  p-4  bg-slate-300 rounded-3xl">
                  <p className="text-2xl  font-bold  "> Balance Status</p>
                  <button className="flex items-center justify-center mt-2">
                    <FontAwesomeIcon
                      icon={faMoneyBill}
                      className="h-8 w-8  p-3 bg-blue-600 rounded-full"
                    />
                   <span className="font-semibold px-2"> {dataValue[0]?.fields?.price} payAmount</span>
                  </button>
                </div>

                <div className=" p-4  bg-whit rounded-3xl ">
                  <div className="shadow-xl rounded-lg ">
                    <button className="flex items-center justify-center  p-3">
                      <FontAwesomeIcon
                        icon={faArrowTrendUp}
                        className="h-8 w-8 text-black p-3 bg-green-300 rounded-full "
                      />
                      <span className="font-semibold px-4">  {dataValue[0]?.fields?.profit} profit</span>
                    </button>
                  </div>
                  <div className="shadow-xl rounded-lg ">
                    <button className="flex items-center justify-center p-3">
               
                      <FontAwesomeIcon
                        icon={faArrowTrendDown}
                        className="h-8 w-8 text-black p-3 bg-red-600 rounded-full "
                      />
                      <span className="font-semibold px-4"> {dataValue[0]?.fields?.loss} Loss </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <div className="text-3xl font-bold mb-4 text-blue-500 text-center">
                CUSTOMER PORTFOLIO PROFIT AND LOSS DETAILS
              </div>
              <div className="bg-[#ccfbf1] p-4 shadow-md">
                <div className="text-xl font-bold mb-3 text-center">
                  WELCOME {localStorage.getItem("userData")}
                </div>
              </div>

              <div class="filter-bar p-4 border border-gray-200 rounded-lg shadow-md">
                <div class="flex flex-wrap items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                  <div class="w-full md:w-auto">
                    <label
                      for="name"
                      class="filter-label text-sm font-medium text-gray-700 pr-2"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      class="filter-input p-1 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-200 focus:outline-none"
                    />
                  </div>

                  <div class="w-full md:w-auto">
                    <label
                      for="from-date"
                      class="filter-label text-sm font-medium text-gray-700 pr-2"
                    >
                      From Date:
                    </label>
                    <input
                      type="date"
                      id="from-date"
                      class="filter-input p-1 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-200 focus:outline-none"
                    />
                  </div>

                  <div class="w-full md:w-auto">
                    <label
                      for="to-date"
                      class="filter-label text-sm font-medium text-gray-700 pr-2"
                    >
                      To Date:
                    </label>
                    <input
                      type="date"
                      id="to-date"
                      class="filter-input p-1 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-200 focus:outline-none"
                    />
                  </div>

                  <div class="w-full md:w-auto">
                    <label
                      for="quantity"
                      class="filter-label text-sm font-medium text-gray-700 pr-2"
                    >
                      Quantity:
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      class="filter-input p-1 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-200 focus:outline-none"
                    />
                  </div>

                  <button
                    id="apply-button"
                    class="apply-button bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 rounded-xl w-full md:w-auto mt-4 md:mt-0"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  <th className="p-2">StockName</th>
                  <th className="p-2 ">Buy Price</th>
                  <th className="p-2">Buy Qauntity</th>
                  <th className="p-2 ">Sell Price</th>
                  <th className="p-2">Sell Quantity</th>
                  {/* <th className="p-2">[S&B]</th> */}
                  <th className="p-2">Email</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr className="border" key={item.id}>
                    <td className="p-2 text-center  ">{item.date}</td>
                    <td className="p-2 text-center bg-slate-300 font-semibold">
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
                    <td className="p-2 text-center">{item.buy_sell}</td>
                    <td className="p-2 text-center bg-slate-300 font-semibold">
                      {item.user_email}
                    </td>
                    <td className="p-2 text-center">
                      <button
                        onClick={() => handleDelete(item.id)} // Pass the item ID to the delete function
                        className="   text-center  hover:cursor-pointer"
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="h-4 w-4 text-black pr-3"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="flex flex-row  justify-right border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">10</span> of{" "}
                <span className="font-medium">50</span> results
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    className="h-4 w-4 text-black pr-3"
                  />
                </a>

                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  3
                </a>

                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  4
                </a>

                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="h-4 w-4 text-black pr-3"
                  />
                </a>
              </nav>
            </div>
          </div>
        </div>
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="2"
          className="font-bold"
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
