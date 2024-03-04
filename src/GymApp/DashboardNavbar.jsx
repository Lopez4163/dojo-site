import React from "react"
import "./DashboardStyling/DashboardNavbar.css"
import SignOutComponent from "../Components/SignOutComponent.jsx"

const DashNavbar = () => {
  return (
    <div className="dash-navbar-container">
      <section className="dash-navbar-wrapper">
        <ul className="ul-links">
          <li className="link">
            <button className="dash-navbar-btn">
              <span className="material-symbols-outlined">home</span>
              <div className="icon-details">Home</div>
            </button>
          </li>
          <li className="link">
            <button className="dash-navbar-btn">
              <span className="material-symbols-outlined">calendar_today</span>
              <div className="icon-details">Schedule</div>
            </button>
          </li>
          <li className="link">
            {/*<span className="material-symbols-outlined">*/}
            {/*    logout*/}
            {/*</span>*/}
            <button className="dash-navbar-btn">
              <SignOutComponent />
            </button>
          </li>
        </ul>
      </section>
    </div>
  )
}
export default DashNavbar
