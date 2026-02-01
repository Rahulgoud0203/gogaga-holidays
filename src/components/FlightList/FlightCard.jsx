import React from 'react'
import "./FlightCard.css"
function FlightCard() {
  return (
     <div className="flight-column">
      <div className="flight-card">
        <div className="flight-top">
          <div className="airline">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Air_India_Express_Logo.svg" />
            <div>
              <strong>Air India Express</strong>
              <small>IX 2879 TC</small>
            </div>
          </div>

          <div className="time">12:05<br/><small>HYD</small></div>
          <div className="duration">01h 25m<br/><small>Non stop</small></div>
          <div className="time">13:30<br/><small>GOI</small></div>
        </div>
        <div className="divider-flight"></div>
        <div className="price-row">
          <label><input type="checkbox" defaultChecked /> ₹13,300.00 <span className="tag publish">Publish</span></label>
          <label><input type="checkbox" /> ₹29,144.00 <span className="tag pink">XpressBiz</span></label>
        </div>
        <div className="divider-flight"></div>

        <div className="extra-info">
          <span>Hand Baggage · 7 Kg</span>
          <span>Check-In Baggage</span>
          <span>Refundable</span>
          <span>Rules</span>
        </div>
      </div>
    </div>
  )
}

export default FlightCard