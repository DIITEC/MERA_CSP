import React from "react";
import { Link } from "react-router-dom";

const Businessdetails = () => {
  return (
    <div>
      <form action="post" className="verification-digi">
        <div className="vdf1">
          <input
            type="text"
            placeholder="Establishment/ Shop/ Firm/ Company/ SHG Name"
          />
          <input type="number" placeholder="Enter GST No. " />
        </div>
        <div className="vdf1">
          <input type="number" placeholder="Enter Business Pan Card No " />
          <input type="text" placeholder="Business Bank A/c No" />
        </div>
        <div className="vdf1">
          <input type="text" placeholder="Enter . Business Address " />
          <input type="email" placeholder="enter . Business Email ID" />
        </div>
        <div className="vdf1">
          <select
            style={{ width: "191px", height: "35px", color: "#6a6a6a" }}
            name=""
            id=""
          >
            <option value="" selected>
              Establishment Type
            </option>
            <option value="">Owned</option>
            <option value="">Rent</option>
            <option value="">Lease</option>
          </select>
          <label style={{ width: "min-content" }} htmlFor="">
            Rent/Lease Aggremment{" "}
            <input style={{ width: "109%" }} type="file" placeholder="" />
          </label>
        </div>
        <Link id="Digi-Box-1-1-btn">Next</Link>
      </form>
    </div>
  );
};

export default Businessdetails;
