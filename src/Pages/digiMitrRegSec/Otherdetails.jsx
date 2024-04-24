import React from "react";
import { Link } from "react-router-dom";

const Otherdetails = () => {
  return (
    <div>
      {" "}
      <form action="post" className="verification-digi">
        <div className="vdf1">
          <label htmlFor="">
            VLE Photo <input type="file" style={{"width":"99px"}} name="" id="" />
          </label>
          <label htmlFor="">
            {" "}
            VLE Signature <input type="file" style={{"width":"99px"}} name="" id="" />
          </label>
        </div>
        <div className="vdf1">
          <label htmlFor="">
            Attachment 1 <input type="file" style={{"width":"99px"}} name="" id="" />
          </label>
          <label htmlFor="">
            {" "}
            Attachment 2 <input type="file" style={{"width":"99px"}} name="" id="" />
          </label>
        </div>
        <div className="vdf1">
          <label htmlFor="">
            Attachment 1 <input type="file" style={{"width":"99px"}} name="" id="" />
          </label>
          <label htmlFor="">
            {" "}
            Attachment 2 <input type="file" style={{"width":"99px"}} name="" id="" />
          </label>
        </div>
        <Link id="Digi-Box-1-1-btn">Next</Link>
      </form>
    </div>
  );
};

export default Otherdetails;
