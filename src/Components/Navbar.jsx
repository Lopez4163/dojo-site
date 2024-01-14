import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import '../Styling/Navigation.css'


const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    return (
        <nav className='navigation-container'>
                <div className='navigation-logo'>
                    <img src='https://i.imgur.com/8Z1zZ1V.png' alt='logo' />
                </div>
                <div className='dropdown-menu' onClick={() => {
                    setDropdownOpen(!dropdownOpen)
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`${dropdownOpen ? "open" : ""} navigation-links`}>
                    <li className='navigation-link'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='navigation-link'>
                        <Link to="/AboutUs">About Us</Link>
                    </li>
                    <li className='navigation-link'>
                        <Link to="/AboutBJJ">About BJJ</Link>
                    </li>
                    <li className='navigation-link'>
                        <Link to="/Schedule">Schedule</Link>
                    </li>
                    <li className='navigation-link'>
                        <Link to="/AffiliateProgram">Affiliate Program</Link>
                    </li>
                    <li className='navigation-link'>
                        <Link to="/ContactUsPage">Contact Us</Link>
                    </li>
                    <li className='student-instructor-link'>
                        <Link to="/Login">Login</Link>
                    </li>
                </ul>
        </nav>
    )
}
export default Navbar
