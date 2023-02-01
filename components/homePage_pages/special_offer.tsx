import SliderSpecial from "../slider_special/index";
import HomeTitle from "../title/home";

function HomePageSpecialOffer() {
  return (
    <section className="home_section_six ">
      {/* Decoration */}
      <div className="decoration"></div>
      <div className="decoration"></div>

      {/* Information */}

      <HomeTitle section="SPECIAL OFFER" title="Best Specialties" />

      {/* Slider */}
      <div className="slider_box">
        <SliderSpecial />
      </div>
    </section>
  );
}

export default HomePageSpecialOffer;
