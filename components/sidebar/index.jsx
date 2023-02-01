"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { faSquare } from "@fortawesome/free-regular-svg-icons";


function SideNavigation() {
  const [navIsShow, setNavIsShow] = useState(false);

  return (
    <>
      {navIsShow ? (
        <div className="nav_container">
          <nav className="side_navigation">
            <div className="close">
              <FontAwesomeIcon
                icon={faX}
                onClick={() => {
                  setNavIsShow(false);
                }}
              />
            </div>
            <div className="logo">
              <img
                src="https://image.spreadshirtmedia.com/image-server/v1/compositions/T129A2PA4172PT32X34Y0D1023468618W4233H5080/views/1,width=550,height=550,appearanceId=2,backgroundColor=000000,noPt=true/skull-with-chefs-hat-and-crossed-knives-baseball-cap.jpg"
                alt=""
              />
            </div>

            <ul>
              <li>
                <FontAwesomeIcon icon={faSquare} />
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faSquare} />
                <Link href={"/"}>Menus</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faSquare} />
                <Link href={"/"}>Recipes</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faSquare} />
                <Link href={"/"}>Our Chefs</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faSquare} />
                <Link href={"/"}>About</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faSquare} />
                <Link href={"/"}>Contact</Link>
              </li>
            </ul>

            <div className="info">
              <h2>Visit Us</h2>
              <p>Narikala St, Tbilisi 9578, Georgia</p>
              <p>Daily : 8.00 am to 10.00 pm</p>
              <p>info@lomsk1.dev</p>

              <FontAwesomeIcon className="middle_svg" icon={faSquare} />

              <span>Booking Request</span>
              <h3>+995 599 39 10 80</h3>
            </div>
          </nav>
        </div>
      ) : (
        <div className="burger_menu">
          <button
            className="menu"
            onClick={() => {
              setNavIsShow(true);
            }}
            aria-label="Main Menu"
          >
            <svg width="100" height="100" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

export default SideNavigation;
