import Image from "next/image";
import HomeTitle from "../title/home";

function HomePageEvent() {
  const info = [
    {
      id: 1,
      url: "https://duruthemes.com/demo/html/candore/demo1/img/wine/1.jpg",
      name: "Riscos Malbec",
      ingredients: "Full, Redcurrant, Spice, Chile",
      price: "$25.00",
    },
    {
      id: 2,
      url: "https://duruthemes.com/demo/html/candore/demo1/img/wine/2.jpg",
      name: "Dom Perignon",
      ingredients: "Stylish, Premium, Iconic, Champagne",
      price: "$30.00",
    },
    {
      id: 3,
      url: "https://duruthemes.com/demo/html/candore/demo1/img/wine/3.jpg",
      name: "Amarone Classico",
      ingredients: "Intense, Rich, Spice, Italy",
      price: "$20.00",
    },
    {
      id: 4,
      url: "https://duruthemes.com/demo/html/candore/demo1/img/wine/4.jpg",
      name: "Valle Berta Gavi",
      ingredients: "Clean, Soft, Honeysuckle, Italy",
      price: "$4522.00",
    },
  ];

  const events = [
    {
      id: 1,
      date: "Jan 22",
      title: "FOOD, FLAVOUR",
      text: "Flavour so good you’ll try to eat with your eyes.",
      url: "https://mediacity.co.in/delici/static/media/news-2.7922bda59e3eea7baf0b.jpg",
      active: false,
      exp: true,
    },
    {
      id: 2,
      date: "Fab 15",
      title: "HEALTHY FOOD",
      text: "Flavour so good you’ll try to eat with your eyes.",
      url: "https://mediacity.co.in/delici/static/media/news-1.948acdade9b2be9536c6.jpg",
      active: true,
      exp: false,
    },
    {
      id: 3,
      date: "Aug 01",
      title: "KHINKALI",
      text: "Flavour so good you’ll try to eat with your eyes.",
      url: "https://mediacity.co.in/delici/static/media/news-3.e8361b439b386b039c2b.jpg",
      active: false,
      exp: false,
    },
    
  ];
  return (
    <section className="home_section_nine">
      {/* Wine Component */}
      <div className="wine_components">
        <div className="image">
          <Image
            src="https://duruthemes.com/demo/html/candore/demo1/img/banner3.jpg"
            alt=""
          />
        </div>
        {/* Wine Info */}
        <div className="content">
          <div className="info">
            <p>Lomsk1's WINE BAR</p>
            <h2>Wine Bar Menu</h2>
          </div>
          {info &&
            info.map((data) => (
              <div key={data.id} className="wine_box">
                <div className="image">
                  <Image src={data.url} alt="" />
                </div>
                <div className="product_info">
                  <div className="upper">
                    <p>{data.name}</p>
                  </div>
                  <div className="down">
                    <p>{data.ingredients}</p>
                  </div>
                </div>

                <div className="price">
                  <p>{data.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Title */}
      <HomeTitle title="Upcoming Event" section="RECENT UPDATES" />

      {/* Event */}
      <div className="event_container">
        {events &&
          events.map((data) => (
            <div key={data.id} className="box">
              <div className="image">
                <Image src={data.url} alt="" />
              </div>
              <div className="date">
                <p>{data.date}</p>
              </div>
              <div className="information">
                <h3>{data.title}</h3>
                <p>{data.text}</p>
              </div>

              {/* Exp */}
              {data.exp && (
                <div className="exp">
                  <h3>Expired</h3>
                </div>
              )}
            </div>
          ))}
      </div>
    </section>
  );
}

export default HomePageEvent;
