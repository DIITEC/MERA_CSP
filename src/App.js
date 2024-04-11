import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RegistrationForm from "./Pages/RegistrationForm";
import LoginForm from "./Pages/LoginForm";
import AdminPanel from "./Pages/AdminSection/AdminPanel";
import AboutUS from "./Pages/AboutUS";
import Home from "./Pages/Home";

import Services from "./Pages/Services";
import Assesment from "./Pages/AdminSection/Assesment";
import Contactus from "./Pages/Contactus";
import DigitalMitraEnrollment from "./Pages/DigitalMitraEnrollment";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm setUser={setUser} />} />
        <Route path="/loginUserPannel" element={<LoginForm setUser={setUser} />} />
        <Route path="/admin" element={user ? <AdminPanel user={user} /> : <Navigate to="/login" />} />

        <Route path="/userPannel-assesments" element={user ? <Assesment user={user} /> : <Navigate to="/login" />} />
        <Route path="/userPannel-dashboard" element={user ? <AdminPanel user={user} /> : <Navigate to="/login" />} />
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/Contact" element={<Contactus />} />
      
        <Route path="/Services" element={<Services />} />
        <Route path="/enrollment-registration" element={<DigitalMitraEnrollment />} />
      </Routes>
    </Router>
  );
};

export default App;
