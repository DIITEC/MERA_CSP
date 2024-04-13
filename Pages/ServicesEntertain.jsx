import React from "react";
import Navtop from "../Components/Navtop";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import banksrvs from "../Images/Banksrvs.jpg";
import Aepssrvsimg from "../Images/aepsadharsrvs.png";
import microAtm from "../Images/MicroATM1.png";
import accountOpening from "../Images/banking-Commercial.webp";
import cashDeposit from "../Images/cashDeposit.png";
import "../Components/ServiceBox.css";
import { Link } from "react-router-dom";

const ServicesEntertain = () => {
  return (
    <div>
      <Navtop />
      <Navbar />

      <div className="servicesMainBox">
        <div className="cardServiceSec1">
          <div className="contents1">
            <span>Entertainment</span>
            <p>
              No working capital required. MeraCSP offer uninterrupted banking
              services like cash withdrawal, money transfer, cash deposits,
              savings, insurance and loan from your shop.
            </p>
          </div>
          <div className="imgsec1">
            <img src={banksrvs} alt="" />
          </div>
        </div>
        <div className="ServiceDetails1">
          <div className="HeaderDetails">
            <span>Services </span>
            <span>
              Become the Standard for Trusted Banking Services in Your Area
            </span>
          </div>
          <div className="servicedetailSec1">
            <div className="srvsBoxMain">
            <marquee behavior="" direction="" style={{"backgroundcolor":"yellow", "color":"red",}}>Entertainment Services Coming Soon..............................................</marquee>
              {/* <div className="srvsbox">
                <div className="srvsSec1det">
                  <span>Aeps</span>
                  <span>
                    It's a payment service enabling bank customers to utilize
                    Aadhaar as their identity to access Aadhaar-enabled bank
                    accounts, facilitating basic banking transactions such as
                    balance inquiries and cash withdrawals through a Business
                    Correspondent.
                  </span>
                  <Link to="/aeps-page">Learn More</Link>
                </div>
                <div className="srvsSec2det">
                  <img src={Aepssrvsimg} alt="" />
                </div>
              </div> */}
           
            </div>
          </div>
        </div>
        <div className="servicebuttonSec">
          <Link to="/register">Become a Digital Mitr</Link>
          <Link>Income Calculator</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesEntertain;
