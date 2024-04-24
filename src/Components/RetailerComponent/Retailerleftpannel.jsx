import React from "react";
import "./Retailerleftpannel.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import WalletIcon from "@mui/icons-material/Wallet";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PortraitIcon from '@mui/icons-material/Portrait';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import mainLogo from "../../Images/logo.png";
import { Link } from "react-router-dom";


const Retailerleftpannel = () => {
  return (
    <div className="Retailerleftpannel">
      <div className="Rl_mainBox">
        <div className="rl_top1">
          <DashboardIcon />
          {/* <span>MeraCSP</span> */}
          <img src={mainLogo} alt="" />
        </div>
        <div className="rl_top2">
          {/* <div className="rdLine"></div> */}
          <div className="rl_pannel_heading">
            <span>NAVIGATION</span>
          </div>
          <div className="rl_dash">
            <HomeIcon />
            <Link to='/Retailer-dashboard'><span>DASHBOARD</span></Link>
          </div>
          <div className="rl_dash">
            <AppsIcon />
            <Link to='/Retailer-service'><span>SERVICES</span></Link>
          </div>
          <div className="rl_dash">
            <WalletIcon />
            <span>WALLET</span>
          </div>
          <div className="rl_dash">
            <ImportContactsIcon />
            <span>PASSBOOK</span>
          </div>
          <div className="rl_dash">
            <ShoppingCartIcon />
            <span>ORDERS</span>
          </div>
          <div className="rl_pannel_heading">
            <span>SETTINGS</span>
          </div>
          <div className="rl_dash">
            <PortraitIcon />
            <span>ACCOUNT</span>
          </div>
          <div className="rl_dash">
            <SupportAgentIcon />
            <span>SUPPORT</span>
          </div>
          <div className="rl_dash">
            <WorkspacesIcon />
            <span>HOD</span>
          </div>
          <div className="rlContentSec"></div>
        </div>
      </div>
    </div>
  );
};

export default Retailerleftpannel;
