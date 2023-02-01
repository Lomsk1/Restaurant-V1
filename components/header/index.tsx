"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faClock,
  faSquare,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import MotionPathPlugin from "gsap/MotionPathPlugin";
// import { useEffect, useRef } from "react";

// gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 150;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  return (
    <>
      {isVisible && (
        <header className="main_header">
          {/* Information */}
          <div className="information hide_text">
            <div>
              <FontAwesomeIcon icon={faLocationDot} />
              <p>Narikala St, Tbilisi 9578, Georgia</p>
            </div>
            <FontAwesomeIcon className="middle_svg hide_text" icon={faSquare} />
            <div>
              <FontAwesomeIcon icon={faClock} />
              <p>Daily : 8.00 am to 10.00 pm</p>
            </div>
          </div>

          {/* Contact */}
          <div className="contact">
            <div>
              <FontAwesomeIcon icon={faPhone} />
              <p>+995 599 39 10 80</p>
            </div>
            <FontAwesomeIcon className="middle_svg" icon={faSquare} />
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>info@lomsk1.dev</p>
            </div>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
