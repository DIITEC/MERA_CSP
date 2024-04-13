import React from "react";
import Navtop from "../Components/Navtop";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import eGovernance from "../Images/e-governance.png";
import panCard from "../Images/pan-cardLogo.png";
import incomeTax from "../Images/incomeTax.png";
import eStamping from "../Images/e-stampping.png";
import nicUp from "../Images/e-district.png";
import moSeba from "../Images/moSebakendra.png";
import Umang from "../Images/Umang.png";
import "../Components/ServiceBox.css";
import { Link } from "react-router-dom";
const Services_Egov = () => {
  return (
    <div>
      <Navtop />
      <Navbar />

      <div className="servicesMainBox">
        <div className="cardServiceSec1">
          <div className="contents1">
            <span>E-Governance</span>
            <p>
              No working capital required. MeraCSP offer uninterrupted banking
              services like cash withdrawal, money transfer, cash deposits,
              savings, insurance and loan from your shop.
            </p>
          </div>
          <div className="imgsec1">
            <img src={eGovernance} alt="" />
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
                  <span>Pan Card</span>
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
                  <img src={panCard} alt="" />
                </div>
              </div>
              <div className="srvsbox">
                <div className="srvsSec1det">
                  <span>Income Tax Filling</span>
                  <span>
                    Access cash withdrawal services using debit/Credit cards
                    over 100+ banks.
                  </span>
                  <Link to="/microAtm-page">Learn More</Link>
                </div>
                <div className="srvsSec2det">
                  <img src={incomeTax} alt="" />
                </div>
              </div>
              <div className="srvsbox">
                <div className="srvsSec1det">
                  <span>E-Stamping </span>
                  <span>
                    Savings Current account opening services are now available
                    4+ Banks on MeraCSP portal. Digital Mitr/VLE can help avail
                    there customer to open there account attractive commission
                    on there account opening.
                  </span>
                  <Link>Learn More</Link>
                </div>
                <div className="srvsSec2det">
                  <img src={eStamping} alt="" />
                </div>
              </div>
              <div className="srvsbox">
                <div className="srvsSec1det">
                  <span>E-Governance</span>
                  <span>
                    MeraCSP enabling partner merchants to provide banking
                    services to their customers in their local communities.
                    Customers will visit the merchant outlet to avail of AePS
                    cash deposit services.
                  </span>
                  <Link>Learn More</Link>
                </div>
                <div className="srvsSec2det">
                  <img src={eGovernance} alt="" />
                </div>
              </div>
              <div className="srvsbox">
                <div className="srvsSec1det">
                  <span>MO-Seba Kendra </span>
                  <span>
                    MeraCSP enabling partner merchants to provide banking
                    services to their customers in their local communities.
                    Customers will visit the merchant outlet to avail of AePS
                    cash deposit services.
                  </span>
                  <Link>Learn More</Link>
                </div>
                <div className="srvsSec2det">
                  <img src={moSeba} alt="" />
                </div>
              </div>
              <div className="srvsbox">
                <div className="srvsSec1det">
                  <span>Umang </span>
                  <span>
                    MeraCSP enabling partner merchants to provide banking
                    services to their customers in their local communities.
                    Customers will visit the merchant outlet to avail of AePS
                    cash deposit services.
                  </span>
                  <Link>Learn More</Link>
                </div>
                <div className="srvsSec2det">
                  <img src={Umang} alt="" />
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

export default Services_Egov;
