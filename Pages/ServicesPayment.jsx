import React from "react";
import Navtop from "../Components/Navtop";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import payment from "../Images/Payment-image.png";
import Bbps from "../Images/BBPS-image.webp";
import LIcimage from "../Images/Lic-image.png";
import dthrecharge from "../Images/DTH-recharge.png";
import gpimage from "../Images/GP-image.png";
import "../Components/ServiceBox.css";
import { Link } from "react-router-dom";

const ServicesPayment = () => {
  return (
    <div>
      <Navtop />
      <Navbar />

      <div className="servicesMainBox">
        <div className="cardServiceSec1">
          <div className="contents1">
            <span>Payment</span>
            <p>
              Maximize your revenue potential with our Bill Payment Services!
              Empower your business and increase profitability as a trusted
              service provider. Access a comprehensive range of bill payment
              options via our user-friendly platform. Drive traffic to your
              establishment and enhance customer satisfaction by offering
              seamless bill payment solutions. Spread the word to your clientele
              and seize this opportunity to elevate your business!
            </p>
          </div>
          <div className="imgsec1">
            <img src={payment } alt="" />
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
                  <span>BBPS</span>
                  <span>
                    Secure reliable monthly income by offering essential utility
                    bill payment services directly from your shop, catering to
                    the needs of every household.
                  </span>
                  <Link to="/aeps-page">Learn More</Link>
                </div>
                <div className="srvsSec2det">
                  <img src={Bbps} alt="" />
                </div>
              </div>
              <div className="srvsbox">
                <div className="srvsSec1det">
                  <span>LIC Premium Collection</span>
                  <span>
                    Facilitate easy payment solutions for customers to manage
                    their LIC premiums monthly, quarterly, semi-annually, or
                    annually, ensuring a reliable and recurring income stream
                    for your business.
                  </span>
                  <Link to="/microAtm-page">Learn More</Link>
                </div>
                <div className="srvsSec2det">
                  <img src={LIcimage} alt="" />
                </div>
              </div>
              <div className="srvsbox">
                <div className="srvsSec1det">
                  <span>Mobile/DTH Recharge </span>
                  <span>
                    Give customers the flexibility to recharge their mobile, DTH
                    services, and data cards seamlessly through our extensive
                    network of 15+ partners. Take advantage of the frequent need
                    for recharge transactions to establish a steady and
                    recurring income stream.
                  </span>
                  <Link>Learn More</Link>
                </div>
                <div className="srvsSec2det">
                  <img src={dthrecharge} alt="" />
                </div>
              </div>
              <div className="srvsbox">
                <div className="srvsSec1det">
                  <span>GP/Other Air-Fiber Bill Payment </span>
                  <span>
                    GP/Other Air-Fiber Bill Payment services provide a
                    hassle-free way to manage their internet expenses. Whether
                    it's paying monthly bills, topping up data packages, or
                    ensuring uninterrupted connectivity, these services offer
                    convenience and flexibility.
                  </span>
                  <Link>Learn More</Link>
                </div>
                <div className="srvsSec2det">
                  <img src={gpimage} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="servicebuttonSec">
          <Link to="/register">BSNL Fiber/-Fiber Costumer Bill Paymemt</Link>
          <Link>Income Calculator</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPayment;
