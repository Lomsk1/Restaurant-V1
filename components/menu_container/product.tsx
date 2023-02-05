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
import Image from "next/image";

interface Props {
  image: string;
  price: number;
  productName: string;
  ingredients: string;
  id: number;
}

function MenuProductBox({ image, price, productName, ingredients, id }: Props) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(".menu_box_similar", {
        scrollTrigger: {
          trigger: ".menu_box_similar",
          toggleActions: "restart pause complete reverse",
          start: "top 80%",
          end: "bottom 200px",
        },
        x: 0,
        opacity: 1,
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
    <div className="box" ref={containerRef}>
      <div className="image_box menu_box_similar">
        <Image src={image} alt="" />
      </div>
      <div className="information menu_box_similar">
        <div className="up">
          <p>{productName}</p>
          <FontAwesomeIcon icon={faArrowRight} />
          <p className="price ">$ {price}</p>
        </div>
        <div className="down">
          <p>{ingredients}</p>
        </div>
      </div>
    </div>
  );
}

export default MenuProductBox;
