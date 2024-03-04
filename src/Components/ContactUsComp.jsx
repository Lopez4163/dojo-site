import React, { useState } from "react"
import beeperImg from "../assets/beeper.png"
import "../GymApp/DashboardStyling/ContactUsOverlay.css"
import "../Styling/ContactUsComp.css"

const ContactUsComp = () => {
  const [showContactOverlay, setShowContactOverlay] = useState(false)
  return (
    <section className="contactus-container">
      <div className="contactus-info-wrapper">
        <div className="contactus-info">
          <h1 className="contactus-info-title">HIT US UP ON THE BEEPER!</h1>
          <h3>Phone: 718-555-5555</h3>
          <h3>Email: StreetLegalBjj@gmail.com</h3>
          <h3>Address: 1234 Street Legal Way, Brooklyn NY, 11235</h3>
          <a href="https://www.google.com/maps/dir//Main+Street+Law,+52+Duane+St+7th+floor,+New+York,+NY+10007/@40.7125953,-74.0087128,15z/data=!3m1!5s0x89c25a1f8847da07:0x789da640fcf8e750!4m9!4m8!1m0!1m5!1m1!1s0x89c25b43991e9f69:0xbb239558d1da6b5e!2m2!1d-74.0039554!2d40.7142121!3e0?entry=ttu">
            Get Directions
          </a>
        </div>
        <div className="beeper-img-wrapper">
          <img src={beeperImg} alt="beeper" className="beeper-img" />
        </div>
      </div>
      <div className="gym-location-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.3960983325464!2d-74.00621638610302!3d40.71423154234958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b43991e9f69%3A0xbb239558d1da6b5e!2sMain%20Street%20Law!5e0!3m2!1sen!2sus!4v1704474979064!5m2!1sen!2sus"
          width="100%"
          height="389"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Gym Location Map"
        ></iframe>
      </div>
    </section>
  )
}
export default ContactUsComp
