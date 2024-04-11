import React, { useState } from "react";
import axios from "axios";
import "./RegistrationForm.css";
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    dob: "",
    address: "",
    gender: "",
    state: "",
    district: "",
    photo: null,
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    // For input fields except for file input
    if (e.target.type !== "file") {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else {
      // For file input
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/register', formData);
      alert('Registration successful! Check your email for login details.');
      navigate('/login');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Registration failed. Please try again.');
    }
  };
  return (
    <div className="RegistrationForm-mainBox">
      <div className="RegistrationForm">
        <h2>Register New User</h2>
        <div className="greenLine"></div>
        <form onSubmit={handleSubmit}>
          <div className="inputForm">
            <div>
              <label htmlFor="name">Name(As Per gov. ID Proof)</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name(As Per gov. ID Proof)"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                placeholder="Enter Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="fatherName">Father's/Mother's/Spouse's Name</label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                placeholder="Enter Father's/Mother's/Spouse's Name"
                value={formData.fatherName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Valid Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="state">State:</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="district">District:</label>
              <input
                type="text"
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="photo">Upload Photo:</label>
              <input
                type="file"
                id="photo"
                name="photo"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
