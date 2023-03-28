import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import '../../Css_files/DoctorDashboard.css';
import Calendar from 'react-calendar';

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSignOut = () => {
    // handle sign out logic here
  };

  return (
    <div>
      <div id="sidetop">
        <h1>Welcome, Dr. X</h1>
      </div>

      <div id="sidebar" className={isSidebarOpen ? 'sidebar-open' : ''}>
        <ul>
          <li>
            <img
              src="./img.svg/download.jpg"
              style={{ width: '80px', height: '80px', borderRadius: '50px' }}
            />
          </li>
          <li>
            <NavLink exact to="/doctor-profile" activeClassName="active">
              Home
            </NavLink>
          </li>

          {/* Conditionally render sidebar content based on screen size */}
          {window.innerWidth > 768 && (
            <>
              <li>
                <NavLink to="/doctor-profile/profile" activeClassName="active">
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/doctor-profile/history" activeClassName="active">
                  History
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/doctor-profile/prescriptions"
                  activeClassName="active"
                >
                  Prescriptions
                </NavLink>
              </li>
              <li>
                <button onClick={handleSignOut}>Sign Out</button>
              </li>
            </>
          )}
        </ul>
      </div>

      <div id="sidebarright">
        {/* Show sidebar toggle button on small screens */}
        {window.innerWidth <= 768 && (
          <button onClick={toggleSidebar}>Toggle Sidebar</button>
        )}
        <Calendar />
      </div>
    </div>
  );
};

export default DoctorDashboard;
