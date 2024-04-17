import React from "react";
import Navtop from "../Components/Navtop";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import insurance from "../Images/insurance.png";
import insurrance from "../Images/general-InsImage.png";
import healthIns from "../Images/Health-Ins.webp";
import accountOpening from "../Images/banking-Commercial.webp";
import cashDeposit from "../Images/cashDeposit.png";
import "../Components/ServiceBox.css";
import { Link } from "react-router-dom";

const ServicesInsurance = () => {
  return (
    <div>
      <Navtop />
      <Navbar />

      <div className="servicesMainBox">
        <div className="cardServiceSec1">
          <div className="contents1">
            <span>Insurance</span>
            <p>
              No working capital required. MeraCSP offer uninterrupted banking
              services like cash withdrawal, money transfer, cash deposits,
              savings, insurance and loan from your shop.
            </p>
          </div>
          <div className="imgsec1">
            <img src={insurrance} alt="" />
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
              <div className="srvsbox">
                <div className="srvsSec1det">
                  <span>General Insurance</span>
                  <span>
                    General Insurance comprises insurance contracts beyond Life
                    Insurance, offering a broad spectrum of coverage. This
                    encompasses policies such as fire, motor, accident, and
                    others.
                  </span>
                  <Link to="/generalInsurance-page">Learn More</Link>
                </div>
                <div className="srvsSec2det">
                  <img src={insurance} alt="" />
                </div>
              </div>
              <div className="srvsbox">
                <div className="srvsSec1det">
                  <span>Health Insurance</span>
                  <span>
                    customers can access quality healthcare without worrying
                    about the financial burden. It serves as a crucial safety
                    net, ensuring that individuals and families can receive
                    timely medical treatment without compromising their
                    financial stability.
                  </span>
                  <Link to="/healthInsurance-page">Learn More</Link>
                </div>
                <div className="srvsSec2det">
                  <img src={healthIns} alt="" />
                </div>
              </div>
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

export default ServicesInsurance;
