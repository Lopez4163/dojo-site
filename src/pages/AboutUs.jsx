import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Submission from '../assets/submission.jpeg'
import '../Styling/AboutUs.css'
import MainInstructor from '../assets/instructor-main.jpg'
import Instructor1 from '../assets/instructor1.jpg'
import Instructor2 from "../assets/instructor2.jpg"
import Instructor3 from '../assets/instructor3.jpg'



const AboutUs = () => {
    return (
        <body>
        <section className='upper-container'>
            <div className='upper-container-img' style={{backgroundImage: `url(${Submission}`}}>
            </div>
            <div className='upper-container-aboutus'>
                <h1 className='aboutus-info-title'>ABOUT US</h1>
                <h4 className='aboutus-info-text'>When the city streets get mean you best believe well be getting you lean!</h4>
                <h4 className='aboutus-info-text'>Street legal Jiu Jitsu was built in the cold winter days around trash can fires, harnessing true street knowledge.
                That mixed with pure jiu Jitsu created the animal we have to tame and teach, Street Jitz!</h4>
                <Link to='/ContactUsPge' className='contactus-button'>Contact Us</Link>
            </div>
        </section>
        <div className='instructor-container'>
            <div className='instructor-container-welcome'>
                <h1 className='instructor-container-title'>Meet Our Instructors</h1>
                <h4 className='isntructor-container-text'>We have a wide variety of instructors, from IBJJF World Champions to StreetBeefs Champions, we blend and mix all styles to work on a NYC subway floor to the ADCC mats</h4>
            </div>
            <div className='main-instructor'>
                <img className='main-instructor-image' src={MainInstructor}/>
                <h2 className='head-instructor'>Head Instructor/Owner</h2>
                <h2 className='instructor-name'>Juaquim Hernandez</h2>
                <h4 className='instructor-accolade'>2005 IBJJF Purple Belt World Champion</h4>
                <h3 className='instructor-bio'>A Black Belt under Rickson Gracie, Born and raised in NYC he brings self defence back to his community!</h3>
            </div>
        <div>
            <ul className='instructor-ul'>
                <li>
                    <div className='instructor-li-container'>
                        <img className='instructor-images' src={Instructor1}/>
                        <h2 className='instructor-name'>Faustino Galvao</h2>
                        <h4 className='instructor-accolade'>2005 IBJJF Brown Belt World CHampion</h4>
                        <h3 className='instructor-bio'>A Black Belt under Kron Gracie, born and raised in Rio De Janeiro, Brazil he brings his fast pace brazillian style to the streets</h3>
                    </div>
                </li>
                <li>
                    <div  className='instructor-li-container'>
                        <img className='instructor-images' src={Instructor2}/>
                        <h2 className='instructor-name'>Ganu Akimbo</h2>
                        <h4 className='instructor-accolade'>2016 StreetBeefs Middle Weight Champion</h4>
                        <h3 className='instructor-bio'>From the harsh jungles of the Kongo, to the trailer parks of street beefs west coast, Ganu has done it all. Brown Belt in Brazillian Jiu Jitsu under Lochlan Giles, he brings the streets to the mats.</h3>
                    </div>
                </li>
                <li>
                    <div className='instructor-li-container'>
                        <img className='instructor-images' src={Instructor3}/>
                        <h2 className='instructor-name'>Hernan Alvez</h2>
                        <h4 className='instructor-accolade'>2010 Colombian World Champion</h4>
                        <h3 className='instructor-bio'>From Cali, Colombia, Hernan has traveled South America competeing and learning to share his knowledge here at Street Legal.</h3>
                    </div>
                </li>
            </ul>
        </div>
        </div>
        <section>

        </section>
        <section>

        </section>
        </body>
    )
}
export default AboutUs
