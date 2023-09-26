import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import HomeSlide1 from "../../Assests/HomePageImages/HomeSlide1.png";

import HomeSlide2 from "../../Assests/HomePageImages/HomeSlide2.png";

import HomeSlide3 from "../../Assests/HomePageImages/HomeSlide3.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {

  faPlus,

  faMinus,

  faBook,

  faChevronLeft,

  faChevronRight,

  faCoins,

  faGraduationCap,

  faHandshake,

  faHeadset,

  faUsersGear,

  faHouse,

  faPiggyBank,

  faPercent,

  faChartLine,

  faMoneyBill,

  faChartBar,

  faClipboardQuestion,

  faStar,

} from "@fortawesome/free-solid-svg-icons";

import HomeAbout from "../../Assests/HomePageImages/HomeAbout1.png";

import HomeMarket from "../../Assests/HomePageImages/HomeMark1.png";

import FaqImage from "../../Assests/HomePageImages/HomeFaqImage1.png";

import TradingImage from "../../Assests/HomePageImages/TradingImage1.png";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import "./Home.css";



const stockData = {

  name: "Reliance Industries Ltd",

  description:

    "Engaged in refining, manufacturing of refined petroleum products, pet...",

  price: "₹ 2,382.60",

  return1M: -4.7,

  return1Y: 7.38,

  pe: 24.71,

  marketCap: "16,48,408.34",

  beta: 1.07,

  dividendYield: "0.36",

};



const slides = [

  {

    image: HomeSlide1,

    content1: "Introduction To The",

    content2: "Stock Market",

    paragraph1: "Our platform offers secure and reliable investment",

    paragraph2: "opportunities in the rapidly growing world of Stock Market.",

    button: "Let's Connect",

  },

  {

    image: HomeSlide2,

    content1: "Get A Passive Income With",

    content2: "Our Free Consultancy",

    paragraph1: "Free consultancy over phone for one month",

    paragraph2: "24/7 chat support.",

    button: "Let's Connect",

  },

  {

    image: HomeSlide3,

    content1: "Investments In Securities",

    content2: "Using Our Platform",

    paragraph1: "Please read the offer document",

    paragraph2: "carefully before investing.",

    button: "Let's Connect",

  },

];



