import React from "react";
import Navtop from "../Components/Navtop";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import travel from "../Images/travel.png";
import Irctc from "../Images/irctcImage.png";
import Bus from "../Images/busImg.png";
import airline from "../Images/airline.png";

import "../Components/ServiceBox.css";
import { Link } from "react-router-dom";

const ServicesTour = () => {
  return (
    <div>
      <Navtop />
      <Navbar />

      <div className="servicesMainBox">
        <div className="cardServiceSec1">
          <div className="contents1">
            <span>Tours & Travels</span>
            <p>
              No working capital required. MeraCSP offer uninterrupted banking
              services like cash withdrawal, money transfer, cash deposits,
              savings, insurance and loan from your shop.
            </p>
          </div>
          <div className="imgsec1">
            <img src={travel} alt="" />
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
                  <span>IRCTC Agent</span>
                  <span>
                    Looking to dive into a profitable industry? Ready to unlock
                    substantial commission potential? Join the IRCTC agent
                    family and seize an unparalleled opportunity.
                  </span>
                  <Link to="/irctc-page">Learn More</Link>
                </div>
                <div className="srvsSec2det">
                  <img src={Irctc} alt="" />
                </div>
              </div>
              <div className="srvsbox">
                <div className="srvsSec1det">
                  <span>Bus</span>
                  <span>
                    Interested in stepping into a lucrative industry? Looking to
                    earn high commissions? Explore the excellent opportunity to
                    join the IRCTC agent family.
                  </span>
                  <Link to="/bus-page">Learn More</Link>
                </div>
                <div className="srvsSec2det">
                  <img src={Bus} alt="" />
                </div>
              </div>
              <div className="srvsbox">
                <div className="srvsSec1det">
                  <span>Airline </span>
                  <span>
                    Our Airline Ticket Booking service provides comprehensive
                    solutions for both domestic and international flights,
                    catering to a variety of travel needs.g.
                  </span>
                  <Link to="/plane-page">Learn More</Link>
                </div>
                <div className="srvsSec2det">
                  <img src={airline} alt="" />
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

export default ServicesTour;
