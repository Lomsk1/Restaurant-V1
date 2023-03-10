// "use client";

import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

// import { useRouter } from "next/router";

function Footer() {
  //   const router = useRouter();

  const partners = [
    {
      id: 1,
      image:
        "https://www.lomsk1.dev/assets/Capture-removebg-preview.9db3cc18.png",
      url: "https://www.lomsk1.dev/",
    },
    {
      id: 2,
      image: "https://preview.colorlib.com/theme/electro/img/logo.png",
      url: "https://lomskproject.in/",
    },
  ];
  return (
    <section className="footer">
      {/* Partners */}
      <div className="partners">
        {partners &&
          partners.map((data) => (
            <Link key={data.id} href={data.url} target={"_blank"}>
              <img src={data.image} alt="" />
            </Link>
          ))}
      </div>

      <hr />

      {/* Information */}
      <div className="information">
        <div className="about_us">
          <h2>About Us</h2>
          <p>
            Restaurant metus dibus eudui aolicitudin istique lacus in the
            vestibulum congue est vitae maximus duru ne lacus in massa tristique
            aharetra ne ut isum.
          </p>
        </div>
        <div className="contact">
          <div className="logo">
            <img
              src="https://image.spreadshirtmedia.com/image-server/v1/compositions/T129A2PA4172PT32X34Y0D1023468618W4233H5080/views/1,width=550,height=550,appearanceId=2,backgroundColor=000000,noPt=true/skull-with-chefs-hat-and-crossed-knives-baseball-cap.jpg"
              alt=""
            />
          </div>
          <div className="icons">
            <FontAwesomeIcon icon={faSquare} />
            <FontAwesomeIcon icon={faSquare} />
            <FontAwesomeIcon icon={faSquare} />
          </div>

          <h2>Contact Info</h2>
          <p>1616 Broadway NY, New York 10001</p>
          <p>United States of America</p>
          <p>
            <span>Booking Request : +995 599 39 10 80</span>
          </p>
          <p>Open : 09:00 am - 01:00 pm</p>
          <a href="mailto:info@lomsk1.dev">info@lomsk1.dev</a>
        </div>
        <div className="social">
          <div className="box">
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div className="box">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
        </div>
      </div>

      <hr />

      {/* Copyright */}
      <div className="copyright">
        <p>
          ?? Copyright 2023 by Giorgi Lomsianidze [
          <Link target={"_blank"} href="https://www.lomsk1.dev/">
            https://www.lomsk1.dev
          </Link>
          ]
        </p>
      </div>
    </section>
  );
}

export default Footer;
