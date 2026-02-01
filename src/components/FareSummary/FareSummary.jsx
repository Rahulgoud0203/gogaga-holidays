import React from "react";
import "./FareSummary.css"
function FareSummary() {
  return (
    <div>
      <div className="fare-summary">
        <div className="fare-block">
          <span>Departure · Air India</span>
          <strong>11:30 → 18:55</strong>
        </div>
        <em className="cost-block">₹105,300.00</em>

        <div className="divider"></div>

        <div className="fare-block">
          <span>Return · Air India</span>
          <strong>00:50 → 01:55</strong>
          
        </div>
        <em className="cost-block">₹105,300.00</em>
        <div className="divider"></div>

        <div className="total-fare">
          <span>for 2 adult,2 children</span>
          
          <div className="total-fare-amount"><p>Total Round fare</p>
          <strong>₹210,600.00</strong></div>
        </div>
      </div>
    </div>
  );
}

export default FareSummary;
