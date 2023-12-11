import React from "react";
import LogoImage from "./NavbarImages/logo-no-background.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FooterOne = () => {
  return (
    <>
      <div className="bg-[#2774AE] mt-5">
        <div class="p-5 md:p-10 flex flex-col sm:flex-row justify-between">
          <div class="text-white">
            <div className="">
              <img src={LogoImage} className="w-[104px] h-auto"></img>
            </div>
            <p className="mt-4">
              {" "}
              <b>Choice Algo</b> Technology Solutions{" "}
            </p>

            <p>has come up with fully automatic Robo Trading to make </p>

            <p> your trading strategies smarter. You’ve come to the </p>

            <p>right place for Option Call, Commodity Trading, </p>

            <p>Nifty Future, and other trading products.</p>
          </div>

          <div class="text-white mt-4 md:mt-0 ">
            <h1 className="font-bold text-2xl ">Contact Us</h1>
          
            <p className="mt-3">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="h-4 w-4 text-white pr-3"
              />
              <span className="text-white ">info@choice-algo.com</span>
            </p>

           
          </div>

          <div class=" text-white mt-4 md:mt-0">
            <h1 className="font-bold text-2xl">Service Links</h1>
            <p className="mt-4  ">
              <Link to="/"> <span className="hover:underline">Home </span></Link>
            </p>

            <p className="mt-2">
              <Link to="/about"><span className="hover:underline">About </span></Link>
            </p>

            <p className="mt-2">
              <Link to="/service"><span className="hover:underline">Service </span></Link>
            </p>

            <p className="mt-2">
              <Link to="/contact"><span className="hover:underline">Contact </span></Link>
            </p>
            <p className="mt-2">
              <Link to="/privacypolicy"><span className="hover:underline">Privacy Policy </span></Link>
            </p>
             <p className="mt-2">
              <Link to="/termcondation"><span className="hover:underline"> Team & Condation </span></Link>
            </p>
          </div>

          <div class=" text-white mt-4 md:mt-0">
            <h1 className="font-bold text-2xl">Useful Links</h1>
            <p className="mt-3 ">
              <a
                href="https://www.moneycontrol.com/stocksmarketsindia/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Markets
              </a>
            </p>

            <p className="mt-2">
              <a
                href="https://www.moneycontrol.com/news/business/stocks/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Stock
              </a>
            </p>

            <p className="mt-2">
              <a
                href="https://www.moneycontrol.com/ipo/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                IPO
              </a>
            </p>

            <p className="mt-2">
              <a
                href="https://www.moneycontrol.com/portfolio-management/portfolio-investment-signup.php"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Portfolio
              </a>
            </p>

            <p className="mt-2">
              <a
                href="   https://economictimes.indiatimes.com/bse-ltd/stocks/companyid-2809.cms"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
               BSE 
              </a>
            </p>
            <p className="mt-2">
              <a
                href=" https://www.nseindia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
              NSE 
              </a>
            </p>
          </div>
        </div>
        <div className="bg-black text-white p-2 text-lg ">
          <div className="site-footer-row-container-inner px-11">
            <div className="site-container">
              <div className="site-middle-footer-inner-wrap site-footer-row site-footer-row-columns-1 site-footer-row-column-layout-row site-footer-row-tablet-column-layout-default site-footer-row-mobile-column-layout-row ft-ro-dir-row ft-ro-collapse-normal ft-ro-t-dir-default ft-ro-m-dir-default ft-ro-lstyle-plain">
                <div className="site-footer-middle-section-1 site-footer-section footer-section-inner-items-1">
                  <div
                    className="footer-widget-area widget-area site-footer-focus-item footer-widget5 content-align-default content-tablet-align-default content-mobile-align-default content-valign-default content-tablet-valign-default content-mobile-valign-default"
                    data-section="sidebar-widgets-footer5"
                  >
                    <div className="footer-widget-area-inner site-info-inner">
                      <section id="block-12" className="widget widget_block">
                        <p></p>

                        <div className="ticker-news">
                          <marquee
                            behavior="scroll"
                            direction="left"
                            className="px-4"
                          >
                            {/* Add your marquee content here */}
                            Mutual funds are subject to market, or systematic,
                            risk. This is because there is no way to predict
                            what will happen in the future or whether a given
                            asset will increase or decrease in value. Because
                            the market cannot be accurately predicted or
                            completely controlled, no investment is risk-free.
                          </marquee>
                        </div>

                        <p></p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr class="my-2 md:my-5 w-100 mx-5 md:mx-20 " color="white"></hr>

        <div className="text-center">
          <h1 className="text-white text-lg">&copy; 2023 Choice Algo</h1>
        </div>
      </div>
    </>
  );
};

export default FooterOne;
