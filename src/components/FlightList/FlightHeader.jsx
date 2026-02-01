import React from 'react'
import "./FlightHeader.css"
function FlightHeader() {
  return (
    <div className="flight-column">
      <div className="column-header">
        <span>Outbound: Hyderabad (HYD)</span>
        <span>Departure</span>
        <span>Duration</span>
        <span>Arrival</span>
      </div>
    </div>
    
  )
}

export default FlightHeader