import React, {useState } from "react";
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
} from "@fortawesome/free-solid-svg-icons";
import HomeAbout from "../../Assests/HomePageImages/HomeAbout1.png";
import HomeMarket from "../../Assests/HomePageImages/HomeMark1.png";
import FaqImage from "../../Assests/HomePageImages/HomeFaqImage1.png";
import "./Home.css";


const faqData = [
  {
    title: "Add The Right Strategy?",
    content:
      "The freedom to choose from our rich pool of expert trading algorithms developed by professionals or build your own unique strategy, choose from our diverse range of products and sub-products as per your own needs and specifications.",
  },
  {
    title: "Get Started?",
    content:
      "On our all-inclusive tech-driven trading platform by signing up and logging in to your broking account.",
  },
  {
    title: "Factor In The Risk?",
    content:
      "Stay shielded from market volatility and turbulences by adding in your specific risk appetite into the trading algorithm equation and our systems will take care of the rest.",
  },
];

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



  return (
    <>
      {/* Banner-part */}
      <div className="relative">
        <div className="relative">
          <img
            src={currentSlide.image}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-auto"
          />
          <div className="absolute top-1/2 transform -translate-y-1/2 left-8 md:left-24">
            <h1 className="text-lg md:text-5xl font-bold text-black">
              {currentSlide.content1}
            </h1>
            <h1 className="text-lg md:text-5xl font-bold text-[#66D2D6] mt-0 md:mt-5">
              {currentSlide.content2}
            </h1>
            <p className="text-[#64666C] text-md md:text-xl font-semibold mt-0 md:mt-8">
              {currentSlide.paragraph1}
            </p>
            <p className="text-[#64666C] text-md  md:text-xl font-semibold">
              {currentSlide.paragraph2}
            </p>
            <button className="bg-[#059DC0] hidden md:block mt-5 px-5 py-3 text-white text-lg font-semibold rounded-lg">
              {currentSlide.button}
            </button>
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
      <div className="mt-20">
        <h1 className="text-4xl font-bold text-center text-[#66D2D6]">
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
          <h1 className="text-2xl font-bold mt-4 group-hover:text-[#66D2D6]">
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
          <h1 className="text-2xl font-bold mt-4 group-hover:text-[#66D2D6]">
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
          <h1 className="text-2xl font-bold mt-4 group-hover:text-[#66D2D6]">
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
          <h1 className="text-2xl font-bold mt-4 group-hover:text-[#66D2D6]">
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
          <h1 className="text-2xl font-bold mt-4 group-hover:text-[#66D2D6]">
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
          <h1 className="text-2xl font-bold mt-4 group-hover:text-[#66D2D6]">
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

          <div className="mx-14 mt-5 mb-5 md:mb-0 md:mt-20">
            <h1 className="text-2xl md:text-4xl font-bold text-[#66D2D6]">
              Introducing The Smartest Way To Get Rich
            </h1>
            <p className="text-[#64666C] text-md  md:text-xl font-medium mt-5 md:mt-10">
              <strong>Grow-Capitals </strong>Technology Solutions has come up
              with fully automatic Robo Trading to make your trading strategies
              smarter. You’ve come to the right place for Option Call, Commodity
              Trading, Nifty Future, and other trading products.
            </p>
            <button className="bg-[#059DC0] mt-5 md:mt-10 px-8 py-3 text-white text-lg font-semibold rounded-lg">
              More Details
            </button>
          </div>
        </div>
      </div>

      {/* Market-part */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14 mx-10 md:mx-20 lg:mx-32 mt-12 md:mt-28">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-[#66D2D6]">
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

          <div className=" mx-5 md:mx-14 mt-5 mb-5 md:mb-0 md:mt-20 ">
            <h1 className="text-2xl md:text-4xl font-bold text-[#66D2D6]">
              Frequently Asked Questions
            </h1>
              {accordionItems.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item border-2 p-4 mt-10 hover:shadow-xl cursor-pointer rounded-lg ${
                    item.isOpen ? "shadow-xl" : ""
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


      {/* Portfolio-part */}
      <div className="mt-20">
      <h1 className="text-4xl font-bold text-center text-[#66D2D6]">
      Find Out Where You Need to Start
      </h1>
      <h1 className="text-xl text-center text-[#64666C] mt-4">
        Everything you need to build your portfolio</h1>
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
           Saving is income not spent, or deferred consumption. Methods of saving
           include putting money aside in.
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
          Insurance is a means of protection from financial loss in which,
          in exchange for a fee.
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
          Behind the scenes a powerful trading engine built on distributed architecture 
          is connecting.
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
          Looking for a vol skew? A simple buy and hold? complex
           market making, maybe.
          </p>
        </div>
      </div>

    </>
  );
};

export default Home;
