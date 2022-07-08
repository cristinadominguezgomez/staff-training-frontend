import React from "react";
import { useState } from "react";
import { Auth } from "../../components/Auth";
import { Link } from "react-router-dom";
import { useEmployeeTokenContext } from "../../context/EmployeeTokenContext";
import "../Navbar/style.css";

const Navbar = () => {
  const { employee } = useEmployeeTokenContext();

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav>
      <div className="navigation container">
        <Link to="/">
          <div className="logo">
            <img src="/../images/logo2.WEBP" alt="logo" />
            <p>STAFF TRAINING</p>
          </div>
        </Link>
        <div className={isNavExpanded ? "menu expanded" : "menu"}>
          <ul>
            <li onClick={() => setIsNavExpanded(false)}>
              <Link to="/">HOME</Link>
            </li>
            <li onClick={() => setIsNavExpanded(false)}>
              <Link to="/">ABOUT US</Link>

            </li>
            <li onClick={() => setIsNavExpanded(false)}>
 <Link to="/">CONTACT US</Link>
            
            </li>
            {employee?.role === "admin" && (
              <>
                <li>
                  <Link to="/employees">EMPLOYEES</Link>
                </li>
              </>
            )}
            {employee ? (
              <li>
                <Link to="/exercises">EXERCISES</Link>
              </li>
            ) : null}
          </ul>
          <div onClick={() => setIsNavExpanded(false)}>
          <Auth />

          </div>
        </div>

        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
