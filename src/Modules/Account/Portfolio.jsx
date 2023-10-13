import React, { useEffect, useState } from "react";
import { servieUrl } from "../../env/env";
import "./porfolio.css"
const Portfolio = () => {

  const [dataValue,setDataValue]=useState([])
  useEffect(()=>{
    var formdata = new FormData();
    formdata.append("userEmail", localStorage.getItem("userData"));
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("http://127.0.0.1:8000/rolebased/UserAmountStatus/", requestOptions)
      .then(response => response.json())
      .then(result =>{
        setDataValue(result)
      })
      .catch(error => console.log('error', error));
  },[])
  


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
              {/* <span className="blue-text">Track all markets on TradingView</span> */}
            </a>
          </div>
        </div>
    <section>
      <div className="row">
        <div className="col-lg-4">
          <div className="border  ">

          </div>

        </div>
        <div className="col-lg-4">
          
        </div>
        <div className="col-lg-4">
          
        </div>
      </div>
      <div className="containter">
        <div className="row">
          <div className="col-6">
            <div className="customerProfile">
            <p>
        Welcome 
      </p>
      <p>
        {localStorage.getItem("userData")}
      </p>
      <p>
        Profit & Loss Details 
      </p>
            </div>
     
          </div>
          <div className="col-6">
    <div className="row">
      <div className="col-6">
        Balance Sheet
          <button>
            icon - {dataValue[0]?.fields?.price}- payAmount
          </button>
          <button>
            icon - {dataValue[0]?.fields?.profit}- profit
          </button>
          <button>
            icon - {dataValue[0]?.fields?.loss}- loss
          </button>
      </div>

    </div>
    <div className="text-3xl font-bold mb-4 text-blue-500 text-center">
            CUSTOMER PORTFOLIO PROFIT AND LOSS DETAILS
          </div>
          <div className="bg-[#ccfbf1] p-4 shadow-md">
          
          <div className="text-xl font-bold mb-3 text-center">WELCOME  {localStorage.getItem("userData")}</div>
        </div>
    <div class="filter-bar">
        <label for="name" class="filter-label">Name:</label>
        <input type="text" id="name" class="filter-input"/>
        
        <label for="from-date" class="filter-label">From Date:</label>
        <input type="date" id="from-date" class="filter-input"/>
        
        <label for="to-date" class="filter-label">To Date:</label>
        <input type="date" id="to-date" class="filter-input"/>
        
        <label for="quantity" class="filter-label">Quantity:</label>
        <input type="number" id="quantity" class="filter-input"/>
        
        <button id="apply-button" class="apply-button">Apply</button>
    </div> 
          </div>
        </div>
      </div>
    </section>
      <div>
        
      
      
        <div className="overflow-x-auto">
          {data.length==0?<>

          Please Buy some Stocks
          </>:  <table className="w-full table-auto border-4">
            <thead className="bg-red-600 text-white">
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
                {/* <th className="p-2">Action</th> */}
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr className="border" key={item.id}>
                  <td className="p-2 text-center  ">{item.date}</td>
                  <td className="p-2 text-center bg-slate-300 font-semibold">{item.stock_name}</td>
                  <td className="p-2 text-center font-bold text-green-600  ">{item.buy_price}</td>
                  <td className="p-2 text-center bg-slate-300 font-semibold">{item.buy_quantity}</td>
                  <td className="p-2 text-center font-bold text-green-600">{item.sell_price}</td>
                  <td className="p-2 text-center bg-slate-300 font-semibold">{item.sell_quantity}</td>
                  <td className="p-2 text-center">{item.buy_sell}</td>
                  <td className="p-2 text-center bg-slate-300 font-semibold">{item.user_email}</td>
                  <td className="p-2 text-center">
                    {/* <button
                      onClick={() => handleDelete(item.id)} // Pass the item ID to the delete function
                      className="bg-blue-900 text-white px-2 py-1 rounded ml-2 hover:cursor-pointer"
                    >
                      Edit
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          }
        
        </div>
        <marquee behavior="scroll" direction="left" scrollamount="2">
        म्यूचुअल फंड बाज़ार से जुड़े निवेश हैं और इस तरह वे कभी पूरी तरह से सुरक्षित नहीं हो सकते हैं। हालांकि, जोखिम कम करने के लिए इन पर कई तरह के नियम लागू होते हैं और म्यूचुअल फण्ड में से पैसा कई क्षेत्रों में निवेश किया जाता है, इस तरह स्टॉक या बॉन्ड के मुकाबले इनमें कम जोखिम होता है।
    </marquee>
      </div>
    </>
  );
};

export default Portfolio;
