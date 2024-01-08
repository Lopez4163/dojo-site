import React from 'react'
import {Link} from "react-router-dom";
import '../Styling/Footer.css'
const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='footer-wrapper'>
                <div className='footer-logo'>
                    <img src='https://i.imgur.com/8Z1zZ1V.png' alt='logo' />
                </div>
                <div className='contact-info'>
                    <Link to='/' className='contact-link'><h3>Home</h3></Link>
                    <Link to='/AboutUs' className='contact-link'><h5>About Us</h5></Link>
                    <Link to='/AboutBJJ' className='contact-link'><h5>Street Legal Jiu Jitsu</h5></Link>
                    <Link to={'/Schedule'} className='contact-link'><h5>Schedule</h5></Link>
                    <Link to={'/ContactUsPge'} className='contact-link'><h5>Contact Us</h5></Link>
                </div>
                <div className='contacts'>
                    <h3 className='contacts-title`'>Street Legal Jiu Jitsu</h3>
                    <div className='contacts-info'>
                        <h5>Phone: 718-555-5555</h5>
                        <h5>Address: 52 Duane St 7th floor, New York, NY 10007
                        </h5>
                        <h4>Instagram</h4>
                    </div>

                </div>
            </div>
            <div className='powered-by'>
                <h5>The Street Legal is Powered by the streets...</h5>
            </div>
        </footer>
    )
}
export default Footer
