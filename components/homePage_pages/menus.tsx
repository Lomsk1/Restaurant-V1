import Link from "next/link";
import HomeTitle from "../title/home";
import Image from "next/image";

function HomepageMenu() {
  return (
    <section className="home_section_two">
      {/* Ingredients */}
      <div className="ingredients">
        <Image
          src="https://mediacity.co.in/delici/static/media/bg-2.8bae21f85dd8fdf29a8d.png"
          alt=""
        />
      </div>
      <div className="ingredients">
        <Image
          src="https://mediacity.co.in/delici/static/media/bg-1.8f7891ade2cf907c12b1.png"
          alt=""
        />
      </div>
      {/* Main information */}
      <div className="main_info">
        {/* Title */}

        <HomeTitle section="FLAVORS FOR ROYALTY" title="We Offer Top Notch" />

        {/* Container */}
        <div className="box_container">
          {/* Product One */}
          <div className="box">
            <div className="upper">
              <div className="background">
                <Image
                  src="https://i.pinimg.com/736x/8e/72/62/8e72623a00b29382d1e8037ec5be78c4.jpg"
                  alt=""
                />
              </div>
              <div className="img_container">
                <Image
                  src="https://mediacity.co.in/delici/static/media/offer-image-1.c020474aea0ed9a09d2a.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="down">
              <h2>Breakfast</h2>
              <Link href={""}>View Menu</Link>
            </div>
          </div>
          {/* Product Two */}
          <div className="box">
            <div className="upper">
              <div className="background">
                <Image
                  src="https://i.pinimg.com/736x/8e/72/62/8e72623a00b29382d1e8037ec5be78c4.jpg"
                  alt=""
                />
              </div>
              <div className="img_container">
                <Image
                  src="https://mediacity.co.in/delici/static/media/offer-image-2.d655d2ba6f4b2c6f7ac9.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="down">
              <h2>Appetizers</h2>
              <Link href={""}>View Menu</Link>
            </div>
          </div>
          {/* Product Three */}
          <div className="box">
            <div className="upper">
              <div className="background">
                <Image
                  src="https://i.pinimg.com/736x/8e/72/62/8e72623a00b29382d1e8037ec5be78c4.jpg"
                  alt=""
                />
              </div>
              <div className="img_container">
                <Image
                  src="https://mediacity.co.in/delici/static/media/offer-image-3.2220579532c7ff25ef9c.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="down">
              <h2>Drinks</h2>
              <Link href={""}>View Menu</Link>
            </div>
          </div>
          {/* Finished */}
        </div>
      </div>
    </section>
  );
}

export default HomepageMenu;
