import React, { useState } from "react";
import Retailerleftpannel from "../../Components/RetailerComponent/Retailerleftpannel";
import Retailer_navbar from "../../Components/RetailerComponent/Retailer_navbar";
import "./Retailer_aeps_srvs.css";
import sbiImg from "../../Images/sbiBank.png";
import MoneyIcon from "@mui/icons-material/Money";
import iciciImg from "../../Images/iciciBank.png";
import ubiImg from "../../Images/ubiBank.png";
import pngimg from "../../Images/pnbImage.png";
import hdfc from "../../Images/hdfcImage.png";
const bankData = [
  { id: 1, name: "State Bank of India", logo: sbiImg },
  { id: 2, name: "ICICI Bank of India", logo: iciciImg },
  { id: 3, name: "United Bank of India", logo: ubiImg },
  { id: 4, name: "Punjab National Bank", logo: pngimg },
  { id: 5, name: "HDFC Bank", logo: hdfc },
  { id: 6, name: "Bank of Baroda", logo: ubiImg },
  { id: 7, name: "United Bank of India", logo: ubiImg },
];
const Retailer_aeps_srvs = () => {
  const [selectedBank, setSelectedBank] = useState(null);
  const [activeProcess, setactiveProcess] = useState(false);
  const [selectetransaction, setselectetransaction] = useState(false);
  const [isactiveTransaction, setisactiveTransaction] = useState(false);
  const [isactiveaadhar, setisactiveaadhar] = useState(false);

  const handlercashWithdrawal = () => {
    setactiveProcess(true);
  };
  const handleBankSelect = (bank) => {
    setSelectedBank(bank);
    setisactiveTransaction(true);
  };
  const handleAadhar = () => {
    setisactiveaadhar(true);
  };
  const [isactive, setisactive] = useState(false);
  const handlerMobileInput = () => {
    setisactive(!isactive);
  };
  return (
    <div>
      <div className="Retailer_main_box">
        <div className="leftPannelRetailer">
          <Retailerleftpannel />
        </div>
        <div className="RightPannelRetailer">
          <Retailer_navbar />
          <div className="retailer_aeps_srvs">
            <h1>AEPS</h1>
            <div className="line1rd"></div>
            <div className="aeps_retailerMain">
              <div className="aeps_customerDetails">
                <span>Customer Details</span>
                <div className="line1rd"></div>
                <div className="content_costomeraeps">
                  <div className="input1_aeps">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input
                      type="number"
                      name="mobile"
                      id=""
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handlerMobileInput();
                      }}
                    />
                  </div>
                  {isactive ? (
                    <input
                      type="number"
                      name="aadharNumber"
                      placeholder="Aadhar number"
                      id=""
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleAadhar();
                      }}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="aeps_BankDetails">
                <div className="aeps_customerDetails">
                  <span>Bank Details</span>
                  <div className="line1rd"></div>
                  {isactiveaadhar ? (
                    <>
                      {" "}
                      <div className="content_bankaeps">
                        <input type="text" placeholder="Search bank" />
                      </div>
                      <div className="bank-list-container">
                        <ul className="bank-list">
                          {bankData.map((bank) => (
                            <li
                              key={bank.id}
                              className={`bank-item ${
                                selectedBank === bank ? "selected" : ""
                              }`}
                              onClick={() => handleBankSelect(bank)}
                            >
                              <img
                                src={bank.logo}
                                alt={bank.name}
                                className="bank-logo"
                              />
                              <span className="bank-name">{bank.name}</span>
                              {selectedBank === bank && (
                                <span className="tick-mark">&#10004;</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>{" "}
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="aeps_TransactionDetails">
                <div className="aeps_customerDetails">
                  <span>Bank Details</span>
                  <div className="line1rd"></div>
                  {isactiveTransaction ? (
                    <div className="aeps_transactionContent1">
                      <div className="aeps_transactionContent">
                        {" "}
                        <div
                          className="cashWithdraw_aeps"
                          onClick={() =>
                            setselectetransaction(!selectetransaction)
                          }
                        >
                          <MoneyIcon />
                          <span>Cash Withdrawal</span>
                          {selectetransaction && (
                            <span className="tick-mark">&#10004;</span>
                          )}
                        </div>
                        <div
                          className="cashWithdraw_aeps"
                          onClick={() =>
                            setselectetransaction(!selectetransaction)
                          }
                        >
                          <MoneyIcon />
                          <span>Balance and Statement</span>
                          {!selectetransaction && (
                            <span className="tick-mark">&#10004;</span>
                          )}
                        </div>
                      </div>
                      {selectetransaction ? (
                        <div className="input_cashwithdrawal">
                          <input
                            type="number"
                            name=""
                            id=""
                            placeholder="Enter amount"
                            onKeyDown={(e) => {
                        if (e.key === "Enter") handlercashWithdrawal();
                      }}
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="aeps_btn">
              {activeProcess?<button type="disabled" >Proceed</button>:''}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retailer_aeps_srvs;
