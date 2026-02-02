import React, { useState } from "react";
import "./packageTabs.css";
import Searchfilters from "../SearchFilters/Searchfilters";
import RouteInfo from "../RouteInfo/RouteInfo";
import FareSummary from "../FareSummary/FareSummary";
import FlightCard from "../FlightList/FlightCard";
import FlightHeader from "../FlightList/FlightHeader";

function PackageTabs() {
  const [packagewith, setpackagewith] = useState(true);
  const [packagewithout, setpackagewithout] = useState(false);
  const [IndianHolidays, setIndianHoli] = useState(true);
  const [InternationalHolidays, setInternationalHoli] = useState(false);

  let switchtopack = () => {
    setpackagewith(true);
    setpackagewith(false);
  };
  let switchtoNotPackage = () => {
    setpackagewith(false);
    setpackagewithout(true);
  };

  return (
    <div className="Packagetab">
      <div className="Holidays-national">
        <button
          className={IndianHolidays ? "btn-upper" : "normal-btn"}
          onClick={() => {
            setInternationalHoli(false);
            setIndianHoli(true);
          }}
        >
          Indian Holidays
        </button>
        <button
          className={InternationalHolidays ? "btn-upper" : "normal-btn"}
          onClick={() => {
            setInternationalHoli(true);
            setIndianHoli(false);
          }}
        >
          International Holidays
        </button>
      </div>
      <div className="Packages">
        <button
          className={
            packagewith ? "package-btn-underline" : "package-normal-btn"
          }
          onClick={() => {
            setpackagewith(true);
            setpackagewithout(false);
          }}
        >
          Package with Flights
        </button>
        <button
          className={
            packagewithout ? "package-btn-underline" : "package-normal-btn"
          }
          onClick={() => {
            setpackagewith(false);
            setpackagewithout(true);
          }}
        >
          Package without Flights
        </button>
      </div>
      <div className="bg-packages">
        <Searchfilters />
      <RouteInfo />
      <FareSummary />
      <div className="flight-list">
          <div>
        <FlightHeader />
        <div className="flight-list-left scroll-container">
          <FlightCard />
          <FlightCard />
          <FlightCard />
          <FlightCard />
          <FlightCard />
          <FlightCard />
          <FlightCard />
        </div>
      </div>
      <div>
        <FlightHeader />
        <div className="flight-list-right scroll-container">
          <FlightCard />
          <FlightCard />
          <FlightCard />
          <FlightCard />
          <FlightCard />
          <FlightCard />
          <FlightCard />
        </div>
      </div>
      </div>
      </div>
      
      
      
    </div>
  );
}

export default PackageTabs;
