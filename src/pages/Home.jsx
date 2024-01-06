import React from 'react'
import '../Styling/Homepage.css'
import aboutUsImg from '../assets/homepage-aboutus.jpeg'
import jiujitsuImg from '../assets/homepage-jj.jpeg'
import {Link} from "react-router-dom";
import ContactUsComp from "../Componenets/ContactUsComp.jsx";
const Home = () => {
    return (

        <div className='homepage-container'>
            <section className='banner-container'>
                <div className='banner-img-wrapper'>
                    <img className='homepage-banner banner' src='src/assets/homepage-banner.jpeg' alt='HomePage-Banner'/>
                    <div className='homepage-banner-overlay overlay'>
                        <div className='homepage-banner-text banner-text'>
                            <h1 className='overlay-title'>Street Legal Jiu Jitsu</h1>
                            <h4 className='overlay-sub-title'>Train For the Streets</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className='homepage-welcome-container'>
                <div className='homepage-welcome'>
                    <h2 className='homepage-welcome-welcome'>Welcome!</h2>
                    <h1 className='homepage-welcome-title'>Street Legal BJJ</h1>
                    <h2 className='section-text'>Where we bring street style fighting to the Mats!</h2>
                    <h3 className='section-text'>We Prioritize street defense style of jiu jitsu but we utilize all aspects of jiu jitsu from leg locks to wrestling.</h3>
                    <h3>We are preparing our students for the competition mats but also the cold hard concrete of NYC.</h3>
                </div>
            </section>
            <section className='homepage-content-container'>
                <Link to='/AboutUs' className='homepage-section' style={{backgroundImage: `url(${aboutUsImg}`}}>
                    <div className='homepage--text-wrapper'>
                        <h1>About US</h1>
                        <h2>We are a gym that is open to all walks of life, from drug dealers to cops we all come together for the common purpose of keeping it street legal! </h2>
                    </div>
                </Link>
                <Link to='/AboutBJJ' className='homepage-section' style={{backgroundImage: `url(${jiujitsuImg}`}}>
                    <div className='homepage--text-wrapper'>
                        <h1> Street Jitz</h1>
                        <h2> From flying buggy's to some Danaher senkaku something leg lock, we teach it all to work on the block!</h2>
                    </div>
                </Link>
            </section>
            <section className='contactus-componenet-container'>
                <ContactUsComp/>
            </section>
            <footer className='footer-container'>
                <div className='footer-wrapper'>
                    <div className='footer-logo'>
                        <img src='https://i.imgur.com/8Z1zZ1V.png' alt='logo' />
                    </div>
                    <div className='contact-info'>
                        <Link to='/' className='contact-link'><h3>Home</h3></Link>
                        <Link to='/AboutUs' className='contact-link'><h3>About Us</h3></Link>
                        <Link to='/AboutBJJ' className='contact-link'><h3>Street Legal Jiu Jitsu</h3></Link>
                        <Link to={'/Schedule'} className='contact-link'><h3>Schedule</h3></Link>
                        <Link to={'/ContactUs'} className='contact-link'><h3>Contact Us</h3></Link>
                    </div>
                    <div className='contacts'>
                        <h2 className='contacts-title`'>Street Legal Jiu Jitsu</h2>
                        <div className='contacts-info'>
                            <h3>Phone: 718-555-5555</h3>
                            <h3>Address: 52 Duane St 7th floor, New York, NY 10007
                            </h3>
                            <h3>Instagram</h3>
                        </div>

                    </div>
                </div>
                <div className='powered-by'>
                    <h3>The Street Legal is Powered by the streets...</h3>
                </div>
            </footer>

        </div>
    )
}
export default Home
