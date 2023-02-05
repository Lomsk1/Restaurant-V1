import Image from "next/image";
import HomeTitle from "../title/home";

function HomePageStrength() {
  return (
    <section className="home_section_eight">
      <div className="effect"></div>
      <HomeTitle section="WHY CHOOSE US" title="Our Strength" />

      {/* Info */}
      <div className="container">
        <div className="box">
          <div className="image">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/1509/1509483.png"
              alt=""
            />
          </div>
          <div className="info">
            <h3>Hygienic Food</h3>
            <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2082/2082063.png"
              alt=""
            />
          </div>
          <div className="info">
            {" "}
            <h3>Fresh Environment</h3>
            <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/1983/1983171.png"
              alt=""
            />
          </div>
          <div className="info">
            {" "}
            <h3>Skilled Chefs</h3>
            <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <Image
              src="https://iconarchive.com/download/i107741/google/noto-emoji-activities/52707-party-popper.ico"
              alt=""
            />
          </div>
          <div className="info">
            {" "}
            <h3>Event & Party</h3>
            <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePageStrength;
