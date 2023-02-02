"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef, useLayoutEffect } from "react";

import {
  faArrowRight,
  faDirections,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  title: string;
}

function MenuTitle({ title }: Props) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".menu_title_h2",
          start: "top 70%",
          end: "bottom 200px",
          scrub: 1,
        },
      });
      tl.to(".menu_title_h2", { xPercent: 100, opacity: 1 });

      ScrollTrigger.addEventListener("refresh", function () {
        if (document.body.getAttribute("style") === "") {
          document.body.removeAttribute("style");
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className="menu_title" ref={containerRef}>
      <h2 className="menu_title_h2">{title}</h2>
    </div>
  );
}

export default MenuTitle;

export const MenuBoxName = ({ title }: Props) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".menu_title_h3",
          start: "top 70%",
          end: "bottom 200px",
          scrub: 1,
        },
      });
      tl.to(".menu_title_h3", { yPercent: 150, opacity: 1 });

      const iconOne = gsap.timeline({
        scrollTrigger: {
          trigger: ".icon1",
          start: "top 70%",
          end: "bottom 200px",
          scrub: 1,
        },
      });
      iconOne.to(".icon1", { opacity: 1 });

      const iconTwo = gsap.timeline({
        scrollTrigger: {
          trigger: ".icon2",
          start: "top 70%",
          end: "bottom 200px",
          scrub: 1,
        },
      });
      iconTwo.to(".icon2", { opacity: 1 });

      ScrollTrigger.addEventListener("refresh", function () {
        if (document.body.getAttribute("style") === "") {
          document.body.removeAttribute("style");
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className="category_section" ref={containerRef}>
      <FontAwesomeIcon className="icon1" icon={faSquare} />
      <h3 className="menu_title_h3">{title}</h3>
      <FontAwesomeIcon className="icon2" icon={faSquare} />
    </div>
  );
};
