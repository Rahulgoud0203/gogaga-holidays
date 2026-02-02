import React, { useState } from "react";
import "./index.css";
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

  const flightsData = [
    {
      airline: {
        name: "Air India Express",
        code: "IX 2879 TC",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Air_India_Express_Logo.svg",
      },
      route: {
        from: { code: "HYD", time: "12:05" },
        to: { code: "GOI", time: "13:30" },
        duration: "01h 25m",
        stopType: "Non stop",
      },
      pricing: [
        { type: "Publish", price: 13300, selected: true },
        { type: "XpressBiz", price: 29144, selected: false },
      ],
      baggage: { hand: "7 Kg", checkIn: "15 Kg" },
      refundable: true,
    },
    {
      airline: {
        name: "IndiGo",
        code: "6E 6214",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/IndiGo_Logo.svg",
      },
      route: {
        from: { code: "DEL", time: "06:10" },
        to: { code: "BOM", time: "08:20" },
        duration: "02h 10m",
        stopType: "Non stop",
      },
      pricing: [
        { type: "Publish", price: 5400, selected: true },
        { type: "Flexi", price: 8800, selected: false },
      ],
      baggage: { hand: "7 Kg", checkIn: "15 Kg" },
      refundable: false,
    },
    {
      airline: {
        name: "Vistara",
        code: "UK 943",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Vistara_Logo.svg",
      },
      route: {
        from: { code: "BLR", time: "09:45" },
        to: { code: "DEL", time: "12:30" },
        duration: "02h 45m",
        stopType: "Non stop",
      },
      pricing: [
        { type: "Lite", price: 7200, selected: true },
        { type: "Premium", price: 11200, selected: false },
      ],
      baggage: { hand: "7 Kg", checkIn: "20 Kg" },
      refundable: true,
    },
    {
      airline: {
        name: "SpiceJet",
        code: "SG 8123",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/SpiceJet_Logo.svg",
      },
      route: {
        from: { code: "MAA", time: "14:20" },
        to: { code: "PNQ", time: "16:05" },
        duration: "01h 45m",
        stopType: "Non stop",
      },
      pricing: [
        { type: "Saver", price: 4600, selected: true },
        { type: "SpiceMax", price: 7600, selected: false },
      ],
      baggage: { hand: "7 Kg", checkIn: "15 Kg" },
      refundable: false,
    },
    {
      airline: {
        name: "Akasa Air",
        code: "QP 112",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Akasa_Air_Logo.svg",
      },
      route: {
        from: { code: "BOM", time: "18:10" },
        to: { code: "AMD", time: "19:25" },
        duration: "01h 15m",
        stopType: "Non stop",
      },
      pricing: [
        { type: "Basic", price: 3900, selected: true },
        { type: "Flex", price: 6100, selected: false },
      ],
      baggage: { hand: "7 Kg", checkIn: "15 Kg" },
      refundable: false,
    },
    {
      airline: {
        name: "Air India",
        code: "AI 544",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Air_India_Logo.svg",
      },
      route: {
        from: { code: "DEL", time: "22:30" },
        to: { code: "CCU", time: "00:40" },
        duration: "02h 10m",
        stopType: "Non stop",
      },
      pricing: [
        { type: "Economy", price: 6800, selected: true },
        { type: "Flex", price: 9800, selected: false },
      ],
      baggage: { hand: "8 Kg", checkIn: "25 Kg" },
      refundable: true,
    },
    {
      airline: {
        name: "IndiGo",
        code: "6E 9021",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/IndiGo_Logo.svg",
      },
      route: {
        from: { code: "HYD", time: "05:50" },
        to: { code: "BLR", time: "07:00" },
        duration: "01h 10m",
        stopType: "Non stop",
      },
      pricing: [
        { type: "Publish", price: 4100, selected: true },
        { type: "Flexi", price: 6900, selected: false },
      ],
      baggage: { hand: "7 Kg", checkIn: "15 Kg" },
      refundable: false,
    },
    {
      airline: {
        name: "Vistara",
        code: "UK 821",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Vistara_Logo.svg",
      },
      route: {
        from: { code: "DEL", time: "15:00" },
        to: { code: "LKO", time: "16:10" },
        duration: "01h 10m",
        stopType: "Non stop",
      },
      pricing: [
        { type: "Lite", price: 5100, selected: true },
        { type: "Premium", price: 8200, selected: false },
      ],
      baggage: { hand: "7 Kg", checkIn: "20 Kg" },
      refundable: true,
    },
    {
      airline: {
        name: "SpiceJet",
        code: "SG 456",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/SpiceJet_Logo.svg",
      },
      route: {
        from: { code: "JAIPUR", time: "10:15" },
        to: { code: "DEL", time: "11:05" },
        duration: "00h 50m",
        stopType: "Non stop",
      },
      pricing: [
        { type: "Saver", price: 3300, selected: true },
        { type: "SpiceMax", price: 5400, selected: false },
      ],
      baggage: { hand: "7 Kg", checkIn: "15 Kg" },
      refundable: false,
    },
    {
      airline: {
        name: "Akasa Air",
        code: "QP 781",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Akasa_Air_Logo.svg",
      },
      route: {
        from: { code: "PNQ", time: "07:30" },
        to: { code: "BOM", time: "08:20" },
        duration: "00h 50m",
        stopType: "Non stop",
      },
      pricing: [
        { type: "Basic", price: 2800, selected: true },
        { type: "Flex", price: 4500, selected: false },
      ],
      baggage: { hand: "7 Kg", checkIn: "15 Kg" },
      refundable: false,
    },
  ];

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
              {flightsData.map((itm, idx) => (
                <FlightCard key={idx} flights={itm} />
              ))}
            </div>
          </div>
          <div>
            <FlightHeader />
            <div className="flight-list-right scroll-container">
              {flightsData.map((itm, idx) => (
                <FlightCard key={idx} flights={itm} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageTabs;
