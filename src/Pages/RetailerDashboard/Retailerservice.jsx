import React from "react";
import Retailerleftpannel from "../../Components/RetailerComponent/Retailerleftpannel";
import Retailer_navbar from "../../Components/RetailerComponent/Retailer_navbar";
import "./Retailerservice.css";
import aepsSrvs from "../../Images/aepsSrvs.png";
import aepsSrvs1 from "../../Images/aepsadharsrvs.png";
import bbpsSrvs from "../../Images/BBPS-image.webp";
import dmtSrvs from "../../Images/dmtSrvs.png";
import rechargeSrvs from "../../Images/rechargeSrvs.png";
import { Link } from "react-router-dom";
const Retailerservice = () => {
  return (
    <div Retailerservice>
      <div className="Retailer_main_box">
        <div className="leftPannelRetailer">
          <Retailerleftpannel />
        </div>
        <div className="RightPannelRetailer">
          <Retailer_navbar />
          <div className="Retailerservice_box">
            <h1>SERVICES</h1>
            <div className="line1rd"></div>

            <div className="servicesSecBoxes">
              <div className="servicerd_box1">
                <img src={aepsSrvs} alt="" />
                <span>AEPS Service</span>
                <div className="line1rd"></div>
                <div className="srvs_rdcontent">
                    <span>E-Governance</span>
                    <Link to='/retailer_aeps_srvs'>Click here</Link>
                </div>
              </div>
              <div className="servicerd_box1">
                <img src={bbpsSrvs} alt="" />
                <span>BBPS Service</span>
                <div className="line1rd"></div>
                <div className="srvs_rdcontent">
                    <span>E-Governance</span>
                    <Link >Click here</Link>
                </div>
              </div>
              <div className="servicerd_box1">
                <img src={dmtSrvs} alt="" />
                <span>DMT Service</span>
                <div className="line1rd"></div>
                <div className="srvs_rdcontent">
                    <span>E-Governance</span>
                    <Link >Click here</Link>
                </div>
              </div>
              <div className="servicerd_box1">
                <img src={aepsSrvs1} alt="" />
                <span>AEPS Cash Deposit Service</span>
                <div className="line1rd"></div>
                <div className="srvs_rdcontent">
                    <span>E-Governance</span>
                    <Link >Click here</Link>
                </div>
              </div>
              <div className="servicerd_box1">
                <img src={rechargeSrvs} alt="" />
                <span> Recharge Service</span>
                <div className="line1rd"></div>
                <div className="srvs_rdcontent">
                    <span>E-Governance</span>
                    <Link >Click here</Link>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retailerservice;
