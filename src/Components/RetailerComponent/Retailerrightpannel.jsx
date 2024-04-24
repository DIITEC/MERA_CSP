import React from 'react'
import './Retailerrightpannel.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import Retailer_navbar from './Retailer_navbar'
import Dashboard_retailer from '../../Pages/RetailerDashboard/Dashboard_retailer';
const Retailerrightpannel = () => {
  return (
    <div className='Retailerrightpannel'>
        <Retailer_navbar />
        <Dashboard_retailer />
    </div>
  )
}

export default Retailerrightpannel