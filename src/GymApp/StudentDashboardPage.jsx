import React from "react"
import "./DashboardStyling/StudentDashboardPage.css"
import DashboardView from "./DashboardView.jsx"
import DashNavbar from "./DashboardNavbar.jsx"
import ProfileInfo from "./DashBoardUserInfo.jsx"

const StudentDashboardPage = () => {
  return (
    <div className="dashboard-container">
      <section className="dash-navbar">
        <DashNavbar />
      </section>
      <section className="profile-info">
        <ProfileInfo />
      </section>
      <section className="dashboard-view">
        <DashboardView />
      </section>
    </div>
  )
}
export default StudentDashboardPage
