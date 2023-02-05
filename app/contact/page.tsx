"use client";

import MapBox from "@/components/map";
import HomeTitle from "@/components/title/home";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicMap = dynamic(() => import("../../components/map/index"), {
  ssr: false,
});

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {};
  return (
    <>
      <section className="contact_one">
        <div className="filter"></div>
        <HomeTitle section="ANY QUERY ?" title="Contact Us" />
      </section>

      <section className="contact_two">
        <div className="box">
          <div className="image">
            <img
              src="https://restho-nextjs.vercel.app/assets/images/bg/contact-img-01.png"
              alt=""
            />
          </div>
          <h2>NewYork Branch</h2>
          <hr />
          <div className="text">
            <div className="svg">
              <FontAwesomeIcon icon={faLocationPin} />
            </div>
            <p>Mirpur DOHS, House-167/170, Road No-02, Avenue -01</p>
          </div>
          <div className="text">
            <div className="svg">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <p>+995 599391080</p>
          </div>
          <div className="text">
            <div className="svg">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <p>
              <Link href="mailto:lomsianidzegiorgi123@gmail.com">
                lomsianidzegiorgi123@gmail.com
              </Link>
            </p>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img
              src="https://restho-nextjs.vercel.app/assets/images/bg/contact-img-01.png"
              alt=""
            />
          </div>
          <h2>Italian Branch</h2>
          <hr />
          <div className="text">
            <div className="svg">
              <FontAwesomeIcon icon={faLocationPin} />
            </div>
            <p>Khikhet DOHS, House-169/177, Road No-04, Avenue -02</p>
          </div>
          <div className="text">
            <div className="svg">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <p>+995 599391080</p>
          </div>
          <div className="text">
            <div className="svg">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <p>
              <Link href="mailto:lomsianidzegiorgi123@gmail.com">
                lomsianidzegiorgi123@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="contact_three">
        <div className="container">
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ width: "100%", alignItems: "center" }}
          >
            <HomeTitle section="Contact Us" title="Get In Touch" />
            <div className="form__group field">
              <input
                type="text"
                className="form__field"
                placeholder="Full Name*"
                id="name"
                {...register("name")}
              />
              <label htmlFor="name" className="form__label">
                Full Name*
              </label>
            </div>
            <div className="form__group field">
              <input
                type="email"
                className="form__field"
                placeholder="Email*"
                id="email"
                {...register("email", { required: true })}
              />
              <label htmlFor="email" className="form__label">
                Email*
              </label>
            </div>
            {errors.exampleRequired && <span>This field is required</span>}
            <div className="form__group field">
              <input
                type="text"
                className="form__field"
                placeholder="Number*"
                id="number"
                {...register("number")}
              />
              <label htmlFor="number" className="form__label">
                Number*
              </label>
            </div>
            <textarea placeholder="Message..." {...register("text")} />
            <button type="submit">Submit</button>
            {/* {statusOk && (
              <p className="status" style={{ color: "white" }}>
                {statusOk}
              </p>
            )} */}
            {/* {statusBad && (
              <p className="status" style={{ color: "red" }}>
                {statusBad}
              </p>
            )} */}
          </form>
          <div className="map_container" style={{ display: "none" }}>
            {/* <Suspense fallback={"Loading..."}>
              <DynamicMap />
            </Suspense> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
