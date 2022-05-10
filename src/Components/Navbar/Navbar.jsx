import React, { useState } from "react";
import "./Navbar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import Dropdown1 from "./Dropdown1";
import Dropdown2 from "./Dropdown2";
import Dropdown3 from "./Dropdown3";
import Dropdown4 from "./Dropdown4";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);

  return (
    <div className="nav-bar">
      <div className="first-menu">
        <ul className="nav-menu">
          <div
            className="des items"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <li>
              Destination <FontAwesomeIcon icon={faCaretDown} />
              {dropdown && <Dropdown1 />}
            </li>
          </div>
          <div
            className="exp items"
            onMouseEnter={() => setDropdown2(true)}
            onMouseLeave={() => setDropdown2(false)}
          >
            <li>
              Experience
              <FontAwesomeIcon icon={faCaretDown} />
              {dropdown2 && <Dropdown2 />}
            </li>
          </div>
        </ul>
      </div>
      <img
        className="logo-ptg"
        src="https://cdn.discordapp.com/attachments/957528118778793995/957528185828933702/logo.png"
        alt="logo"
        id="navbarImg"
      />
      <div className="third-menu">
        <ul className="nav-menu">
          <div
            className="gallery items"
            onMouseEnter={() => setDropdown3(true)}
            onMouseLeave={() => setDropdown3(false)}
          >
            <li>
              Gallery
              <FontAwesomeIcon icon={faCaretDown} />
              {dropdown3 && <Dropdown3 />}
            </li>
          </div>
          <div
            className="trav items"
            onMouseEnter={() => setDropdown4(true)}
            onMouseLeave={() => setDropdown4(false)}
          >
            <li>
              Travel
              <FontAwesomeIcon icon={faCaretDown} />
              {dropdown4 && <Dropdown4 />}
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
