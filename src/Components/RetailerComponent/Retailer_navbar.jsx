import React from "react";
import "./Retailer_navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import mainLogo from "../../Images/logo.png";
import mainLogo3 from "../../Images/mainLogo23.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Retailer_navbar = () => {
  return (
    <div className="Retailer_navbar">
      <div className="navretail_left">
        <MenuIcon />
        <SearchIcon />
      </div>
      <div className="navretail_right">
        <img src={mainLogo} alt="" />
        {/* <img src={mainLogo3} alt="" /> */}
        <AccountCircleIcon />
      </div>
    </div>
  );
};

export default Retailer_navbar;
