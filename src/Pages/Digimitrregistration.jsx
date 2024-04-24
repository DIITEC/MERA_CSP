import React, { useEffect, useState } from "react";
import "./Digimitrregistration.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import mainLogo from "../Images/logo.png";
import Verificationform from "./digiMitrRegSec/Verificationform";
import Personaldetails from "./digiMitrRegSec/Personaldetails";
import Bankdetails from "./digiMitrRegSec/Bankdetails";
import Businessdetails from "./digiMitrRegSec/Businessdetails";
import Otherdetails from "./digiMitrRegSec/Otherdetails";
import axios from "axios";

const Digimitrregistration = () => {
  const [val, setVal] = useState(0);
  const [final, setFinal] = useState(false);
  const [step, setStep] = useState(0); // State to track the current step

  const navigate = useNavigate();
  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (data) => {
    setFormData((prevFormData) => [...prevFormData, data]);
    setStep(step + 1);
  };

  useEffect(() => {
    const submitFormData = async () => {
      try {
        console.log("All form data:", formData);

        const formDataToSend = new FormData();
        formData.forEach((data) => {
          Object.entries(data).forEach(([key, value]) => {
            formDataToSend.append(key, value);
          });
        });
        const response = await axios.post(
          "http://localhost:8000/api/auth/Digital_Mitra_Registration",
          formDataToSend,
          {
            headers: {
              "Content-Type": "application/json", // Correct content type for file uploads
            },
          }
        );

        if (response.data.redirectUrl) {
          window.location.href = response.data.redirectUrl; // Redirect the user to the specified URL
        }

        if (response.data.success) {
          alert(
            "Digital-Mitr Registration successful! Check your email for login details."
          );
          navigate("/Vle-Login");
        } else {
          console.error("Digital-Mitr Registration failed.");
          alert("Digital-Mitr Registration failed. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Digital-Mitr Registration failed. Please try again.");
      }
    };

    if (final && step === 5) {
      // Assuming there are 5 steps in your form
      submitFormData();
    }
  }, [final, formData, step]);

  return (
    <div className="Digimitrregistration">
      <div className="Digi-Head1">
        <img src={mainLogo} alt="" />
        <span>
          Already a member? <Link to="/Vle-Login">Login</Link>
        </span>
      </div>
      <div className="Digi-Box1">
        <div className="Digi-Box1-1">
          <p>Let's get you started</p>
          <span>Enter the details to get going</span>
        </div>
        <div className="Digi-form-tabs">
          <li onClick={() => setVal(0)}>Verification</li>
          <div className="digLine"></div>
          <li onClick={() => setVal(1)}>Personal Details</li>
          <div className="digLine"></div>
          <li onClick={() => setVal(2)}>Banking Details</li>
          <div className="digLine"></div>
          <li onClick={() => setVal(3)}>Business Details</li>
          <div className="digLine"></div>
          <li onClick={() => setVal(4)}>Other Details</li>
        </div>
      </div>
      <div className="Digi-Box2">
        {step === 0 && (
          <Verificationform onSubmit={(data) => handleFormSubmit(data)} />
        )}
        {step === 1 && (
          <Personaldetails onSubmit={(data) => handleFormSubmit(data)} />
        )}
        {step === 2 && (
          <Bankdetails onSubmit={(data) => handleFormSubmit(data)} />
        )}
        {step === 3 && (
          <Businessdetails onSubmit={(data) => handleFormSubmit(data)} />
        )}
        {step === 4 && (
          <Otherdetails
            onSubmit={(data) => handleFormSubmit(data)}
            setFinal={setFinal}
          />
        )}
      </div>
    </div>
  );
};

export default Digimitrregistration;
