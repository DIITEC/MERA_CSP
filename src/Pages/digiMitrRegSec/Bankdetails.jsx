import React, { useState } from "react";
import { Link } from "react-router-dom";

const Bankdetails = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    bank_name: "",
    IFSC_code: "",
    account_number: "",
    account_type: "Saving",
    branch_name: "",
    bank_passbook: null,
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
            name="bank_name"
            placeholder="Bank Name"
            value={formData.bank_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="IFSC_code"
            placeholder="IFSC Code of Bank"
            value={formData.IFSC_code}
            onChange={handleChange}
          />
        </div>

        <div className="vdf1">
          <input
            type="text"
            name="account_number"
            placeholder="Bank Account Number"
            value={formData.account_number}
            onChange={handleChange}
          />
          <select
            style={{
              width: "300px",
              height: "39px",
              color: "#635f5f",
              padding: "3px 12px",
            }}
            name="account_type"
            value={formData.account_type}
            onChange={handleChange}
          >
            <option value="Saving">Saving</option>
            <option value="Current">Current</option>
          </select>
        </div>
        <div className="vdf1">
          <input
            type="text"
            name="branch_name"
            placeholder="Branch Name"
            value={formData.branch_name}
            onChange={handleChange}
          />
          <label htmlFor="">
            Cancel Check/Passbook{" "}
            <input
              style={{ width: "99px" }}
              type="file"
              name="bank_passbook"
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

export default Bankdetails;
