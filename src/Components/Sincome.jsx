import React from "react";
import "./ServiceAeps.css";
import Navtop from "./Navtop";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AepsImg from "../Images/aepsadharsrvs.png";
import { Link } from "react-router-dom";
const Sincome = () => {
  return (
    <div>
      <Navtop />
      <Navbar />
      <div className="serviceAeps-Mainbox">
        <div id="serviceAepsCArdSrvs" className=" cardServiceSec1">
          <div className="contents1">
            <span>Income Tax Filling</span>
            <p>
              It's a service enabling taxpayers to utilize their Aadhaar as
              their identity for Income Tax Filing, facilitating the submission
              of tax returns and other related transactions through authorized
              channels.
            </p>
          </div>
          <div className="imgsec1">
            <img src={AepsImg} alt="" />
          </div>
        </div>
        <div className="contentLmore1">
          <span>Benefits</span>
          <div className="lmore-part2">
            <img src={AepsImg} alt="" />
            <ul>
              <li>
              Simplifies the process of filing income tax returns for individuals.
              </li>
              <li>
              Securely links Aadhaar information for accurate and efficient tax filing.

              </li>
              <li>Enables quick verification and processing of tax returns.</li>
              <li> Access to government tax benefits and deductions.</li>
              <li>Receive timely updates and notifications regarding tax filing.</li>
            </ul>
          </div>
        </div>
        <div className="contentLmore2">
          <div className="lmorepart11">
            <span>Eligibility Criteria</span>
            <ul>
              <li>Should have a working laptop/desktop</li>
              <li>Own or rented shop to conduct business</li>
              <li>Fingerprint Scanner - Morpho/Mantra</li>
              <li>
                Minimum technical knowledge to conduct day-to-day operations
              </li>
            </ul>
          </div>
          <div className="lmorepart12">
            <span>Documents required for Onboarding</span>
            <ul>
              <li>Pan Card</li>
              <li>Aadhar Card / Voter ID card</li>
              <li>Driving Licence / Passport</li>
              <li>Passport sized photograph in neutral background</li>
              <li>
                cancelled cheque / Passbook first page of applicant's bank
                account / Bank Statement
              </li>
            </ul>
          </div>
        </div>
        <div className="contentLmore3">
          <div className="galLmoreBox">
            <span>Ready to Become an Digital-Mitr</span>
            {/* <span>Join our agency  force that already has xxxx+ agents on board</span> */}
            <Link to="/register">Join Now</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sincome;
