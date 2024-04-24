import React from "react";
import "./Dashboard_retailer.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import EngineeringIcon from "@mui/icons-material/Engineering";
import WheelchairPickupIcon from "@mui/icons-material/WheelchairPickup";
import ElderlyIcon from "@mui/icons-material/Elderly";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AtmIcon from "@mui/icons-material/Atm";
const Dashboard_retailer = () => {
  return (
    <div className="Dashboard_retailer1">
      <div className="dashboardrt_1">
        <h1>DASHBOARD</h1>
        <rd className="line1rd"></rd>
      </div>
      <div className="dashboardrt_2">
        <div className="Dash_shortcutService">
          <span>Shortcut</span>
          <div className="line1rd"></div>
          <div className="dash_shortcut_content">
            <div className="sc1">
              <CurrencyRupeeIcon />
              <span>Tax Return</span>
            </div>
            <div className="sc1">
              <CurrencyRupeeIcon />
              <span>Cibil</span>
            </div>
            <div className="sc1">
              <CurrencyRupeeIcon />
              <span>UIDAI PAC</span>
            </div>
            <div className="sc1">
              <LightbulbIcon />
              <span>Skills</span>
            </div>
            <div className="sc1">
              <AtmIcon />
              <span>ATM</span>
            </div>
            <div className="sc1">
              <TimeToLeaveIcon />
              <span>Travel</span>
            </div>
          </div>
        </div>
        <div className="Dash_shortcutService newService">
          <span>New Services</span>
          <div className="line1rd"></div>
          <div className="dash_shortcut_content">
            <div className="sc1">
              <CardTravelIcon />
              <span>E-shram card</span>
            </div>
            <div className="sc1">
              <EngineeringIcon />
              <span>Labour Registration</span>
            </div>
            <div className="sc1">
              <AgricultureIcon />
              <span>PM-Kissan</span>
            </div>
            <div className="sc1">
              <WheelchairPickupIcon />
              <span>Swalamban Registration</span>
            </div>
            {/* <div className="sc1">
              <ElderlyIcon />
              <span>Pension</span>
            </div>
            <div className="sc1">
              <AddBusinessIcon />
              <span>MSME Udyam</span>
            </div> */}
          </div>
        </div>
      </div>
      <div className="dashboardrt_3">
        <div className="dashBox recentlyAddService">
          <span>Newly Arrived / Recently added services</span>
          <div className="line1rd"></div>
          <div className="cardrt1">
            <div className="sc1 b1">
                <CardTravelIcon />
                <span>E-shram card</span>
            </div>
            <div className="sc1 b1">
                <CardTravelIcon />
                <span>E-shram card</span>
            </div>
            <div className="sc1 b1">
                <CardTravelIcon />
                <span>E-shram card</span>
            </div>
            <div className="sc1 b1">
                <CardTravelIcon />
                <span>E-shram card</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_retailer;
