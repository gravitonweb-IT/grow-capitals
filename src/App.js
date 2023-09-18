import React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "../src/Common/NavigationBar";
import FooterOne from "../src/Common/FooterOne";
import Home from "../src/Modules/Main/Home";
import About from "../src/Modules/Main/About";
import Service from "../src/Modules/Main/Service";
import Contact from "../src/Modules/Main/Contact";

import Fund from "../src/Modules/Account/Fund";
import LogIn from "../src/Modules/Account/LogIn";
import Register from "../src/Modules/Account/Register";
import Portfolio from "../src/Modules/Account/Portfolio";
import Profile from "../src/Modules/Account/Profile";

import Withdraw from "../src/Modules/Admin/Withdraw";
import UserApproval from "../src/Modules/Admin/UserApproval";
import StockForm from "../src/Modules/Admin/StockForm";
import AddFund from "../src/Modules/Admin/AddFund";
import LoginAndRegister from "./Modules/Account/LoginAndRegister";

function App() {
  return (
    <>
      <div>
        <NavigationBar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/loginandregister" element={<LoginAndRegister />} />

          <Route path="/fund" element={<Fund />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/userapproval" element={<UserApproval />} />
          <Route path="/stockform" element={<StockForm />} />
          <Route path="/addfund" element={<AddFund />} />
        </Routes>

        <FooterOne />
      </div>
    </>
  );
}

export default App;