const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0);



  const nextSlide = () => {

    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);

  };



  const prevSlide = () => {

    setCurrentIndex((prevIndex) =>

      prevIndex === 0 ? slides.length - 1 : prevIndex - 1

    );

  };



  useEffect(() => {

    const slideInterval = setInterval(nextSlide, 5000);



    // Clean up the interval when the component unmounts

    return () => clearInterval(slideInterval);

  }, []);



  const currentSlide = slides[currentIndex];



  const [accordionItems, setAccordionItems] = useState([

    {

      title: "Add The Right Strategy ?",

      content:

        "The freedom to choose from our rich pool of expert trading algorithms developed by professionals or build your own unique strategy, choose from our diverse range of products and sub-products as per your own needs and specifications.",

      isOpen: false,

    },

    {

      title: "Get Started ?",

      content:

        "On our all-inclusive tech-driven trading platform by signing up and logging in to your broking account.",

      isOpen: false,

    },

    {

      title: "Factor In The Risk ?",

      content:

        "Stay shielded from market volatality and turbulences by adding in your specific risk appetite into the trading algorithm equation and our systems will take care of the rest.",

      isOpen: false,

    },

  ]);



  const toggleAccordion = (index) => {

    setAccordionItems((prevItems) =>

      prevItems.map((item, i) => ({

        ...item,

        isOpen: i === index ? !item.isOpen : false,

      }))

    );

  };


  const settings = {

    dots: false,

    infinite: true,

    speed: 500,

    slidesToShow: 2,

    slidesToScroll: 1,

    arrows: false,

    autoplay: true,

    autoplaySpeed: 3000,

  };

  const isSmallScreen = window.innerWidth <= 768;



  if (isSmallScreen) {

    settings.slidesToShow = 1;

  }



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



    };

  }, []);

  useEffect(() => {

    const script = document.createElement("script");

    script.type = "text/javascript";

    script.src =

      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";

    script.async = true;

    script.innerHTML = JSON.stringify({

      width: "1320",

      height: "560",

      defaultColumn: "overview",

      defaultScreen: "general",

      market: "forex",

      showToolbar: true,

      colorTheme: "light",

      locale: "in",

    });

    document

      .getElementById("tradingview-screener-widget-container")

      .appendChild(script);



    return () => {

  

    };

  }, []);



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

            <span className="blue-text">Track all markets on TradingView</span>

          </a>

        </div>

      </div>


      {/* Banner-part */}

      <div className="relative">

        <div className="relative">

          <img

            src={currentSlide.image}

            alt={`Slide ${currentIndex + 1}`}

            className="w-full h-auto"

          />

          <div className="absolute top-1/2 transform -translate-y-1/2 left-8 md:left-12 lg:left-20">

            <h1 className="text-lg md:text-5xl font-bold text-black">

              {currentSlide.content1}

            </h1>

            <h1 className="text-lg md:text-5xl font-bold text-[#0066b2] mt-0 md:mt-5">

              {currentSlide.content2}

            </h1>

            <p className="text-[#64666C] text-md md:text-xl font-semibold mt-0 md:mt-8">

              {currentSlide.paragraph1}

            </p>

            <p className="text-[#64666C] text-md  md:text-xl font-semibold">

              {currentSlide.paragraph2}

            </p>

            <Link to="/contact">

              <button className="bg-[#2774AE] hidden md:block mt-5 px-5 py-3 text-white text-lg font-semibold rounded-lg">

                {currentSlide.button}

              </button>

            </Link>

          </div>

        </div>

        <FontAwesomeIcon

          icon={faChevronLeft}

          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer"

          onClick={prevSlide}

        />

        <FontAwesomeIcon

          icon={faChevronRight}

          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer"

          onClick={nextSlide}

        />

      </div>


      {/* Services-part */}

      <div className="mt-12 md:mt-20">

        <h1 className="text-2xl md:text-4xl font-bold text-center text-[#034694]">

          Our Services

        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mx-10 md:mx-20 lg:mx-32 mt-10 md:mt-20">

        <div className="border-2 p-10 rounded-lg group hover:shadow-2xl cursor-pointer">

          <div className="">

            <FontAwesomeIcon

              icon={faCoins}

              className="h-14 w-14 text-[#059DC0]"

            />

          </div>

          <h1 className="text-2xl font-bold mt-4 group-hover:text-[#059DC0]">

            Equity Trading

          </h1>

          <p className="text-[#64666C] mt-4">

            Experience the excitement and potential of the Equity market with

            our expert trading services.

          </p>
        </div>
        <div className="border-2 p-10 rounded-lg  group hover:shadow-2xl cursor-pointer">

          <div className="">

            <FontAwesomeIcon

              icon={faHandshake}

              className="h-14 w-14 text-[#059DC0]"

            />

          </div>

          <h1 className="text-2xl font-bold mt-4 group-hover:text-[#059DC0]">

            Portfolio Management

          </h1>

          <p className="text-[#64666C] mt-4">

            We analyze market trends, manage risks, and optimize your portfolio

            to maximize returns and achieve your financial goals.

          </p>

        </div>

        <div className="border-2 p-10 rounded-lg group hover:shadow-2xl cursor-pointer">

          <div className="">

            <FontAwesomeIcon

              icon={faHeadset}

              className="h-14 w-14 text-[#059DC0]"

            />

          </div>

          <h1 className="text-2xl font-bold mt-4 group-hover:text-[#059DC0]">

            Investment Advice

          </h1>

          <p className="text-[#64666C] mt-4">

            Our team of experienced advisors will guide you in making informed

            investment decisions, whether you're a beginner or an experienced

            trader.

          </p>

        </div>

        <div className="border-2 p-10 rounded-lg group hover:shadow-2xl cursor-pointer">

          <div className="">

            <FontAwesomeIcon

              icon={faUsersGear}

              className="h-14 w-14 text-[#059DC0]"

            />

          </div>

          <h1 className="text-2xl font-bold mt-4 group-hover:text-[#059DC0]">

            Risk Management

          </h1>

          <p className="text-[#64666C] mt-4">

            We employ industry-leading tools and techniques to protect your

            investments and minimize potential losses.

          </p>

        </div>

        <div className="border-2 p-10 rounded-lg group hover:shadow-2xl cursor-pointer">

          <div className="">

            <FontAwesomeIcon

              icon={faBook}

              className="h-14 w-14 text-[#059DC0]"

            />

          </div>

          <h1 className="text-2xl font-bold mt-4 group-hover:text-[#059DC0]">

            Research And Analysis

          </h1>

          <p className="text-[#64666C] mt-4">

            We provide timely reports, market updates, and data-driven insights

            to help you make informed trading decisions.

          </p>

        </div>

        <div className="border-2 p-10 rounded-lg group hover:shadow-2xl cursor-pointer">

          <div className="">

            <FontAwesomeIcon

              icon={faGraduationCap}

              className="h-14 w-14 text-[#059DC0]"

            />

          </div>

          <h1 className="text-2xl font-bold mt-4 group-hover:text-[#059DC0]">

            Education And Resources

          </h1>

          <p className="text-[#64666C] mt-4">

            Expand your knowledge and skills in Equity trading through our

            educational resources.

          </p>

        </div>

      </div>


      {/* About-part */}

      <div className="bg-[#F5F5F5]">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-14 md:mt-28">

          <div>

            <img src={HomeAbout}></img>

          </div>


          <div className="mx-6 md:mx-4 lg:mx-4 xl:mx-14 mb-5 md:mb-0 mt-5 md:mt-10 lg:mt-10 xl:mt-20">

            <h1 className="text-2xl md:text-2xl lg:text-2xl xl:text-4xl font-bold text-[#034694]">

              Introducing The Smartest Way To Get Rich

            </h1>

            <p className="text-[#64666C] text-md md:text-lg lg:text-lg xl-text-xl font-medium mt-5 md:mt-10">

              <strong>Grow-Capitals </strong>Technology Solutions has come up

              with fully automatic Robo Trading to make your trading strategies

              smarter. You’ve come to the right place for Option Call, Commodity

              Trading, Nifty Future, and other trading products.

            </p>

            <Link to="/contact">

              <button className="bg-[#2774AE] mt-5 md:mt-10 px-8 py-3 text-white text-lg font-semibold rounded-lg">

                More Details

              </button>

            </Link>

          </div>

        </div>

      </div>


      {/* Market-part */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14 mx-10 md:mx-20 lg:mx-32 mt-12 md:mt-28">

        <div>

          <h1 className="text-2xl md:text-4xl font-bold text-[#034694]">

            Market Desk

          </h1>

          <p className="text-[#64666C] text-md  md:text-xl font-medium mt-5 md:mt-8">

            With the market desk, you can track any symbol of your choice and

            know the top performers category wise. You can identify the stocks

            based on various scanners and create customized alerts for any stock

            of your choice.

          </p>

        </div>



        <div>

          <img src={HomeMarket} className="Home-market-images"></img>

        </div>

      </div>



      {/* FAQ's-part */}

      <div className="bg-[#F5F5F5]">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-14 md:mt-28">

          <div>

            <img src={FaqImage} alt="FAQ" />

          </div>



          <div className="mx-6 md:mx-4 lg:mx-4 xl:mx-14 mb-5 md:mb-0 mt-5 md:mt-10 lg:mt-10 xl:mt-20">

            <h1 className="text-2xl md:text-2xl lg:text-2xl xl:text-4xl  font-bold text-[#034694]">

              Frequently Asked Questions

            </h1>

            {accordionItems.map((item, index) => (

              <div

                key={index}

                className={`faq-item border-2 p-4 mt-10 hover:shadow-xl cursor-pointer rounded-lg ${item.isOpen ? "shadow-xl" : ""

                  }`}

              >

                <div

                  className="flex items-center justify-between cursor-pointer"

                  onClick={() => toggleAccordion(index)}

                >

                  <h2 className="text-xl font-bold">{item.title}</h2>

                  <FontAwesomeIcon

                    icon={item.isOpen ? faMinus : faPlus}

                    className="text-gray-600"

                  />

                </div>

                {item.isOpen && (

                  <p className="mt-4 text-[#64666C]">{item.content}</p>

                )}

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* FAQ's-part-end */}

    
      <div className="bg-blue-500 ">

        <div

          className="grid grid-cols-1 md:grid-cols-2 lg:grid-colr-2 gap-10 max-10 md:max-20 lg:mx-32  "

        >

          <div className="bg-white rounded-lg shadow-md p-4 w-100 mt-20 ">

            <h2 className="text-xl font-semibold">{stockData.name}</h2>

            <p className="text-gray-600">{stockData.description}</p>

            <div className="mt-4">

              <p className="text-2xl font-semibold">{stockData.price}</p>

              <p

                className={

                  stockData.return1M < 0 ? "text-red-500" : "text-green-500"

                }

              >

                1M Return: {stockData.return1M}%

              </p>

              <p className="text-gray-600">1Y Return: {stockData.return1Y}%</p>

            </div>

            <div className="mt-4">

              <p>P/E Ratio: {stockData.pe}</p>

              <p>Market Cap: {stockData.marketCap} Cr</p>

              <p>Beta: {stockData.beta}</p>

              <p>Div. Yield: {stockData.dividendYield}</p>

            </div>

            <div className="mt-4 flex justify-end">

              <button className="bg-green-500 hover:bg-green-600 text-white py-2  px-4 rounded">
                Buy
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 ml-5 rounded">

                Sell

              </button>

            </div>

          </div>



          <div className="bg-white rounded-lg shadow-md p-4 w-100 mt-20">

            <h2 className="text-xl font-semibold">{stockData.name}</h2>

            <p className="text-gray-600">{stockData.description}</p>

            <div className="mt-4">

              <p className="text-2xl font-semibold">{stockData.price}</p>

              <p

                className={

                  stockData.return1M < 0 ? "text-red-500" : "text-green-500"

                }

              >

                1M Return: {stockData.return1M}%

              </p>

              <p className="text-gray-600">1Y Return: {stockData.return1Y}%</p>

            </div>

            <div className="mt-4">

              <p>P/E Ratio: {stockData.pe}</p>

              <p>Market Cap: {stockData.marketCap} Cr</p>

              <p>Beta: {stockData.beta}</p>

              <p>Div. Yield: {stockData.dividendYield}</p>

            </div>

            <div className="mt-4 flex justify-end">

              <button className="bg-green-500 hover:bg-green-600 text-white py-2  px-4 rounded">

                Buy

              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 ml-5 rounded">

                Sell

              </button>

            </div>

          </div>
          <div className="bg-white rounded-lg shadow-md p-4 w-100 mb-10">

            <h2 className="text-xl font-semibold">{stockData.name}</h2>

            <p className="text-gray-600">{stockData.description}</p>

            <div className="mt-4">

              <p className="text-2xl font-semibold">{stockData.price}</p>

              <p

                className={

                  stockData.return1M < 0 ? "text-red-500" : "text-green-500"

                }

              >

                1M Return: {stockData.return1M}%

              </p>

              <p className="text-gray-600">1Y Return: {stockData.return1Y}%</p>

            </div>

            <div className="mt-4">

              <p>P/E Ratio: {stockData.pe}</p>

              <p>Market Cap: {stockData.marketCap} Cr</p>

              <p>Beta: {stockData.beta}</p>

              <p>Div. Yield: {stockData.dividendYield}</p>

            </div>

            <div className="mt-4 flex justify-end">

              <button className="bg-green-500 hover:bg-green-600 text-white py-2  px-4 rounded">

                Buy
              </button>

              <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 ml-5 rounded">

                Sell

              </button>

            </div>

          </div>

          <div className="bg-white rounded-lg shadow-md p-4 w-100 mb-10">

            <h2 className="text-xl font-semibold">{stockData.name}</h2>

            <p className="text-gray-600">{stockData.description}</p>

            <div className="mt-4">

              <p className="text-2xl font-semibold">{stockData.price}</p>

              <p

                className={

                  stockData.return1M < 0 ? "text-red-500" : "text-green-500"

                }

              >

                1M Return: {stockData.return1M}%

              </p>

              <p className="text-gray-600">1Y Return: {stockData.return1Y}%</p>

            </div>

            <div className="mt-4">

              <p>P/E Ratio: {stockData.pe}</p>

              <p>Market Cap: {stockData.marketCap} Cr</p>

              <p>Beta: {stockData.beta}</p>

              <p>Div. Yield: {stockData.dividendYield}</p>

            </div>

            <div className="mt-4 flex justify-end">

              <button className="bg-green-500 hover:bg-green-600 text-white py-2  px-4 rounded">

                Buy

              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 ml-5 rounded">

                Sell

              </button>

            </div>

          </div>

        </div>

      </div>



      {/* Portfolio-part */}

      <div className="mt-12 md:mt-20">

        <h1 className="text-2xl md:text-4xl font-bold text-center text-[#034694]">

          Find Out Where You Need to Start

        </h1>

        <h1 className="text-lg md:text-xl text-center text-[#64666C] mt-4">

          Everything you need to build your portfolio

        </h1>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mx-10 md:mx-20 lg:mx-32 mt-10 md:mt-20">

        <div className="border-2 p-10 rounded-lg  cursor-pointer home-portfolio-cards">

          <div className="">

            <FontAwesomeIcon

              icon={faHouse}

              className="h-14 w-14 home-portfolio-icons"

            />

          </div>

          <h1 className="text-2xl font-bold mt-4 home-portfolio-heading">

            Budgeting

          </h1>

          <p className="mt-4 home-portfolio-paragraph">

            Budgeting is the process of creating a plan to spend your money.

            This spending plan is called a budge.

          </p>

        </div>



        <div className="border-2 p-10 rounded-lg cursor-pointer home-portfolio-cards">

          <div className="">

            <FontAwesomeIcon

              icon={faPiggyBank}

              className="h-14 w-14 text-[#059DC0] home-portfolio-icons"

            />

          </div>

          <h1 className="text-2xl font-bold mt-4 home-portfolio-heading">

            Saving

          </h1>

          <p className="text-[#64666C] mt-4 home-portfolio-paragraph">

            Saving is income not spent, or deferred consumption. Methods of

            saving include putting money aside in.

          </p>

        </div>
        <div className="border-2 p-10 rounded-lg cursor-pointer home-portfolio-cards">

          <div className="">

            <FontAwesomeIcon

              icon={faPercent}

              className="h-14 w-14 text-[#059DC0] home-portfolio-icons"

            />

          </div>

          <h1 className="text-2xl font-bold mt-4 home-portfolio-heading">

            Investment Advice

          </h1>

          <p className="text-[#64666C] mt-4 home-portfolio-paragraph">

            Our team of experienced advisors will guide you in making informed

            investment decisions, whether you're a beginner or an experienced

            trader.

          </p>

        </div>
        <div className="border-2 p-10 rounded-lg  cursor-pointer home-portfolio-cards">

          <div className="">

            <FontAwesomeIcon

              icon={faCoins}

              className="h-14 w-14 text-[#059DC0] home-portfolio-icons"

            />

          </div>

          <h1 className="text-2xl font-bold mt-4 home-portfolio-heading">

            Insurance

          </h1>

          <p className="text-[#64666C] mt-4 home-portfolio-paragraph">

            Insurance is a means of protection from financial loss in which, in

            exchange for a fee.

          </p>

        </div>
        <div className="border-2 p-10 rounded-lg  cursor-pointer home-portfolio-cards">

          <div className="">

            <FontAwesomeIcon

              icon={faChartLine}

              className="h-14 w-14 text-[#059DC0] home-portfolio-icons"

            />

          </div>

          <h1 className="text-2xl font-bold mt-4 home-portfolio-heading">

            Trading

          </h1>

          <p className="text-[#64666C] mt-4 home-portfolio-paragraph">

            Behind the scenes a powerful trading engine built on distributed

            architecture is connecting.

          </p>

        </div>
        <div className="border-2 p-10 rounded-lg  cursor-pointer home-portfolio-cards">

          <div className="">

            <FontAwesomeIcon

              icon={faMoneyBill}

              className="h-14 w-14 text-[#059DC0] home-portfolio-icons"

            />

          </div>

          <h1 className="text-2xl font-bold mt-4 home-portfolio-heading">

            Strategy

          </h1>

          <p className="text-[#64666C] mt-4 home-portfolio-paragraph">

            Looking for a vol skew? A simple buy and hold? complex market

            making, maybe.

          </p>

        </div>

      </div>
      {/* Trading-part*/}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14 mx-10 md:mx-20 lg:mx-32 mt-12 md:mt-28">

        <div>

          <h1 className="text-2xl md:text-4xl font-bold text-[#034694]">

            Powerful Trading Platforms

          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">

            <div>

              <h1 className="text-2xl font-bold">Feature One</h1>

              <p className="mt-2 text-[#64666C]">

                Ever wondered why aren't you winning at wealth creation? What

                does it take to be a winner? Challenge your potential and let us

                help you win this game. Smart investing at your finger tips.

              </p>

            </div>
            <div>

              <h1 className="text-2xl font-bold">Feature Two</h1>

              <p className="mt-2 text-[#64666C]">

                Real-time stock quotes: This service provides users with

                real-time information on the prices of stocks traded on various

                stock exchanges around the world.

              </p>

            </div>
            <div>

              <h1 className="text-2xl font-bold">Feature Three</h1>

              <p className="mt-2 text-[#64666C]">

                Market news and analysis: Websites often provide a range of news

                and analysis on the stock market, including commentary on market

                trends, individual company news, and economic indicators.

              </p>

            </div>
            <div>

              <h1 className="text-2xl font-bold">Feature Four</h1>

              <p className="mt-2 text-[#64666C]">

                Stock market data and analytics: Websites may offer access to

                detailed financial data and analytics on individual stocks, such

                as earnings reports, financial statements, and historical price

                data.

              </p>

            </div>

          </div>

        </div>
        <div>

          <img src={TradingImage}></img>

        </div>

      </div>



      {/* Stock-market-Part */}

     
      <div className="">

        <div className="flex items-center justify-center h-screen">

          <div

            id="tradingview-screener-widget-container"

            className="tradingview-widget-container overflow-x-auto w-screen md:w-3/4 lg:w-2/3 xl:w-1/2"

          >

            <div className="tradingview-widget-container__widget"></div>

            <div className="tradingview-widget-copyright">

              <a

                href="https://in.tradingview.com/"

                rel="noopener noreferrer"

                target="_blank"

              >

                <span className="blue-text">

                  Track all markets on TradingView

                </span>

              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Testomonial-part */}

      <div className="mt-12 md:mt-20">

        <h1 className="text-2xl md:text-4xl font-bold text-center text-[#034694]">

          What People Are Saying

        </h1>

      </div>



      <div className="mt-12 md:mt-14 mx-10 md:mx-20 lg:mx-40">

        <Slider {...settings}>

          <div className="p-4">

            <div className="rounded-lg border-2 p-8">

              <p className="text-[#64666C]">

                Your strategy is directly available for all new compatible

                brokers, integrated after your strategy is deployed.

              </p>

              <h1 className="text-[#059DC0] text-xl font-bold mt-4">

                Deepak Chouhan

              </h1>

              <h1 className="text-md font-semi-bold mt-2">Customer</h1>

              <FontAwesomeIcon

                icon={faStar}

                className="h-4 w-4 text-yellow-600 mt-4"

              />

              <FontAwesomeIcon

                icon={faStar}

                className="h-4 w-4 text-yellow-600 mt-4"

              />

              <FontAwesomeIcon

                icon={faStar}

                className="h-4 w-4 text-yellow-600 mt-4"

              />

              <FontAwesomeIcon

                icon={faStar}

                className="h-4 w-4 text-yellow-600 mt-4"

              />

              <FontAwesomeIcon

                icon={faStar}

                className="h-4 w-4 text-yellow-600 mt-4"

              />

            </div>

          </div>



          <div className="p-4">

            <div className="rounded-lg border-2 p-8">

              <p className="text-[#64666C]">

                Where you can test out your trading in this platform via

                real-time Paper Trading before diving into Live Trading with

                your money.

              </p>

              <h1 className="text-[#059DC0] text-xl font-bold mt-4">

                Kavita Shamra

              </h1>

              <h1 className="text-md font-semi-bold mt-2">Customer</h1>

              <FontAwesomeIcon

                icon={faStar}

                className="h-4 w-4 text-yellow-600 mt-4"

              />

              <FontAwesomeIcon

                icon={faStar}

                className="h-4 w-4 text-yellow-600 mt-4"

              />

              <FontAwesomeIcon

                icon={faStar}

                className="h-4 w-4 text-yellow-600 mt-4"

              />

              <FontAwesomeIcon

                icon={faStar}

                className="h-4 w-4 text-yellow-600 mt-4"

              />

              <FontAwesomeIcon

                icon={faStar}

                className="h-4 w-4 text-yellow-600 mt-4"

              />

            </div>

          </div>



          <div className="p-4">

            <div className="rounded-lg border-2 p-8">

              <p className="text-[#64666C]">

                Get access to historical backtesting data with the live data,

                before entering the real market with real money.

              </p>

              <h1 className="text-[#059DC0] text-xl font-bold mt-4">

                Aman Gupta

              </h1>

              <h1 className="text-md font-semi-bold mt-2">Broker</h1>

              <FontAwesomeIcon

                icon={faStar}

                className="h-4 w-4 text-yellow-600 mt-4"

              />

              <FontAwesomeIcon

                icon={faStar}

                className="h-4 w-4 text-yellow-600 mt-4"

              />

              <FontAwesomeIcon

                icon={faStar}

                className="h-4 w-4 text-yellow-600 mt-4"

              />

              <FontAwesomeIcon

                icon={faStar}

                className="h-4 w-4 text-yellow-600 mt-4"

              />

              <FontAwesomeIcon

                icon={faStar}

                className="h-4 w-4 text-yellow-600 mt-4"

              />

            </div>

          </div>



          <div className="p-4">

            <div className="rounded-lg border-2 p-8">

              <p className="text-[#64666C]">

                Tinker with more than 25 trading parameters to create millions

                of combinations, building effective & cogent trading algorithms.

              </p>

              <h1 className="text-[#059DC0] text-xl font-bold mt-4">Subhas</h1>

              <h1 className="text-md font-semi-bold mt-2">User</h1>

              <FontAwesomeIcon

                icon={faStar}

                className="h-4 w-4 text-yellow-600 mt-4"

              />

              <FontAwesomeIcon

                icon={faStar}

                className="h-4 w-4 text-yellow-600 mt-4"

              />

              <FontAwesomeIcon

                icon={faStar}

                className="h-4 w-4 text-yellow-600 mt-4"

              />

              <FontAwesomeIcon

                icon={faStar}

                className="h-4 w-4 text-yellow-600 mt-4"

              />

              <FontAwesomeIcon

                icon={faStar}

                className="h-4 w-4 text-yellow-600 mt-4"

              />

            </div>

          </div>

        </Slider>

      </div>

    </>

  );

};



export default Home;