import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RotateText from "../rotate_text/index";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

function HomePageAbout() {
  return (
    <section className="home_section_three">
      {/* Text */}
      <div className="text_container">
        <p>OUR STORY</p>
        <hr />
        <h2>Every Flavor Tells a Story</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printingand typesetting
          industry lorem Ipsum has been the industrys standard dummy text ever
          since the when an unknown printer took a galley of type and scrambled
          it to make a type specimen book It has survived not only five
          centuries, but also the leap into.
        </p>

        <p>
          <FontAwesomeIcon icon={faUtensils} /> Reservation
        </p>
        <p>+995 599 39 10 80</p>
      </div>

      {/* Image */}
      <div className="image_container">
        <img
          src="https://mediacity.co.in/delici/static/media/image-1.661483ecb5620eb91605.jpg"
          alt=""
        />
        <RotateText
          text={"• QUALITY FOOD • FRESH ENVIRONMENT"}
          className="rotate_text"
          innerText="SINCE 1950"
        />
        <div className="coffee">
          <img
            src="https://mediacity.co.in/delici/static/media/bg-3.b3be8b2e8a3d049196ab.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default HomePageAbout;
