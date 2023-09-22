import {useEffect} from 'react';


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
  return (

    <>

      <div className="bg-gray-200 p-4 shadow-md">

        <div className="text-3xl font-bold mb-4 text-blue-500 text-center">CUSTOMER PORTFOLIO PROFIT AND LOSS DETAILS</div>

        <div className="text-xl font-bold mb-3 text-center">

          WELCOME TO

        </div>

        <div className="text-2xl font-bold text-center">

          Admin Admin

        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full table-auto">

          <thead className="bg-black text-white">

            <tr>

              <th className="p-2">No.</th>

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

            <tr>

              <td className="p-2 text-center">1</td>

              <td className="p-2 text-center">2023-09-19</td>

              <td className="p-2 text-center">John Doe</td>

              <td className="p-2 text-center">Buy Price</td>

              <td className="p-2 text-center">Buy Quantity</td>

              <td className="p-2 text-center">Sell Price</td>

              <td className="p-2 text-center">Sell Quantity</td>

              <td className="p-2 text-center">S&B Value</td>

              <td className="p-2 text-center">john.doe@example.com</td>

              <td className="p-2 text-center">

                <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>

                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>

              </td>

            </tr>

            <tr>

              <td className="p-2 text-center">2</td>

              <td className="p-2 text-center">2023-09-20</td>

              <td className="p-2 text-center">Jane Smith</td>

              <td className="p-2 text-center">Buy Price</td>

              <td className="p-2 text-center">Buy Quantity</td>

              <td className="p-2 text-center">Sell Price</td>

              <td className="p-2 text-center">Sell Quantity</td>

              <td className="p-2 text-center">S&B Value</td>

              <td className="p-2 text-center">jane.smith@example.com</td>

              <td className="p-2 text-center">

                <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>

                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>

              </td>

            </tr>

            <tr>

              <td className="p-2 text-center">3</td>

              <td className="p-2 text-center">2023-09-20</td>

              <td className="p-2 text-center">Jane Smith</td>

              <td className="p-2 text-center">Buy Price</td>

              <td className="p-2 text-center">Buy Quantity</td>

              <td className="p-2 text-center">Sell Price</td>

              <td className="p-2 text-center">Sell Quantity</td>

              <td className="p-2 text-center">S&B Value</td>

              <td className="p-2 text-center">jane.smith@example.com</td>

              <td className="p-2 text-center">

                <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>

                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>

              </td>

            </tr>

            <tr>

              <td className="p-2 text-center">4</td>

              <td className="p-2 text-center">2023-09-20</td>

              <td className="p-2 text-center">Jane Smith</td>

              <td className="p-2 text-center">Buy Price</td>

              <td className="p-2 text-center">Buy Quantity</td>

              <td className="p-2 text-center">Sell Price</td>

              <td className="p-2 text-center">Sell Quantity</td>

              <td className="p-2 text-center">S&B Value</td>

              <td className="p-2 text-center">jane.smith@example.com</td>

              <td className="p-2 text-center">

                <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>

                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>

              </td>

            </tr>

            <tr>

              <td className="p-2 text-center">5</td>

              <td className="p-2 text-center">2023-09-20</td>

              <td className="p-2 text-center">Jane Smith</td>

              <td className="p-2 text-center">Buy Price</td>

              <td className="p-2 text-center">Buy Quantity</td>

              <td className="p-2 text-center">Sell Price</td>

              <td className="p-2 text-center">Sell Quantity</td>

              <td className="p-2 text-center">S&B Value</td>

              <td className="p-2 text-center">jane.smith@example.com</td>

              <td className="p-2 text-center">

                <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>

                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>

              </td>

            </tr>

            <tr>

              <td className="p-2 text-center">6</td>

              <td className="p-2 text-center">2023-09-20</td>

              <td className="p-2 text-center">Jane Smith</td>

              <td className="p-2 text-center">Buy Price</td>

              <td className="p-2 text-center">Buy Quantity</td>

              <td className="p-2 text-center">Sell Price</td>

              <td className="p-2 text-center">Sell Quantity</td>

              <td className="p-2 text-center">S&B Value</td>

              <td className="p-2 text-center">jane.smith@example.com</td>

              <td className="p-2 text-center">

                <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>

                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>

              </td>

            </tr>

            <tr>

              <td className="p-2 text-center">7</td>

              <td className="p-2 text-center">2023-09-20</td>

              <td className="p-2 text-center">Jane Smith</td>

              <td className="p-2 text-center">Buy Price</td>

              <td className="p-2 text-center">Buy Quantity</td>

              <td className="p-2 text-center">Sell Price</td>

              <td className="p-2 text-center">Sell Quantity</td>

              <td className="p-2 text-center">S&B Value</td>

              <td className="p-2 text-center">jane.smith@example.com</td>

              <td className="p-2 text-center">

                <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>

                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>

              </td>

            </tr>

            <tr>

              <td className="p-2 text-center">8</td>

              <td className="p-2 text-center">2023-09-20</td>

              <td className="p-2 text-center">Jane Smith</td>

              <td className="p-2 text-center">Buy Price</td>

              <td className="p-2 text-center">Buy Quantity</td>

              <td className="p-2 text-center">Sell Price</td>

              <td className="p-2 text-center">Sell Quantity</td>

              <td className="p-2 text-center">S&B Value</td>

              <td className="p-2 text-center">jane.smith@example.com</td>

              <td className="p-2 text-center">

                <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>

                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>

              </td>

            </tr>

            <tr>

              <td className="p-2 text-center">9</td>

              <td className="p-2 text-center">2023-09-20</td>

              <td className="p-2 text-center">Jane Smith</td>

              <td className="p-2 text-center">Buy Price</td>

              <td className="p-2 text-center">Buy Quantity</td>

              <td className="p-2 text-center">Sell Price</td>

              <td className="p-2 text-center">Sell Quantity</td>

              <td className="p-2 text-center">S&B Value</td>

              <td className="p-2 text-center">jane.smith@example.com</td>

              <td className="p-2 text-center">

                <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>

                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>

              </td>

            </tr>

            <tr>

              <td className="p-2 text-center">10</td>

              <td className="p-2 text-center">2023-09-20</td>

              <td className="p-2 text-center">Jane Smith</td>

              <td className="p-2 text-center">Buy Price</td>

              <td className="p-2 text-center">Buy Quantity</td>

              <td className="p-2 text-center">Sell Price</td>

              <td className="p-2 text-center">Sell Quantity</td>

              <td className="p-2 text-center">S&B Value</td>

              <td className="p-2 text-center">jane.smith@example.com</td>

              <td className="p-2 text-center">

                <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>

                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>

              </td>

            </tr>

            <tr>

              <td className="p-2 text-center">11</td>

              <td className="p-2 text-center">2023-09-20</td>

              <td className="p-2 text-center">Jane Smith</td>

              <td className="p-2 text-center">Buy Price</td>

              <td className="p-2 text-center">Buy Quantity</td>

              <td className="p-2 text-center">Sell Price</td>

              <td className="p-2 text-center">Sell Quantity</td>

              <td className="p-2 text-center">S&B Value</td>

              <td className="p-2 text-center">jane.smith@example.com</td>

              <td className="p-2 text-center">

                <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>

                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>

              </td>

            </tr>

            <tr>

              <td className="p-2 text-center">12</td>

              <td className="p-2 text-center">2023-09-20</td>

              <td className="p-2 text-center">Jane Smith</td>

              <td className="p-2 text-center">Buy Price</td>

              <td className="p-2 text-center">Buy Quantity</td>

              <td className="p-2 text-center">Sell Price</td>

              <td className="p-2 text-center">Sell Quantity</td>

              <td className="p-2 text-center">S&B Value</td>

              <td className="p-2 text-center">jane.smith@example.com</td>

              <td className="p-2 text-center">

                <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>

                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>

              </td>

            </tr>

          </tbody>

        </table>

      </div>



      {/* Balance Status Section */}

      <div className="bg-gray-200 p-4 shadow-md mt-4">

        <div className="text-3xl font-bold mb-2 text-blue-500 text-center">Balance Status</div>

      </div>





      <div className="overflow-x-auto">

        <table className="w-full table-auto ">

          <thead className="bg-black text-white">

            <tr>

              <th className="p-2">No.</th>

              <th className="p-2">Date</th>

              <th className="p-2 ">Pay Amount</th>

              <th className="p-2">Profit</th>

              <th className="p-2">Loss</th>

              <th className="p-2">Email</th>

              <th className="p-2">Action</th>

            </tr>

          </thead>





          <tbody >

            <tr className='border' >

              <td className="p-2 text-center">1</td>

              <td className="p-2 text-center">2023-09-21</td>

              <td className="p-2 text-center bg-black text-white">$500</td>

              <td className="p-2 text-center bg-green-500 text-white">$100</td>

              <td className="p-2 text-center bg-red-500 text-white">$50</td>

              <td className="p-2 text-center">sample@example.com</td>

              <td className="p-2 text-center">

                <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>

                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>

              </td>

            </tr>

            <tr className='border'>

              <td className="p-2 text-center">2</td>

              <td className="p-2 text-center">2023-09-22</td>

              <td className="p-2 text-center bg-black text-white">$700</td>

              <td className="p-2 text-center bg-green-500 text-white">$200</td>

              <td className="p-2 text-center bg-red-500 text-white">$80</td>

              <td className="p-2 text-center">another@example.com</td>

              <td className="p-2 text-center">

                <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>

                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>

              </td>

            </tr>

            <tr className='border' >

              <td className="p-2 text-center">3</td>

              <td className="p-2 text-center">2023-09-21</td>

              <td className="p-2 text-center bg-black text-white">$500</td>

              <td className="p-2 text-center bg-green-500 text-white">$100</td>

              <td className="p-2 text-center bg-red-500 text-white">$50</td>

              <td className="p-2 text-center">sample@example.com</td>

              <td className="p-2 text-center">

                <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>

                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>

              </td>

            </tr>

            <tr className='border'>

              <td className="p-2 text-center">4</td>

              <td className="p-2 text-center">2023-09-22</td>

              <td className="p-2 text-center bg-black text-white">$700</td>

              <td className="p-2 text-center bg-green-500 text-white">$200</td>

              <td className="p-2 text-center bg-red-500 text-white">$80</td>

              <td className="p-2 text-center">another@example.com</td>

              <td className="p-2 text-center">

                <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>

                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>

              </td>

            </tr>

            <tr className='border' >

              <td className="p-2 text-center">5</td>

              <td className="p-2 text-center">2023-09-21</td>

              <td className="p-2 text-center bg-black text-white">$500</td>

              <td className="p-2 text-center bg-green-500 text-white">$100</td>

              <td className="p-2 text-center bg-red-500 text-white">$50</td>

              <td className="p-2 text-center">sample@example.com</td>

              <td className="p-2 text-center">

                <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>

                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>

              </td>

            </tr>

            <tr className='border'>

              <td className="p-2 text-center">6</td>

              <td className="p-2 text-center">2023-09-22</td>

              <td className="p-2 text-center bg-black text-white">$700</td>

              <td className="p-2 text-center bg-green-500 text-white">$200</td>

              <td className="p-2 text-center bg-red-500 text-white">$80</td>

              <td className="p-2 text-center">another@example.com</td>

              <td className="p-2 text-center">

                <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>

                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>

              </td>

            </tr>

            <tr className='border' >

              <td className="p-2 text-center">7</td>

              <td className="p-2 text-center">2023-09-21</td>

              <td className="p-2 text-center bg-black text-white">$500</td>

              <td className="p-2 text-center bg-green-500 text-white">$100</td>

              <td className="p-2 text-center bg-red-500 text-white">$50</td>

              <td className="p-2 text-center">sample@example.com</td>

              <td className="p-2 text-center">

                <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>

                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>

              </td>

            </tr>

            <tr className='border'>

              <td className="p-2 text-center">8</td>

              <td className="p-2 text-center">2023-09-22</td>

              <td className="p-2 text-center bg-black text-white">$700</td>

              <td className="p-2 text-center bg-green-500 text-white">$200</td>

              <td className="p-2 text-center bg-red-500 text-white">$80</td>

              <td className="p-2 text-center">another@example.com</td>

              <td className="p-2 text-center">

                <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>

                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </>

  );

}



export default Portfolio;