import React, { useState } from "react";
import { Link } from "react-router-dom";

const Verificationform = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    certificate_number: "",
    email: "",
    phone_number: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit function from props and pass the form data
    onSubmit(formData);
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ width: "100%" }} className="verification-digi">
        <div className="vdf1">
          <input
            type="text"
            name="certificate_number"
            placeholder="DM-ETC Registration Number"
            value={formData.certificate_number}
            onChange={handleChange}
          />
          <span>Verify Now</span>
        </div>
        <div className="vdf1">
          <input
            type="email"
            name="email"
            placeholder="Enter registered email id"
            value={formData.email}
            onChange={handleChange}
          />
          <span>Verify Now</span>
        </div>
        <div className="vdf1">
          <input
            type="number"
            name="phone_number"
            placeholder="Enter registered phone_number Number"
            value={formData.phone_number}
            onChange={handleChange}
          />
          <span>Verify Now</span>
        </div>
        <button type="submit" id="Digi-Box-1-1-btn">Next</button>
      </form>
    </div>
  );
};

export default Verificationform;
