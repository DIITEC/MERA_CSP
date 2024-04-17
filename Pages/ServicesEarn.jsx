import React from "react";
import Navtop from "../Components/Navtop";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import banksrvs from "../Images/Banksrvs.jpg";
import digBajar from "../Images/cropped-digitalbazar.png";

import "../Components/ServiceBox.css";
import { Link } from "react-router-dom";

const ServicesEarn = () => {
  return (
    <div>
      <Navtop />
      <Navbar />

      <div className="servicesMainBox">
        <div className="cardServiceSec1">
          <div className="contents1">
            <span>Earn More</span>
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
              <div className="srvsbox">
                <div className="srvsSec1det">
                  <span>Digital Bazar</span>
                  <span>
                    secure transactions, and doorstep delivery, the digital
                    bazaar brings the world of shopping right to your screen,
                    making it easier than ever to find what you're looking for,
                    whenever you need it.
                  </span>
                  <Link to="/digitalBazar-page">Learn More</Link>
                </div>
                <div className="srvsSec2det">
                  <img src={digBajar} alt="" />
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

export default ServicesEarn;
