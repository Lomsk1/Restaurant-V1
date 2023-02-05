"use client";

import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import MenuProductContainer from "../menuProdCont/index";
import { useState } from "react";
import HomeTitle from "../title/home";
import Image from "next/image";

function HomePageMenu() {
  const [navIsActive, setNavIsActive] = useState("starter");

  const navChange = (e: any) => {
    setNavIsActive(e.target.value);
  };
  return (
    <section className="home_section_five">
      {/* Animation */}
      <div className="animation_one">
        <img
          src="https://mediacity.co.in/delici/static/media/bg-5.aada0ae02d8a7acdeaf7.png"
          alt=""
        />
      </div>

      {/* Animation */}
      <div className="animation_two">
        <img
          src="https://mediacity.co.in/delici/static/media/bg-6.c1e0ae1fefd7dd68d5c6.png"
          alt=""
        />
      </div>
      {/* Information */}

      <div className="info">
        {/* Title */}
        <HomeTitle section="SPECIAL SELECTION" title="Delicious Menu" />
        {/* Table */}
        <div className="nav">
          <ul>
            <li>
              <label
                // style={{ color: navIsActive === "starter" ? "red" : "#dcf3fd" }}
                htmlFor="starter"
              >
                Starters
              </label>
              {navIsActive === "starter" && (
                <>
                  <hr />
                  <hr />
                </>
              )}

              <input
                type="radio"
                name="menu_nav"
                id="starter"
                value="starter"
                onChange={(e) => {
                  navChange(e);
                }}
              />
            </li>
            <FontAwesomeIcon icon={faSquare} />
            <li>
              <label
                // style={{
                //   color: navIsActive === "main" ? "red" : "#dcf3fd",
                // }}
                htmlFor="main"
              >
                Main
              </label>
              {navIsActive === "main" && (
                <>
                  <hr />
                  <hr />
                </>
              )}
              <input
                type="radio"
                name="menu_nav"
                id="main"
                value="main"
                onChange={(e) => {
                  navChange(e);
                }}
              />
            </li>
            <FontAwesomeIcon icon={faSquare} />

            <li>
              <label
                // style={{ color: navIsActive === "salad" ? "red" : "#dcf3fd" }}
                htmlFor="salad"
              >
                Salads
              </label>
              {navIsActive === "salad" && (
                <>
                  <hr />
                  <hr />
                </>
              )}
              <input
                type="radio"
                name="menu_nav"
                id="salad"
                value="salad"
                onChange={(e) => {
                  navChange(e);
                }}
              />
            </li>
            <FontAwesomeIcon icon={faSquare} />

            <li>
              <label
                // style={{ color: navIsActive === "dessert" ? "red" : "#dcf3fd" }}
                htmlFor="dessert"
              >
                Desserts
              </label>
              {navIsActive === "dessert" && (
                <>
                  <hr />
                  <hr />
                </>
              )}
              <input
                type="radio"
                name="menu_nav"
                id="dessert"
                value="dessert"
                onChange={(e) => {
                  navChange(e);
                }}
              />
            </li>
            <FontAwesomeIcon icon={faSquare} />

            <li>
              <label
                // style={{ color: navIsActive === "wine" ? "red" : "#dcf3fd" }}
                htmlFor="wine"
              >
                Wine
              </label>
              {navIsActive === "wine" && (
                <>
                  <hr />
                  <hr />
                </>
              )}
              <input
                type="radio"
                name="menu_nav"
                id="wine"
                value="wine"
                onChange={(e) => {
                  navChange(e);
                }}
              />
            </li>
          </ul>
        </div>

        {/* Product */}
        <div className="product_table">
          {/* Left Side */}
          <div className="left">
            <MenuProductContainer />
            <MenuProductContainer />
            <MenuProductContainer />
          </div>

          <hr />
          {/* Right Side */}
          <div className="right">
            <MenuProductContainer />
            <MenuProductContainer />
            <MenuProductContainer />
          </div>
        </div>

        <div className="daily">
          <p>Daily: 8.00 am to 10.00 pm</p>
          <Link href={""}>
            <span>View All Menu</span> View All Menu
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomePageMenu;
