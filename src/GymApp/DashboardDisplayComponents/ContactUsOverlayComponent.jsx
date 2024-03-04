import React, { useState } from "react"
import emailjs from "emailjs-com"
import "../DashboardStyling/DashboardView.css"

const ContactUsOverlayComponent = ({ show, onClose }) => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handleMessageChange = e => {
    setMessage(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    // Your Email.js service ID, template ID, and user ID
    const serviceId = "your_emailjs_service_id"
    const templateId = "your_emailjs_template_id"
    const userId = "your_emailjs_user_id"

    const templateParams = {
      email,
      message,
    }

    // Send email using Email.js
    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then(response => {
        console.log("Email sent successfully:", response)
        // You can handle success, close the overlay, or show a success message to the user
        onClose()
      })
      .catch(error => {
        console.error("Error sending email:", error)
        // Handle error, show an error message to the user, etc.
      })
  }

  return (
    <div
      className={`contact-us-overlay ${show ? "show" : ""}`}
      onClick={onClose}
    >
      <div className="overlay-content" onClick={e => e.stopPropagation()}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label>Message:</label>
          <textarea
            placeholder="Type your message here"
            value={message}
            onChange={handleMessageChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default ContactUsOverlayComponent
