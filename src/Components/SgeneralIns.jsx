import React from 'react'
import Navtop from "./Navtop";
import Navbar from "./Navbar";
import Footer from "./Footer";
import cashDeposit from "../Images/general-InsImage.png";
import { Link } from "react-router-dom";
const SgeneralIns = () => {
  return (
    <div>
    {" "}
    <Navtop />
    <Navbar />
    <div className="ServiceAccount-Mainbox">
      <div id="serviceAepsCArdSrvs" className="cardServiceSec1">
        <div className="contents1">
          <span>General Insurance</span>
          <p>
          General Insurance comprises insurance contracts beyond Life Insurance, offering a broad spectrum of coverage. This encompasses policies such as fire, motor, accident, and others.</p>
        </div>
        <div className="imgsec1">
          <img src={cashDeposit} alt="" />
        </div>
      </div>
      <div className="contentLmore1">
        <span>Benefits</span>
        <div className="lmore-part2">
          <img src={cashDeposit} alt="" />
          <ul>
            <li>
              It facilitates access to bank accounts through Aadhaar for all
              bank account holders .
            </li>
            <li>
              Just the Aadhaar number and biometric information is enough to
              carry out a transaction.
            </li>
            <li>It aids the disbursal of government schemes.</li>
            <li> Daily commission credit in wallet for retailers.</li>
            <li> Earn high commission on AePS withdrawal of customers.</li>
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
  )
}

export default SgeneralIns