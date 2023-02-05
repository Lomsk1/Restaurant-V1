import HomeTitle from "@/components/title/home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import HomePageSpecialDish from "@/components/homePage_pages/special_dish";

function Chef() {
  const chefData = [
    {
      id: 1,
      name: "George",
      last_name: "Lomks1",
      title: "Executive Head Chef",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi error nobis alias, necessitatibus quibusdam sapiente?",
      facebook: "",
      linkedin: "",
      instagram: "",
      avatar:
        "https://mediacity.co.in/delici/static/media/team-1.13ef80b1974630746485.jpg",
    },
    {
      id: 2,
      name: "Brad",
      last_name: "Pit",
      title: "Executive Head Chef",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi error nobis alias, necessitatibus quibusdam sapiente?",
      facebook: "",
      linkedin: "",
      instagram: "",
      avatar:
        "https://mediacity.co.in/delici/static/media/team-2.b5cdd3ec598386d90dc6.jpg",
    },
    {
      id: 3,
      name: "Nick",
      last_name: "Botch",
      title: "Executive Head Chef",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi error nobis alias, necessitatibus quibusdam sapiente?",
      facebook: "",
      linkedin: "",
      instagram: "",
      avatar:
        "https://mediacity.co.in/delici/static/media/team-3.b9d6f81ac39cd9ccb9de.jpg",
    },
    {
      id: 4,
      name: "Gio",
      last_name: "Chkokac",
      title: "Executive Head Chef",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi error nobis alias, necessitatibus quibusdam sapiente?",
      facebook: "",
      linkedin: "",
      instagram: "",
      avatar:
        "https://mediacity.co.in/delici/static/media/team-1.13ef80b1974630746485.jpg",
    },
    {
      id: 5,
      name: "Bill",
      last_name: "Gat",
      title: "Chef",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi error nobis alias, necessitatibus quibusdam sapiente?",
      facebook: "",
      linkedin: "",
      instagram: "",
      avatar:
        "https://mediacity.co.in/delici/static/media/team-2.b5cdd3ec598386d90dc6.jpg",
    },
    {
      id: 6,
      name: "George",
      last_name: "Bao",
      title: "Chef",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi error nobis alias, necessitatibus quibusdam sapiente?",
      facebook: "",
      linkedin: "",
      instagram: "",
      avatar:
        "https://mediacity.co.in/delici/static/media/team-1.13ef80b1974630746485.jpg",
    },
  ];
  return (
    <>
      <section className="chef_section_one">
        <div className="filter"></div>
        <HomeTitle section="OUR TEAM" title="Meet Our Chef" />
      </section>

      <section className="chef_section_two">
        {chefData &&
          chefData.map((data) => (
            <div
              key={data.id}
              className="box_"
              style={{ background: `url('${data.avatar}')` }}
            >
              <div className="info">
                <p>
                  {data.name} {data.last_name}
                </p>
                <p>{data.title}</p>
              </div>

              <div className="hover_info">
                <div className="name">
                  <p>
                    {data.name} {data.last_name}
                  </p>
                  <p>{data.title}</p>
                </div>

                <div className="description">
                  <p>{data.description}</p>
                </div>
                <div className="social">
                  <Link href={data.facebook}>
                    <FontAwesomeIcon icon={faFacebookF} color="blue" />
                  </Link>
                  <Link href={data.instagram}>
                    <FontAwesomeIcon icon={faLinkedinIn} color="#0072b1" />
                  </Link>
                  <Link href={data.linkedin}>
                    <FontAwesomeIcon icon={faInstagram} color="#962fbf " />
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </section>

      {/* White  Space */}
      <div className="white_space"></div>

      <HomePageSpecialDish />
    </>
  );
}

export default Chef;
