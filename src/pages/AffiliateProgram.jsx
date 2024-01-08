import React, { useState } from 'react'
import ContactUsBanner from "../assets/contactus-banner.jpeg";
import '../Styling/AffiliateProgram.css'
const AffiliateProgram = () => {
    const [formSubmit, setFormSubmit] = useState(false)
    const [formErrors, setFormErrors] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        smsOptIn: false,
        phonePrefix: '+1',
        positionAtGym: '',
        academyName: '',
        academyAddress: '',
        rankOfHeadInstructor: '',
        yearsMonthsOpen: '',
        currentAffiliation: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.name || !formData.email || !formData.phoneNumber) {
            setFormErrors({ message: 'Please fill out all required fields!' });
            return;
        }
        console.log('Form submitted:', formData);
        setFormErrors('');
        setFormSubmit(true);
    };

    return (
        <div className='affiliate-program-container'>
            <section className='contactus-banner' style={{backgroundImage: `url(${ContactUsBanner}`}}>
                <h1>Affiliate Program</h1>
            </section>
            <section className='title-1'>
                <h1>AFFILIATE PROGRAM</h1>
            </section>
            <section className='afilliate-container'>
                <div className='affiliate-summary'>
                    <h3>
                        Become the driving force in your community by owning your own affiliate gym and joining the Street Legal team. As a Street Legal affiliate, you're not just running a gym; you're leading a movement. Enjoy the perks of being part of a dynamic community, access cutting-edge training resources, and receive ongoing support to elevate your business. Turn your passion for street legal Jiu-Jitsu into a thriving venture—empower others, build a unique brand, and redefine self-defense in your own style. Join us in revolutionizing the way martial arts empower individuals, one affiliate gym at a time.</h3>
                </div>
                <div className='affiliate-form-container'>
                    <form onSubmit={handleSubmit} className='affiliate-form'>
                        <ul>
                            <li className={formErrors.name ? 'error-input' : ''} >
                                <label>
                                    Name:
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                                </label>
                            </li>

                            <li className={formErrors.email ? 'error-input' : ''}>
                                <label>
                                    Email:
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                                </label>
                            </li>

                            <li className={formErrors.phoneNumber ? 'error-input' : ''}>
                                <label>
                                    Phone Number:
                                    <div>
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                        />
                                        <select name="phonePrefix" value={formData.phonePrefix} onChange={handleChange}>
                                            <option value="+1">+1</option>
                                            {/* Add more options for other country codes if needed */}
                                        </select>
                                    </div>
                                </label>
                            </li>

                            <li>
                                <label>
                                    SMS Opt-In:
                                    <input
                                        type="checkbox"
                                        name="smsOptIn"
                                        checked={formData.smsOptIn}
                                        onChange={handleChange}
                                    />
                                </label>
                            </li>

                            <li>
                                <p>
                                    By opting in to SMS, the person agrees to receive announcements and billing alerts from The B Team Jiu Jitsu. Standard messaging rates may apply. Messaging cadence may vary. Reply STOP to opt out.
                                </p>
                            </li>

                            <li>
                                <label>
                                    Position at Gym:
                                    <input
                                        type="text"
                                        name="positionAtGym"
                                        value={formData.positionAtGym}
                                        onChange={handleChange}
                                    />
                                </label>
                            </li>

                            <li>
                                <label>
                                    Academy Name:
                                    <input
                                        type="text"
                                        name="academyName"
                                        value={formData.academyName}
                                        onChange={handleChange}
                                    />
                                </label>
                            </li>

                            <li>
                                <label>
                                    Academy Address:
                                    <input
                                        type="text"
                                        name="academyAddress"
                                        value={formData.academyAddress}
                                        onChange={handleChange}
                                    />
                                </label>
                            </li>

                            <li>
                                <label>
                                    Rank of Head Instructor:
                                    <input
                                        type="text"
                                        name="rankOfHeadInstructor"
                                        value={formData.rankOfHeadInstructor}
                                        onChange={handleChange}
                                    />
                                </label>
                            </li>

                            <li>
                                <label>
                                    Years/Months Open:
                                    <input
                                        type="text"
                                        name="yearsMonthsOpen"
                                        value={formData.yearsMonthsOpen}
                                        onChange={handleChange}
                                    />
                                </label>
                            </li>

                            <li>
                                <label>
                                    Current Affiliation/Team Name:
                                    <input
                                        type="text"
                                        name="currentAffiliation"
                                        value={formData.currentAffiliation}
                                        onChange={handleChange}
                                    />
                                </label>
                            </li>
                        </ul>

                        <button type="submit" className='c-button'>Submit</button>
                    </form>
                    {formSubmit && (
                        <div className="success-message">
                            <p>Form submitted successfully! Thank you for your submission.</p>
                        </div>
                    )}
                    {formErrors.message && (
                        <div className="error-message">
                            <p>{formErrors.message}</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
export default AffiliateProgram
