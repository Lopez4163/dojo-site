import React from "react"
import ContactUsComp from "../Components/ContactUsComp.jsx"
// import "../Styling/ContactUsPage.css"
import "../Styling/ContactUsPage.css"
import ContactUsBanner from "../assets/contactus-banner.jpeg"
const ContactUsPage = () => {
  return (
    <div>
      <section
        className="contactus-banner"
        style={{ backgroundImage: `url(${ContactUsBanner}` }}
      >
        <h1>Contact Us</h1>
      </section>
      <section>
        <ContactUsComp />
      </section>
    </div>
  )
}
export default ContactUsPage
