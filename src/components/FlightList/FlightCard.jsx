import React from "react";
import "./FlightCard.css";
function FlightCard({flights }) {
  
  return (
    <div className="flight-column">
      <div className="flight-card">
        <div className="flight-top">
          <div className="airline">
            <img src={flights.airline.logo} />
            <div>
              <strong>{flights.airline.name}</strong>
              <small>{flights.airline.code}</small>
            </div>
          </div>

          <div className="time">
            {flights.route.from.time}
            <br />
            <small>{flights.route.from.code}</small>
          </div>
          <div className="duration">
            {flights.route.duration}
            <br />
            <small>{flights.route.stopType}</small>
          </div>
          <div className="time">
            {flights.route.to.time}
            <br />
            <small>{flights.route.to.code}</small>
          </div>
        </div>
        <div className="divider-flight"></div>
        <div className="price-row">
          <label>
            <input type="checkbox" defaultChecked={flights.pricing[0].selected} />
            {flights.pricing[0].price}
            <span className="tag publish">{flights.pricing[0].type}</span>
          </label>
          <label>
            <input type="checkbox" defaultChecked={flights.pricing[1].selected} />
            {flights.pricing[1].price}
            <span className="tag pink">{flights.pricing[1].type}</span>
          </label>
        </div>
        <div className="divider-flight"></div>

        <div className="extra-info">
          <span>Hand Baggage ·{flights.baggage.hand}</span>
          <span>Check-In Baggage</span>
          <span>{flights.refundable ? "refundable" : "NoRefundable"}</span>
          <span>Rules</span>
          
        </div>
      </div>
    </div>
  );
}

export default FlightCard;
