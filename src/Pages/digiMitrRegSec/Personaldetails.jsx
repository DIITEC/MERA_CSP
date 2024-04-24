import React, { useState } from "react";
import { Link } from "react-router-dom";

const Personaldetails = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    fatherFirstName: "",
    fatherMiddleName: "",
    fatherLastName: "",
    motherFirstName: "",
    motherMiddleName: "",
    motherLastName: "",
    gender: "",
    religion: "",
    Category: "",
    date_of_birth: "",
    area: "",
    pan_card: "",
    aadhar_card: "",

    house_number: "",
    mohalla_ward_number: "",
    village_town_sector: "",
    post_thana: "",
    Tahsil: "",
    district: "",
    state: "",
    pin_code: "",
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files[0].size > 100 * 1024) {
      alert("File size exceeds 100 KB limit.");
      e.target.value = null; // Clear the file input
    } else {
      setFormData({ ...formData, [name]: files ? files[0] : value });
    }
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
            name="firstName"
            placeholder="Enter your First name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="middleName"
            placeholder="Enter your middle name"
            value={formData.middleName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="vdf1">
          <select
            name="gender"
            id=""
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <select
            name="religion"
            id=""
            value={formData.religion}
            onChange={handleChange}
          >
            <option value="">Select Religion</option>
            <option value="Hinduism">Hinduism</option>
            <option value="Islam">Islam</option>
            <option value="Christian">Christian</option>
            <option value="Buddhist">Buddhist</option>
            <option value="Other">Other</option>
          </select>
          <select
            name="Category"
            id=""
            value={formData.Category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="Gen">Gen</option>
            <option value="OBC">OBC</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
          </select>
        </div>
        <div className="vdf1">
          <label htmlFor="">
            Date of birth
            <input
              type="date"
              name="date_of_birth"
              id=" "
              placeholder="Date of Birth"
              value={formData.date_of_birth}
              onChange={handleChange}
            />
          </label>
          <select
            name="area"
            id=""
            value={formData.area}
            onChange={handleChange}
          >
            <option value="">Select area</option>
            <option value="Urban">Urban</option>
            <option value="Rural">Rural</option>
          </select>
          <input
            type="text"
            name="pan_card"
            id=""
            onChange={handleChange}
            value={formData.pan_card}
            placeholder="Enter Pan Card Number"
          />
        </div>
        <div className="vdf1 vdf1-personal">
          <input
            type="text"
            name="aadhar_card"
            id=""
            onChange={handleChange}
            value={formData.aadhar_card}
            placeholder="Enter Aadhar Card Number"
          />
          <input
            type="text"
            name="house_number"
            placeholder="H.No"
            value={formData.house_number}
            onChange={handleChange}
          />
            <input
            type="text"
            name="mohalla_ward_number"
            placeholder="Mohalla/ Ward"
            value={formData.mohalla_ward_number}
            onChange={handleChange}
          />
        </div>
        <div className="vdf1">
        
          <input
            type="text"
            name="village_town_sector"
            placeholder="Village/Town/Sector "
            value={formData.village_town_sector}
            onChange={handleChange}
          />
          <input
            type="text"
            name="post_thana"
            placeholder="Post/Thana"
            value={formData.post_thana}
            onChange={handleChange}
          />
                <input
            type="text"
            name="Tahsil"
            placeholder="Tahsil"
            value={formData.Tahsil}
            onChange={handleChange}
          />
        </div>
        <div className="vdf1">
    
          <input
            type="text"
            name="district"
            placeholder="District "
            value={formData.district}
            onChange={handleChange}
          />
          <input
            type="text"
            name="state"
            placeholder="State "
            value={formData.state}
            onChange={handleChange}
          />
          <input
            type="text"
            name="pin_code"
            placeholder="Pin code "
            value={formData.pin_code}
            onChange={handleChange}
          />
        </div>
        <div className="vdf1">
          
        </div>
        <button type="submit" id="Digi-Box-1-1-btn">
          Next
        </button>
      </form>
    </div>
  );
};

export default Personaldetails;
