import React from "react";
import { Link } from "react-router-dom";

const Personaldetails = () => {
  return (
    <form action="post" className="verification-digi">
      <div className="vdf1">
        <input type="text" placeholder="Enter your First name" />
        <input type="text" placeholder="Enter your middle name" />
        <input type="text" placeholder="Enter your last name" />
      </div>
      <div className="vdf1">
        <input type="text" placeholder="Enter your father's First name" />
        <input type="text" placeholder="Enter your father's middle name" />
        <input type="text" placeholder="Enter your father's last name" />
      </div>
      <div className="vdf1">
        <input type="text" placeholder="Enter your mother's First name" />
        <input type="text" placeholder="Enter your mother's middle name" />
        <input type="text" placeholder="Enter your mother's last name" />
      </div>
      <div className="vdf1">
        <select name="gender" id="">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <select name="Religion" id="">
          <option value="">Select Religion</option>
          <option value="Hinduism">Hinduism</option>
          <option value="Islam">Islam</option>
          <option value="Christian">Christian</option>
          <option value="Buddhist">Buddhist</option>
          <option value="Other">Other</option>
        </select>
        <select name="category" id="">
          <option value="">Select Category</option>
          <option value="Gen">Gen</option>
          <option value="OBC">OBC</option>
          <option value="SC">SC</option>
          <option value="ST">ST</option>
        </select>
        <label htmlFor="">
          {" "}
          Date of birth
          <input type="date" name="dob" id=" " placeholder="Date of Birth" />
        </label>
        <select name="area" id="">
          <option value="">Select area</option>
          <option value="Urban">Urban</option>
          <option value="Rural">Rural</option>
        </select>
      </div>
      <div className="vdf1 vdf1-personal">
        <label htmlFor="">
          Pan card <input type="file" name="" id="" />
        </label>
        <label htmlFor="">
          Aadhar card <input type="file" name="" id="" />
        </label>

        <label htmlFor="">
          10th/High school Certificate <input type="file" name="" id="" />
        </label>
        <label htmlFor="">
          Highest Educational Details <input type="file" name="" id="" />
        </label>
      </div>
      <div className="vdf1">
        <input type="text" name="" id="" placeholder="H.No" />
        <input type="text" name="" id="" placeholder="Mohalla/ Ward" />
        <input type="text" name="" id="" placeholder="Village/Town/Sector " />
      </div>
      <div className="vdf1">
        <input type="text" name="" id="" placeholder="Village/Town/Sector " />
        <input type="text" name="" id="" placeholder="Post/Thana" />
        <input type="text" name="" id="" placeholder="Tahsil" />
      </div>
      <div className="vdf1">
        <input type="text" name="" id="" placeholder="District " />
        <input type="text" name="" id="" placeholder="state " />
        <input type="text" name="" id="" placeholder="Pin code " />
      </div>
      <Link id="Digi-Box-1-1-btn">Next</Link>
    </form>
  );
};

export default Personaldetails;
