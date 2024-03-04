import React, { useRef } from 'react';
import '../Styling/Schedule.css'
import ContactUsBanner from "../assets/contactus-banner.jpeg";
import {Link} from "react-router-dom";

const SchedulePage = () => {
    const nodeRef = useRef(null);

    return (
        <div ref={nodeRef}>
            <section className='contactus-banner' style={{backgroundImage: `url(${ContactUsBanner}`}}>
                <h1>Schedule</h1>
            </section>
            <section className='schedule-container'>
                <div className='title'>
                    <h1>Street Legal Jiu Jitsu Schedule</h1>
                </div>
                <div className='schedule'>
                    <div className='schedule-day'>
                        <span className='day'>Monday</span>
                        <ul className='schedule-ul'>
                            <li className='schedule-li'>
                                <h4>Advanced JJ + Scrimmage Wrestling</h4>
                                <h3>8:00 - 9:30 AM</h3>
                            </li>
                            <li className='schedule-li'>
                                <h4>Advanced JJ + Scrimmage Wrestling</h4>
                                <h3>9:30 - 10:30 AM</h3>
                            </li>
                            <li className='schedule-li'>
                                <h4>Advanced JJ + Scrimmage Wrestling</h4>
                                <h3>6:00 - 7:30 PM</h3>
                            </li>
                            <li className='schedule-li'>
                                <h4>Advanced JJ + Scrimmage Wrestling</h4>
                                <h3>7:30 - 8:30 PM</h3>
                            </li>
                        </ul>
                    </div>
                    <div className='schedule-day'>
                        <span className='day'>Tuesday</span>
                        <ul className='schedule-ul'>
                            <li className='schedule-li'>
                                <h4>Advanced JJ + Scrimmage Wrestling</h4>
                                <h3>8:00 - 9:30 AM</h3>
                            </li>
                            <li className='schedule-li'>
                                <h4>Advanced JJ + Scrimmage Wrestling</h4>
                                <h3>9:30 - 10:30 AM</h3>
                            </li>
                            <li className='schedule-li'>
                                <h4>Advanced JJ + Scrimmage Wrestling</h4>
                                <h3>6:00 - 7:30 PM</h3>
                            </li>
                            <li className='schedule-li'>
                                <h4>Advanced JJ + Scrimmage Wrestling</h4>
                                <h3>7:30 - 8:30 PM</h3>
                            </li>
                        </ul>
                    </div>
                    <div className='schedule-day'>
                        <span className='day'>Wednesday</span>
                        <ul className='schedule-ul'>
                            <li className='schedule-li'>
                                <h4>Advanced JJ + Scrimmage Wrestling</h4>
                                <h3>8:00 - 9:30 AM</h3>
                            </li>
                            <li className='schedule-li'>
                                <h4>Advanced JJ + Scrimmage Wrestling</h4>
                                <h3>9:30 - 10:30 AM</h3>
                            </li>
                            <li className='schedule-li'>
                                <h4>Advanced JJ + Scrimmage Wrestling</h4>
                                <h3>6:00 - 7:30 PM</h3>
                            </li>
                            <li className='schedule-li'>
                                <h4>Advanced JJ + Scrimmage Wrestling</h4>
                                <h3>7:30 - 8:30 PM</h3>
                            </li>
                        </ul>
                    </div>
                    <div className='schedule-day'>
                        <span className='day'>Thursday</span>
                        <ul className='schedule-ul'>
                            <li className='schedule-li'>
                                <h4>Advanced JJ + Scrimmage Wrestling</h4>
                                <h3>8:00 - 9:30 AM</h3>
                            </li>
                            <li className='schedule-li'>
                                <h4>Advanced JJ + Scrimmage Wrestling</h4>
                                <h3>9:30 - 10:30 AM</h3>
                            </li>
                            <li className='schedule-li'>
                                <h4>Advanced JJ + Scrimmage Wrestling</h4>
                                <h3>6:00 - 7:30 PM</h3>
                            </li>
                            <li className='schedule-li'>
                                <h4>Advanced JJ + Scrimmage Wrestling</h4>
                                <h3>7:30 - 8:30 PM</h3>
                            </li>
                        </ul>
                    </div>
                    <div className='schedule-day'>
                        <span className='day'>Friday</span>
                        <ul className='schedule-ul'>
                            <li className='schedule-li'>
                                <h4>Advanced JJ + Scrimmage Wrestling</h4>
                                <h3>8:00 - 9:30 AM</h3>
                            </li>
                            <li className='schedule-li'>
                                <h4>Advanced JJ + Scrimmage Wrestling</h4>
                                <h3>9:30 - 10:30 AM</h3>
                            </li>
                            <li className='schedule-li'>
                                <h4>Advanced JJ + Scrimmage Wrestling</h4>
                                <h3>6:00 - 7:30 PM</h3>
                            </li>
                            <li className='schedule-li'>
                                <h4>Advanced JJ + Scrimmage Wrestling</h4>
                                <h3>7:30 - 8:30 PM</h3>
                            </li>
                        </ul>
                    </div><div className='schedule-day'>
                    <span className='day'>Saturday</span>
                    <ul className='schedule-ul'>
                        <li className='schedule-li'>
                            <h4>Advanced JJ + Scrimmage Wrestling</h4>
                            <h3>8:00 - 9:30 AM</h3>
                        </li>
                        <li className='schedule-li'>
                            <h4>Advanced JJ + Scrimmage Wrestling</h4>
                            <h3>9:30 - 10:30 AM</h3>
                        </li>
                        <li className='schedule-li'>
                            <h4>Advanced JJ + Scrimmage Wrestling</h4>
                            <h3>6:00 - 7:30 PM</h3>
                        </li>
                        <li className='schedule-li'>
                            <h4>Advanced JJ + Scrimmage Wrestling</h4>
                            <h3>7:30 - 8:30 PM</h3>
                        </li>
                    </ul>
                </div><div className='schedule-day'>
                    <span className='day'>Sunday</span>
                    <ul className='schedule-ul'>
                        <li className='schedule-li'>
                            <h4>Advanced JJ + Scrimmage Wrestling</h4>
                            <h3>8:00 - 9:30 AM</h3>
                        </li>
                        <li className='schedule-li'>
                            <h4>Advanced JJ + Scrimmage Wrestling</h4>
                            <h3>9:30 - 10:30 AM</h3>
                        </li>
                        <li className='schedule-li'>
                            <h4>Advanced JJ + Scrimmage Wrestling</h4>
                            <h3>6:00 - 7:30 PM</h3>
                        </li>
                        <li className='schedule-li'>
                            <h4>Advanced JJ + Scrimmage Wrestling</h4>
                            <h3>7:30 - 8:30 PM</h3>
                        </li>
                    </ul>
                </div>
                </div>
            </section>
            <section className='aboutbjj-contactus-banner'>
                <div className='contactus-banner1'>
                    <div className='banner-text'>
                        <h3 className='banner-specific-text'>If not convinced, feel free to give us a call, and we'll be happy to schedule a free trial for you.</h3>
                    </div>
                    <Link to='/ContactUsPage' className='c-button'>Contact Us</Link>
                </div>
            </section>
        </div>
    )
}
export default SchedulePage
