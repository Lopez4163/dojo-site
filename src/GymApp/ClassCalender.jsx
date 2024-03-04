import React from "react"
import "./DashboardStyling/ClassCalender.css"
const ClassCalendar = () => {
  // Mock data for class dates
  const classDates = [
    "2023-01-01",
    // Add more class dates as needed
  ]

  return (
    <div className="class-calendar-container">
      <h2 className="class-calendar-title">Class Calendar</h2>
      <div className="class-calendar-dates">
        {classDates.map((date, index) => (
          <div key={index} className="class-date">
            <span>{date}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClassCalendar
