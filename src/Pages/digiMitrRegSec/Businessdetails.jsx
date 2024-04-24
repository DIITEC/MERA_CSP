import React, { useState } from "react";
import { Link } from "react-router-dom";

const Businessdetails = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    shop_name: "",
    GST_document: "",
    Business_Pan_Card: "",
    Business_Account_details: "",
    Business_address: "",
    Business_Email_ID: "",
    Establishment_Type: "",
    Lease_Aggrement: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files[0].size > 100 * 1024) {
      alert("File size exceeds 100 KB limit.");
      e.target.value = null; // Clear the file input
    } else setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="post" className="verification-digi">
        <div className="vdf1">
          <input
            type="text"
            name="shop_name"
            placeholder="Establishment/ Shop/ Firm/ Company/ SHG Name"
            value={formData.shop_name}
            onChange={handleChange}
          />
          <input type="file" name="GST_document" onChange={handleChange} />
        </div>
        <div className="vdf1">
          <input
            type="number"
            name="Business_Pan_Card"
            placeholder="Enter Business Pan Card No"
            value={formData.Business_Pan_Card}
            onChange={handleChange}
          />
          <input
            type="text"
            name="Business_Account_details"
            placeholder="Business Bank A/c No"
            value={formData.Business_Account_details}
            onChange={handleChange}
          />
        </div>
        <div className="vdf1">
          <input
            type="text"
            name="Business_address"
            placeholder="Enter Business Address"
            value={formData.Business_address}
            onChange={handleChange}
          />
          <input
            type="email"
            name="Business_Email_ID"
            placeholder="Enter Business Email ID"
            value={formData.Business_Email_ID}
            onChange={handleChange}
          />
        </div>
        <div className="vdf1">
          <select
            style={{ width: "191px", height: "35px", color: "#6a6a6a" }}
            name="Establishment_Type"
            value={formData.Establishment_Type}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Establishment Type
            </option>
            <option value="Owned">Owned</option>
            <option value="Rent">Rent</option>
            <option value="Lease">Lease</option>
          </select>
          <label style={{ width: "296px" }} htmlFor="">
            Rent/Lease Agreement
            <input
              style={{ width: "109%" }}
              type="file"
              name="Lease_Aggrement"
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit" id="Digi-Box-1-1-btn">
          Next
        </button>
      </form>
    </div>
  );
};

export default Businessdetails;
