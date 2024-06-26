import React from "react";
import "./ServiceAeps.css";
import Navtop from "./Navtop";
import Navbar from "./Navbar";
import Footer from "./Footer";
import pan from "../Images/pan-cardLogo.png";
import { Link } from "react-router-dom";
const SpanCard = () => {
  return (
    <div>
      <Navtop />
      <Navbar />
      <div className="serviceAeps-Mainbox">
        <div id="serviceAepsCArdSrvs" className=" cardServiceSec1">
          <div className="contents1">
            <span>Pan Card</span>
            <p>
            It's a payment service enabling bank customers to utilize their PAN card as their identity to access bank accounts, facilitating basic banking transactions such as balance inquiries and cash withdrawals through a Business Correspondent.


            </p>
          </div>
          <div className="imgsec1">
            <img src={pan} alt="" />
          </div>
        </div>
        <div className="contentLmore1">
          <span>Benefits</span>
          <div className="lmore-part2">
            <img src={pan} alt="" />
            <ul>
              <li>
              It facilitates access to bank accounts through PAN card for all bank account holders.
              </li>
              <li>
Just the PAN card number and relevant information are enough to carry out a transaction.

              </li>
              <li>Required for opening bank accounts and financial transactions.</li>
              <li>Facilitates investment in stocks, mutual funds, and other financial instruments.</li>
              <li>Essential for conducting high-value transactions.</li>
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
              <li>Passport sized photograph  in neutral background</li>
              <li>cancelled cheque / Passbook first page  of applicant's bank account  / Bank Statement</li>
            </ul>
          </div>
        </div>
        <div className="contentLmore3">
          <div className="galLmoreBox">
          <span>Ready to Become an Digital-Mitr</span>
          {/* <span>Join our agency  force that already has xxxx+ agents on board</span> */}
          <Link to='/register'>Join Now</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SpanCard;
