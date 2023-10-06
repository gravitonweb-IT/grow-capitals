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
        const apiUrl =
          servieUrl.url + "growadmin/amount_account/";
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
          <table className="w-full table-auto border-2">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-2">Date</th>
                <th className="p-2">Name</th>
                <th className="p-2 ">[B-P]</th>
                <th className="p-2">[B-Q]</th>
                <th className="p-2 ">[S-P]</th>
                <th className="p-2">[S-Q]</th>
                <th className="p-2">[S&B]</th>
                <th className="p-2">Email</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr className="border" key={item.id}>
                  <td className="p-2 text-center  ">{item.date}</td>
                  <td className="p-2 text-center bg-slate-300">{item.stock_name}</td>
                  <td className="p-2 text-center font-bold text-green-600  ">{item.buy_price}</td>
                  <td className="p-2 text-center bg-slate-300">{item.buy_quantity}</td>
                  <td className="p-2 text-center font-bold text-green-600">{item.sell_price}</td>
                  <td className="p-2 text-center bg-slate-300">{item.sell_quantity}</td>
                  <td className="p-2 text-center">{item.buy_sell}</td>
                  <td className="p-2 text-center bg-slate-300">{item.user_email}</td>
                  <td className="p-2 text-center">
                    <button
                      onClick={() => handleDelete(item.id)} // Pass the item ID to the delete function
                      className="bg-red-500 text-white px-2 py-1 rounded ml-2 hover:cursor-pointer"
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
    </>
  );
};

export default Portfolio;
