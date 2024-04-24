import React from "react";
import { Link } from "react-router-dom";

const Verificationform = () => {
  return (
    <div>
      <form  style={{"width":"100%"}} action="post" className="verification-digi">
        <div className="vdf1">
          <input type="text" placeholder="DM-ETC Registration Number" />
          <span>Verify Now</span>
        </div>
        <div className="vdf1">
          <input type="email" placeholder="Enter registered email id" />
          <span>Verify Now</span>
        </div>
        <div className="vdf1">
          <input type="number" placeholder="Enter registered Mobile Number" />
          <span>Verify Now</span>
        </div>
        <Link id="Digi-Box-1-1-btn">Next</Link>
      </form>
    </div>
  );
};

export default Verificationform;
