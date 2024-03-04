import React, { useState } from "react"
import ContactUsOverlayComponent from "./DashboardDisplayComponents/ContactUsOverlayComponent.jsx"
import "./DashboardStyling/DashboardView.css"
// import ClassCalender from "./ClassCalender.jsx"

const DashboardView = () => {
  const [showContactOverlay, setShowContactOverlay] = useState(false)
  const [showClassList, setShowClassList] = useState(false) // Add state for displaying the class list

  const handleContactClick = () => {
    setShowContactOverlay(true)
  }

  const handleCloseContactOverlay = () => {
    setShowContactOverlay(false)
  }
  const handleBookClassClick = () => {
    setShowClassList(true) // Set the state to true when the "Book Class" link is clicked
  }
  return (
    <div className="dashboard-view-container">
      <div className="dashboard-wrapper">
        <section className="options">
          <ul className="options-ul">
            <li className="link" onClick={handleBookClassClick}>
              <div className="icon-wrapper">
                <span className="material-symbols-outlined">
                  calendar_month
                </span>
                <span className="icon-details">Book Class</span>
              </div>
            </li>
            <li className="link" onClick={handleContactClick}>
              <div className="icon-wrapper">
                <span className="material-symbols-outlined">mail</span>
                <span className="icon-details">Contact Us</span>
              </div>
            </li>
          </ul>
        </section>
        {/* <section className="pc-column">
          <div className="graph-wrapper">
            <div>
              <h2 className="dv-title">Attendance</h2>
              <img
                src="https://images.squarespace-cdn.com/content/v1/5cddf79237127800016fac3d/1572311503833-O517WZA864Z4S29G17BE/attendance1.jpg"
                alt="graph"
                className="graph-img"
              />
            </div>
          </div>
        </section> */}
        {/* <section className="card">
          <div className="bookings-wrapper">
            <h2 className="dv-title" id="bookings">
              Bookings
            </h2>
            <ul className="bookings-ul">
              <li className="bookings-li">
                <div className="bookings-li-wrapper">
                  <span>Class Name: BJJ Beginner Class</span>
                  <span>Class Time: 5pm - 6pm</span>
                  <span>Class Date: 1-1-2023</span>
                  <span>Duration: 1hr</span>
                </div>
              </li>
            </ul>
          </div>
        </section> */}
        <ContactUsOverlayComponent
          show={showContactOverlay}
          onClose={handleCloseContactOverlay}
        />
      </div>
    </div>
  )
}
export default DashboardView
