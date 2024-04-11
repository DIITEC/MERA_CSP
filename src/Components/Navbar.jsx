import React from 'react'
import { useState, useRef, useEffect } from 'react'
import './Navbar.css'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Dropdown } from 'bootstrap'

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false)
    const dropdownRef = useRef(null)
    const toggleRegistration = () => {
        setisOpen(!isOpen)
    }
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setisOpen(false);
        }
      };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);
  return (
    <div className="navbar-main">
        <div className="logo-img">
            <img src={logo}/>

        </div>
    
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/AboutUS">ABOUT US</Link></li>
                <li><Link to="/Services">SERVICES</Link></li>
                <li><Link to="/Contact">CONTACT</Link></li>
               
                
            </ul>
            
     <button className="agent-login nav-btn">
        VLE LOGIN
     </button>
     <div className='Registration'>
     <button className="Registration-login nav-btn" onClick={toggleRegistration} ref={dropdownRef}>
        REGISTRATION <ArrowDropDownIcon/>
     </button>
     {
        isOpen? (
          <div className='Registration-list'>
          {/* <Link to="/register">
           Digital Mitr Registration
          </Link> */}
          <Link to="/enrollment-registration">
           Digital Mitr-Entrepreneurship Training Course Enrollment (DM-ETC)
          </Link>
          <Link to="/a">
            Digital Mitr Registration
          </Link>
          

          </div>
            
    ):''}
      </div>
    
   
      </div>
  )
}

export default Navbar
