import React from "react";
import { Link } from "react-router-dom";

const Bankdetails = () => {
  return (
    <div>
      {" "}
      <form action="post" className="verification-digi">
        <div className="vdf1">
          <input type="text" placeholder="Bank Name" />
          <input type="text" placeholder="IFSC Code of Bank" />
        </div>

        <div className="vdf1">
          <input type="text" placeholder="Bank Account Number" />
          <select style={{"width":"300px", "height":"39px","color":"#635f5f","padding":"3px 12px"}} name="" id="">
            <option value="" selected>
              Saving
            </option>
            <option value="">Current</option>
          </select>
        </div>
        <div className="vdf1">
          <input type="text" placeholder="Branch Name" />
          <label htmlFor="">Cancel Check/Passbook <input style={{"width":"99px"}} type="file" name="passbook" id="" size={300}/></label>
       </div>
        <Link id="Digi-Box-1-1-btn">Next</Link>
      </form>
    </div>
  );
};

export default Bankdetails;
