import React, { useEffect, useState } from "react";
import { servieUrl } from "../../env/env";

const Portfolio = () => {
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
        const apiUrl =servieUrl.otpurl+"growadmin/stock_form/"
      
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
        const apiUrl =
        servieUrl.url+"growadmin/amount_account/";
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

  const EditHandler = (e) => {
    e.preventDefault();
  };

  const DeleteHandler = (e) => {
    e.preventDefault();
  };

  const AddFundEditHandler = (e) => {
    e.preventDefault();
  };

  const AddFundDeleteHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
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
          >
            <span className="blue-text">Track all markets on TradingView</span>
          </a>
        </div>
      </div>
      <div className="bg-gray-200 p-4 shadow-md">
        <div className="text-3xl font-bold mb-4 text-blue-500 text-center">
          CUSTOMER PORTFOLIO PROFIT AND LOSS DETAILS
        </div>
        <div className="text-xl font-bold mb-3 text-center">WELCOME</div>
      </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-black text-white">
              <tr>
                {/* <th className="p-2">No.</th> */}
                <th className="p-2">Date</th>
                <th className="p-2">[Name]</th>
                <th className="p-2">[B-P]</th>
                <th className="p-2">[B-Q]</th>
                <th className="p-2">[S-P]</th>
                <th className="p-2">[S-Q]</th>
                <th className="p-2">[S&B]</th>
                <th className="p-2">[Email]</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="p-2 text-center">{item.date}</td>
                  <td className="p-2 text-center">{item.stock_name}</td>

                  <td className="p-2 text-center">{item.buy_price}</td>
                  <td className="p-2 text-center">{item.buy_quantity}</td>

                  <td className="p-2 text-center">{item.sell_price}</td>
                  <td className="p-2 text-center">{item.sell_quantity}</td>
                  <td className="p-2 text-center">{item.buy_sell}</td>
                  <td className="p-2 text-center">{item.user_email}</td>

                  {/* <td className="p-2 text-center">{item.amount}</td> */}
                  <td className="p-2 text-center">

                    {/* <button
                      onClick={EditHandler}
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      Edit
                    </button> */}
                    <button
                    
                      onClick={DeleteHandler}
                      className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

     
{/* 
      <div className="bg-gray-200 p-4 shadow-md mt-4">
        <div className="text-3xl font-bold mb-2 text-blue-500 text-center">
          Balance Status
        </div>
      </div> */}

      {/* <div className="overflow-x-auto">
        <table className="w-full table-auto ">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-2">Date</th>
              <th className="p-2">Price</th>
              <th className="p-2 ">Loss</th>
              <th className="p-2">Profit</th>
              <th className="p-2">Email</th>
            </tr>
          </thead>

          <tbody>
            {addfund.map((item) => (
              <tr key={item.id}>
                <td className="p-2 text-center">{item.date}</td>
                <td className="p-2 text-center">{item.price}</td>

                <td className="p-2 text-center">{item.loss}</td>
                <td className="p-2 text-center">{item.profit}</td>
                <td className="p-2 text-center">{item.user_email}</td>

            
                <td className="p-2 text-center">
                  <button
                    onClick={AddFundEditHandler}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={AddFundDeleteHandler}
                    className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

    
    </>
  );
};

export default Portfolio;
