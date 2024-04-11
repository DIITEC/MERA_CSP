import React from "react";
import footerlogo from "../Images/footer-logo.png";
import Iframe from "react-iframe";
import "./Footer.css";
import facebook from "../Images/facebook.png";
import twitter from "../Images/tweeter-icon1.png";
import instagram from "../Images/instagram.png";
import linkedin from "../Images/linkedin.png";
import youtube from "../Images/youtube.png";
import playstore from "../Images/playstore.png";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-baba">
          <div className="footer-section1">
            <img src={footerlogo} />
            <p>
              A 100% Indian company providing Last mile delivery of Digital &
              Financial Services.
            </p>
            <img src={playstore} />

            
          </div>
          <div className="footer-section2 officialSec">
            <p>Official Info :</p>
            <ul>
              <li>
                <LocationOnIcon />
                <a href="#">
                  DIITEC Innovation Pvt. Ltd., 343/218A, Maholipura, Near
                  Panitanki Chauraha, Bahraich <br /> Pin-271801 <br /> Uttar Pradesh, India
                </a>
              </li>
              <li>
                <LocalPhoneIcon />
                <a href="#">+91 7800770063</a>
              </li>

              <li className="liformail">
                <MailOutlineIcon />
                <div className="liforEmail">
                  <a href="mailto">care@meracscpoint.com</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="footer-section2 downloadSec">
            <p>Downloads</p>
            <ul>
              <li>
                <a href="#">Microsoft .NET Framework 4.5 Web Installer</a>
              </li>
              <li>
                <a href="#">Morpho RD Service</a>
              </li>
              <li>
                <a href="#">Morpho RD Service</a>
              </li>
              <li>
                <a href="#">Startek RD Service</a>
              </li>
              <li>
                <a href="#">Oprating System</a>
              </li>
            </ul>
          </div>
          <div className="footer-section2">
            <p>YOUTUBE </p>
            <Iframe
              url="https://www.youtube.com/embed/05md0quCvmM"
              width="min-content"
              allow="autoplay"
              height="min-content"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </div>
        </div>
        <div className="footer_copyRight">
          <span>2023 © All rights reserved by MeraCSP</span>
          <span>
            Designed & developed by{" "}
            <a href="http://diitec.in/"> DIITEC INNOVATIONS PVT. LTD.</a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
