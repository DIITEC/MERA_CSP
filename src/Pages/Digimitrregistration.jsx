import React, { useState } from "react";
import "./Digimitrregistration.css";
import { Link } from "react-router-dom";
import mainLogo from "../Images/logo.png";
import Verificationform from "./digiMitrRegSec/Verificationform";
import Personaldetails from "./digiMitrRegSec/Personaldetails";
import Bankdetails from "./digiMitrRegSec/Bankdetails";
import Businessdetails from "./digiMitrRegSec/Businessdetails";
import Otherdetails from "./digiMitrRegSec/Otherdetails";

const Digimitrregistration = () => {
  const [val, setVal] = useState(0);
  const [formData, setFormData] = useState({
    mobile: "",
    email: "",
    registrationNumber: "",
  });
  return (
    <div className="Digimitrregistration">
      <div className="Digi-Head1">
        <img src={mainLogo} alt="" />
        <span>
          Already a member? <Link to='/Vle-Login'>Login</Link>
        </span>
      </div>
      <div className="Digi-Box1">
        <div className="Digi-Box1-1">
          <p>Let's get you started</p>
          <span>Enter the details to get going</span>
        </div>
        <div className="Digi-form-tabs">
          <li onClick={() => setVal(0)}>Verification</li>
          <div className="digLine"></div>
          <li onClick={() => setVal(1)}>Personal Details</li>
          <div className="digLine"></div>
          <li onClick={() => setVal(2)}>Banking Details</li>
          <div className="digLine"></div>
          <li onClick={() => setVal(3)}>Business Details</li>
          <div className="digLine"></div>
          <li onClick={() => setVal(4)}>Other Details</li>
        </div>
      </div>
      <div className="Digi-Box2">
        {val === 0 ? (
          <Verificationform />
        ) : val === 1 ? (
          <Personaldetails />
        ) : val === 2 ? (
          <Bankdetails />
        ) : val === 3 ? (
          <Businessdetails />
        ) : val === 4 ? (
          <Otherdetails />
        ) : null}
      </div>
    </div>
  );
};

export default Digimitrregistration;
