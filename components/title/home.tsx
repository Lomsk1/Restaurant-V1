"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef, useLayoutEffect } from "react";

interface Props {
  section: string;
  title: string;
}

function HomeTitle({ section, title }: Props) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".section_", {
        scrollTrigger: {
          trigger: ".section_",
          toggleActions: "restart pause complete pause",
        },
        x: 0,
        duration: 1,
      });
      gsap.to(".title_", {
        scrollTrigger: {
          trigger: ".title_",
          toggleActions: "restart pause complete pause",
        },
        x: 0,
        duration: 1,
      });

      ScrollTrigger.addEventListener("refresh", function () {
        if (document.body.getAttribute("style") === "") {
          document.body.removeAttribute("style");
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className="home_title" ref={containerRef}>
      <p className="section_">{section}</p>
      <Image
        className="logo"
        src="https://mediacity.co.in/delici/static/media/separator.fc5405c5995258e079d7072ed26a6975.svg"
        alt=""
      />
      <h2 className="title_">{title}</h2>
    </div>
  );
}

export default HomeTitle;
