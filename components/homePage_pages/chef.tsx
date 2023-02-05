import Image from "next/image";
import HomeTitle from "../title/home";

function HomePageChef() {
  const info = [
    {
      id: 1,
      url: "https://mediacity.co.in/delici/static/media/team-1.13ef80b1974630746485.jpg",
      name: "George Lomsk1",
      position: "MASTER CHEF",
      text: " Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industrys.",
    },
    {
      id: 2,
      url: "https://mediacity.co.in/delici/static/media/team-2.b5cdd3ec598386d90dc6.jpg",
      name: "Nick Botch",
      position: "MASTER CHEF",
      text: " Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industrys.",
    },
    {
      id: 3,
      url: "https://mediacity.co.in/delici/static/media/team-3.b9d6f81ac39cd9ccb9de.jpg",
      name: "Gio Chkokac",
      position: "CHEF ASSISTANT",
      text: " Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industrys.",
    },
  ];
  return (
    <section className="home_section_seven">
      {/* Title */}
      <HomeTitle section="EXPERIENCED TEAM" title="Meet Our Chef" />

      {/* Info */}

      <div className="info_section">
        {info &&
          info.map((char) => (
            <div key={char.id} className="container">
              <div className="image_box">
                <img src={char.url} alt="" />
              </div>
              <div className="info">
                <h2>{char.name}</h2>
                <p>{char.position}</p>
                <p>{char.text}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default HomePageChef;
