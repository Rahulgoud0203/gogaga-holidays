import React from "react";
import "./sidebar.css";
import { useState } from "react";

import { FiChevronDown, FiChevronRight } from "react-icons/fi";
function Sidebar() {
  const [lead, setleadsopen] = useState(false);
  const [Itineraries, setItinerariesopen] = useState(false);
  const [Vouchers, setVoucheropen] = useState(false);
  const [Accounts, setAccountsopen] = useState(false);
  const [Reports, setoreportspen] = useState(false);
  const [Customers, setcustomeropen] = useState(false);
  const [UserSettings, setUserSettingsopen] = useState(false);
  const [MastersSettings, setMastersettingsopen] = useState(false);
  const [HRM, setHRMopen] = useState(false);
  const [Assets, setAssetsopen] = useState(false);
  const [ItineraryCustomers, setItinararyCustomersopen] = useState(false);
  const [partners, setpartnerssopen] = useState(false);
  const [supplies, setsuppliesopen] = useState(false);

  return (
    <div className="sidebar-width-height">
      <aside className="sidebar">
        <div>
          <ul className="sidebar-list">
            <li>Menu</li>
            <li className="sidebar-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
           
                fill="currentColor"
                className="bi bi-house"
                viewBox="0 0 16 16"
                width="16"
                height="16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
              </svg>
              Dashboard
            </li>

            {/* {lead} */}
            <li className="sidebar-item" onClick={() => setleadsopen(!lead)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-funnel-fill"
                viewBox="0 0 16 16"
              >
                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z" />
              </svg>
              Leads
              <span className="right">
                {lead ? <FiChevronDown /> : <FiChevronRight />}
              </span>
            </li>
            {lead && (
              <li className="sub-sidebar-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-funnel-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z" />
                </svg>
                leads
              </li>
            )}

            {/* {Itineraries} */}
            <li
              className="sidebar-item"
              onClick={() => setItinerariesopen(!Itineraries)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
              Itineraries
              <span className="right">
                {Itineraries ? <FiChevronDown /> : <FiChevronRight />}
              </span>
            </li>
            {Itineraries && <li className="sub-sidebar-item">Itineraries</li>}

            <li className="sidebar-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cloud-fill"
                viewBox="0 0 16 16"
              >
                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383" />
              </svg>
              Google Reviews
            </li>

            {/* {Voucher} */}
            <li
              className="sidebar-item"
              onClick={() => setVoucheropen(!Vouchers)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                
                
                fill="currentColor"
                className="bi bi-arrows-move"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10M.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8"
                />
              </svg>
              Vouchers
              <span className="right">
                {Vouchers ? <FiChevronDown /> : <FiChevronRight />}
              </span>
            </li>
            {Vouchers && <li className="sub-sidebar-item">leads</li>}

            {/* {Accounts} */}
            <li
              className="sidebar-item"
              onClick={() => setAccountsopen(!Accounts)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                
                
                fill="currentColor"
                className="bi bi-calculator-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 .5v2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5m0 4v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5M4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 12.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5M7.5 6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM7 9.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m.5 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM10 6.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m.5 2.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5z" />
              </svg>
              Accounts
              <span className="right">
                {Accounts ? <FiChevronDown /> : <FiChevronRight />}
              </span>
            </li>
            {Accounts && <li className="sub-sidebar-item">leads</li>}
            {/* {report} */}
            <li
              className="sidebar-item"
              onClick={() => setoreportspen(!Reports)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                
                
                fill="currentColor"
                className="bi bi-file-earmark-bar-graph-fill"
                viewBox="0 0 16 16"
              >
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m.5 10v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5m-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5z" />
              </svg>
              Reports
              <span className="right">
                {Reports ? <FiChevronDown /> : <FiChevronRight />}
              </span>
            </li>
            {Reports && <li className="sub-sidebar-item">Reports</li>}
            {/* {custom support} */}
            <li
              className="sidebar-item"
              onClick={() => setcustomeropen(!Customers)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                
                
                fill="currentColor"
                className="bi bi-headset"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5" />
              </svg>
              Customers Support
              <span className="right">
                {Customers ? <FiChevronDown /> : <FiChevronRight />}
              </span>
            </li>
            {Customers && <li className="sub-sidebar-item">Customers</li>}

            {/* {User controls} */}
            <li className="sidebar-item">User Support</li>

            <li
              className="sidebar-item"
              onClick={() => setUserSettingsopen(!UserSettings)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
              
                fill="currentColor"
                className="bi bi-gear-fill"
                viewBox="0 0 16 16"
              >
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
              </svg>
              User Settings
              <span className="right">
                {UserSettings ? <FiChevronDown /> : <FiChevronRight />}
              </span>
            </li>
            {UserSettings && (
              <li className="sub-sidebar-item">setUserSettingsopen</li>
            )}
            {/* {Master Settings} */}
            <li
              className="sidebar-item"
              onClick={() => setMastersettingsopen(!MastersSettings)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                
                
                fill="currentColor"
                className="bi bi-git"
                viewBox="0 0 16 16"
              >
                <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.03 1.03 0 0 0 0-1.457" />
              </svg>
              Masters Settings
              <span className="right">
                {MastersSettings ? <FiChevronDown /> : <FiChevronRight />}
              </span>
            </li>
            {MastersSettings && <li className="sub-sidebar-item">leads</li>}

            {/* {HRM} */}
            <li className="sidebar-item" onClick={() => setHRMopen(!HRM)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                
                
                fill="currentColor"
                className="bi bi-person-badge-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6m5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1z" />
              </svg>
              HRM
              <span className="right">
                {HRM ? <FiChevronDown /> : <FiChevronRight />}
              </span>
            </li>
            {HRM && <li className="sub-sidebar-item">HRM</li>}
            {/* setAssetsopen */}
            <li className="sidebar-item" onClick={() => setAssetsopen(!Assets)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                
                
                fill="currentColor"
                className="bi bi-clipboard-check-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708" />
              </svg>
              Assets Management
              <span className="right">
                {Assets ? <FiChevronDown /> : <FiChevronRight />}
              </span>
            </li>
            {Assets && <li className="sub-sidebar-item">Assets Management</li>}

            {/* PARTICIPANTS */}
            <li className="sidebar-item">PARTICIPANTS</li>
            {/* ItineraryCustomers */}
            <li
              className="sidebar-item"
              onClick={() => setItinararyCustomersopen(!ItineraryCustomers)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
              </svg>
              Itinerary Customers
            </li>

            {/* partners */}
            <li
              className="sidebar-item"
              onClick={() => setpartnerssopen(!partners)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                
                
                fill="currentColor"
                className="bi bi-shop"
                viewBox="0 0 16 16"
                width="16"
                height="16"
              >
                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z" />
              </svg>
              Partners
            </li>

            {/* supplies */}
            <li
              className="sidebar-item"
              onClick={() => setsuppliesopen(!supplies)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                
                
                fill="currentColor"
                className="bi bi-pin-map"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z"
                />
                <path
                  fillRule="evenodd"
                  d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                />
              </svg>
              Supplies
              <span className="right">
                {supplies ? <FiChevronDown /> : <FiChevronRight />}
              </span>
            </li>
            {supplies && <li className="sub-sidebar-item">supplies</li>}
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
