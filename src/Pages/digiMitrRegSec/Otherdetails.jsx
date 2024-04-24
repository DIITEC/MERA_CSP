import React, { useState } from "react";
import { Link } from "react-router-dom";

const Otherdetails = ({ onSubmit, setFinal }) => {
  const [formData, setFormData] = useState({
    Vle_Image: null,
    Vle_Signature: null,
    attach1: null,
    aadhar_card_document: null,
    pan_card_document: null,
    attach2: null,
    HighSchool_certificate: null,
    Highest_Qualification_Certificates: null,
  });

  const handleChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0].size > 100 * 1024) {
      alert("File size exceeds 100 KB limit.");
      e.target.value = null; // Clear the file input
    } else setFormData({ ...formData, [name]: files ? files[0] : null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFinal(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="post" className="verification-digi">
        <div className="otherDoc">
          <label htmlFor="">VLE Photo </label>
          <input
            type="file"
            
            name="Vle_Image"
            id=""
            onChange={handleChange}
            maxLength={100}
          />
        </div>
        <div className="otherDoc">
          <label htmlFor="">VLE Signature </label>
          <input
            type="file"
            
            name="Vle_Signature"
            id=""
            onChange={handleChange}
          />
        </div>

        <div className="otherDoc">
          <label htmlFor="">10th/High school Certificate</label>
          <input
            type="file"
            name="HighSchool_certificate"
            id=""
            onChange={handleChange}
          />
        </div>
        <div className="otherDoc">
          <label htmlFor="">Highest Educational Details</label>
          <input
            type="file"
            name="Highest_Qualification_Certificates"
            id=""
            onChange={handleChange}
          />
        </div>
        <div className="otherDoc">
          <label htmlFor="">Attachment 1 </label>
          <input
            type="file"
            
            name="attach1"
            id=""
            onChange={handleChange}
          />
        </div>
        <div className="otherDoc">
          <label htmlFor="">Attachment 2 </label>
          <input
            type="file"
            
            name="attach2"
            id=""
            onChange={handleChange}
          />
        </div>

        <button type="submit" id="Digi-Box-1-1-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Otherdetails;
