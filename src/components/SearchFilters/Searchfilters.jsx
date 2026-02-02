import React from "react";
import "./searchfilters.css";
function Searchfilters() {
  return (
    <div>
      <div className="filters">
        <div className="filter-des-hotel">
          <div className="input-group">
            <input
              type="text"
              placeholder={" Destinati City"}
              className="input-dest"
            />
            <input type="date" />
            <select className="No-of-passangers">
              <option>2 Adults</option>
              <option>3 Childrens</option>
            </select>

            <button className="search-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </div>

          <div className="hotel-standard">
            <span className="label">Hotel Standard</span>
            <button className="pill">3★</button>
            <button className="pill">4★</button>
            <button className="pill active">5★</button>

            <label className="checkbox">
              <input type="checkbox" defaultChecked/>
              <span>Add Lunch</span>
            </label>

            <label className="checkbox">
              <input type="checkbox" />
              <span>Add Dinner</span>
            </label>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Searchfilters;
