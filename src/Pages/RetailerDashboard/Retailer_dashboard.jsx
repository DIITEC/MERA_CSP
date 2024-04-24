import React from "react";
import "./Retailer_dashboard.css";
import Retailerleftpannel from "../../Components/RetailerComponent/Retailerleftpannel";

import Retailerrightpannel from "../../Components/RetailerComponent/Retailerrightpannel";
const Retailer_dashboard = () => {
  return (
    <div className="Retailer_dashboard">
      <div className="Retailer_main_box">
        <div className="leftPannelRetailer">
          <Retailerleftpannel />
        </div>
        <div className="RightPannelRetailer">
          <Retailerrightpannel />
        </div>
      </div>
    </div>
  );
};

export default Retailer_dashboard;
