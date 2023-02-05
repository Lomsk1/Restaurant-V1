import Image from "next/image";

function HomePageWelcome() {
  return (
    <section className="home_section_one">
      <div className="information">
        <p>Welcome to Lomsk1&apos;s restaurant</p>
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
            // fill
          />
        </div>
        <p>Book Now!</p>
      </div>
    </section>
  );
}

export default HomePageWelcome;
