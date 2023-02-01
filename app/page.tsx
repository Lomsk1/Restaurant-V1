import HomePageAbout from "@/components/homePage_pages/about";
import HomePageChef from "@/components/homePage_pages/chef";
import HomePageEvent from "@/components/homePage_pages/event";
import HomePageMenu from "@/components/homePage_pages/menu";
import HomepageMenu from "@/components/homePage_pages/menus";
import HomePageSpecialDish from "@/components/homePage_pages/special_dish";
import HomePageSpecialOffer from "@/components/homePage_pages/special_offer";
import HomePageStrength from "@/components/homePage_pages/strength";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export default function Home() {
  return (
    <main>
      <section className="home_section_one">
        <div className="information">
          <p>Welcome to Lomsk1's restaurant</p>
          <hr />
          <h1>For the love of delicious food</h1>
          <p>
            Come with family & feel the joy of <span>Special</span> dishes
          </p>
        </div>
        <div className="table_book_rotate"></div>
        <div className="table_book">
          <div className="image">
            <img
              src="https://image.spreadshirtmedia.com/image-server/v1/compositions/T129A2PA4172PT32X34Y0D1023468618W4233H5080/views/1,width=550,height=550,appearanceId=2,backgroundColor=000000,noPt=true/skull-with-chefs-hat-and-crossed-knives-baseball-cap.jpg"
              alt=""
            />
          </div>
          <p>Book Now!</p>
        </div>
      </section>

      <HomepageMenu />

      <HomePageAbout />

      <HomePageSpecialDish />

      <HomePageMenu />

      <HomePageSpecialOffer />

      <HomePageChef />

      <HomePageStrength />

      <HomePageEvent />
    </main>
  );
}
