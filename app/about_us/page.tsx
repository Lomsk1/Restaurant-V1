import HomeTitle from "@/components/title/home";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function AboutUs() {
  return (
    <>
      <section className="about_us_section_one">
        <div className="filter"></div>
        <HomeTitle section="OUR STORY" title="About Us" />
      </section>

      <section className="about_us_section_two">
        {/* Decorated Images */}
        <div className="bg_img">
          <img
            src="https://mediacity.co.in/delici/static/media/bg-10.69e89c2a9b257a453454.png"
            alt=""
          />
        </div>

        <div className="bg_img">
          <img
            src="https://mediacity.co.in/delici/static/media/bg-11.8d06cfd704ed814d5140.png"
            alt=""
          />
        </div>

        {/* main Content */}

        <HomeTitle section="WHO WE ARE" title="" />

        <div className="we_are">
          <h2>
            A modern restaurant with a menu that will make your mouth water.
            Servicing delicious food <span>since 45 years</span>. Enjoy our
            seasonal menu and experience the beauty of naturalness
          </h2>
        </div>

        <div className="some_information">
          <div className="about">
            <div className="up">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                in cum excepturi culpa, architecto porro. Placeat optio quo
                inventore veniam, ea nisi neque culpa dolores esse officiis
                quaerat cupiditate odio officia quisquam ex voluptatibus quasi
                est voluptas dolorem eligendi fuga!
              </p>
              <div className="signature">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Nguy%E1%BB%85n_V%C4%83n_B%C3%ACnh_%2C_Nguyen_Van_Binh_signature.png"
                  alt=""
                />
              </div>
              <p>George Lomsk1 - Founder</p>
            </div>
            <div className="down">
              <Link
                href={"https://www.youtube.com/watch?v=Q7ZiUWfWibY"}
                target={'_blank'}
                className="round"
              >
                <span className="one"></span>
                <span className="two"></span>
                <span className="three"></span>
                <FontAwesomeIcon icon={faPlay} />
              </Link>
            </div>
          </div>
          <div className="image">
            <img
              src="https://mediacity.co.in/delici/static/media/about-image-2.a142068c275c05af773f.jpg"
              alt=""
            />
          </div>
          <div className="time_table">
            <div className="outline"></div>
            <div className="inline">
              <div>
                <h6>Lunch Time</h6>
                <p>Monday to Sunday</p>
                <p>11.00 am - 2.30pm</p>
              </div>
              <div>
                <h6>Dinner Time</h6>
                <p>Monday to Sunday</p>
                <p>5.30 pm - 11.30 pm</p>
              </div>
              <FontAwesomeIcon icon={faSquare} />
              <div>
                <h6>Contact Us</h6>
                <p>Restaurant St, Delicious City, London 9578, UK</p>
                <p>+995 599-10-80</p>
                <p>info@lomsk1.dev</p>
              </div>
            </div>
          </div>
        </div>
        {/* Statistic */}

        <div className="statistic">
          <div className="box">
            <h3>150+</h3>
            <p>DAILY ORDER</p>
          </div>

          <div className="box">
            <h3>82+</h3>
            <p>SPECIAL DISHES</p>
          </div>

          <div className="box">
            <h3>35+</h3>
            <p>EXPERT CHEF</p>
          </div>

          <div className="box">
            <h3>10+</h3>
            <p>AWARDS WON</p>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="about_us_section_three">
        <div className="cont">
          <div className="image">
            <img
              src="https://mediacity.co.in/delici/static/media/image-5.1d9d00a37ab1ec711c08.jpg"
              alt=""
            />
          </div>
          <div className="info">
            <HomeTitle
              section="35 YEAR OF EXPERIENCE"
              title="Award Winning Chef"
            />
            <p>
              Lorem Ipsum is simply dummy text of the printingand typesetting
              industry lorem Ipsum has been the industrys standard dummy text
              ever since the when an unknown printer took a galley of type.
            </p>
            <div className="signature">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Nguy%E1%BB%85n_V%C4%83n_B%C3%ACnh_%2C_Nguyen_Van_Binh_signature.png"
                alt=""
              />
            </div>
            <p>George Chkokac - Chef</p>
          </div>
        </div>

        <div className="cont">
          <div className="info">
            <HomeTitle
              section="DELIGHTFUL EXPERIENCE"
              title="Dinner, Event or Party?"
            />
            <p>
              Lorem Ipsum is simply dummy text of the printingand typesetting
              industry lorem Ipsum has been the industrys standard dummy text
              ever since the when an unknown printer took a galley of type.
            </p>
          </div>
          <div className="image">
            <img
              src="https://mediacity.co.in/delici/static/media/image-6.442bea90213b2d48463d.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="about_us_section_four">
        <div className="back">
          <img
            src="https://mediacity.co.in/delici/static/media/bg-14.af12a9d9d555907f610a.png"
            alt=""
          />
        </div>
        <HomeTitle
          section="OUR SERVICES"
          title="Exquisite Restaurant in City"
        />
        <div className="service_container">
          <div className="box one">
            <div className="svg">
              <div className="cont">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Noun_48949_-_Delivery.svg/1200px-Noun_48949_-_Delivery.svg.png"
                  alt=""
                />
              </div>
            </div>
            <div className="info">
              <h4>Door Delivery</h4>
              <p>
                Lorem Ipsum is simply dummy printing and typeset industry lorem
                Ipsum has been.
              </p>
            </div>
          </div>
          <div className="box two">
            <div className="svg">
              <div className="cont">
                <img
                  src="http://cdn.onlinewebfonts.com/svg/img_571295.png"
                  alt=""
                />
              </div>
            </div>
            <div className="info">
              <h4>Outdoor Catering</h4>
              <p>
                Lorem Ipsum is simply dummy printing and typeset industry lorem
                Ipsum has been.
              </p>
            </div>
          </div>
          <div className="image">
            <div className="bg"></div>
            <img
              src="https://mediacity.co.in/delici/static/media/service-image.92ab1b7d826d885a0f6c.png"
              alt=""
            />
          </div>
          <div className="box three">
            <div className="svg">
              <div className="cont">
                <img
                  src="https://www.shareicon.net/data/512x512/2016/08/19/816631_food_512x512.png"
                  alt=""
                />
              </div>
            </div>
            <div className="info">
              <h4>Fine Dining</h4>
              <p>
                Lorem Ipsum is simply dummy printing and typeset industry lorem
                Ipsum has been.
              </p>
            </div>
          </div>
          <div className="box four">
            <div className="svg">
              <div className="cont">
                <img src="https://svgsilh.com/svg/147314.svg" alt="" />
              </div>
            </div>
            <div className="info">
              <h4>Banquets Hall</h4>
              <p>
                Lorem Ipsum is simply dummy printing and typeset industry lorem
                Ipsum has been.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
