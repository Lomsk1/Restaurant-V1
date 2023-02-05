import Footer from "@/components/footer";
import Header from "@/components/header";
import HomePageAbout from "@/components/homePage_pages/about";
import HomePageChef from "@/components/homePage_pages/chef";
import HomePageEvent from "@/components/homePage_pages/event";
import HomePageMenu from "@/components/homePage_pages/menu";
import HomepageMenu from "@/components/homePage_pages/menus";
import HomePageSpecialDish from "@/components/homePage_pages/special_dish";
import HomePageSpecialOffer from "@/components/homePage_pages/special_offer";
import HomePageStrength from "@/components/homePage_pages/strength";
import HomePageWelcome from "@/components/homePage_pages/welcome";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export default function Home() {
  return (
    <main>
      <HomePageWelcome />

      {/* <HomepageMenu />

      <HomePageAbout />

      <HomePageSpecialDish />

      <HomePageMenu />

      <HomePageSpecialOffer />

      <HomePageChef />

      <HomePageStrength /> */}

      {/* <HomePageEvent /> */}
    </main>
  );
}
