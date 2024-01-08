import ContactUsBanner from "../assets/contactus-banner.jpeg";
import ContactUsComp from "../Componenets/ContactUsComp.jsx";
import '../Styling/AboutBJJ.css'
import TeachingJJImg from '../assets/Teachingjj.jpeg'
import { Outlet, Link } from "react-router-dom";


const AboutBjj = () => {
    return (
        <div>
            <section className='contactus-banner' style={{backgroundImage: `url(${ContactUsBanner}`}}>
                <h1>Brazillian Jiu Jitsu</h1>
            </section>
            <section className='jj-program-container'>
                <div className='jj-program-title'>
                    <h1>Street Legal Jiu Jitsu Program</h1>
                    </div>
                <div className='jj-program-bio'>
                    <div className='jj-program-text'>
                        <div className='overview'>
                            <h3>Overview</h3>
                            <h4>In my street legal Jiu-Jitsu teachings, I fuse traditional martial arts principles with real-world self-defense techniques, emphasizing adaptability in urban environments. The curriculum covers standing and ground techniques, promoting situational awareness, de-escalation, and responsible use of force for effective self-defense within legal and ethical boundaries.</h4>
                        </div>
                        <div className='grappling'>
                            <h3>Grappling</h3>
                            <h4> In our street legal Jiu-Jitsu training, we emphasize modern grappling techniques such as leg locks and wrestling, adapting them for practical use in real-world situations. This approach ensures that our students are equipped to effectively apply these techniques in street scenarios, enhancing their self-defense capabilities.</h4>
                        </div>
                    </div>
                    <div className='jj-image-wrapper'>
                        <img src={TeachingJJImg} className='jj-image'/>
                    </div>
                </div>
            </section>
            <section className='aboutbjj-contactus-banner'>
                <div className='contactus-banner1'>
                    <div className='banner-text'>
                        <h3 className='banner-specific-text'>If not convinced, feel free to give us a call, and we'll be happy to schedule a free trial for you.</h3>
                    </div>
                    <Link to='/ContactUsPge' className='c-button'>Contact Us</Link>
                </div>
            </section>
        </div>
    )
}
export default AboutBjj
