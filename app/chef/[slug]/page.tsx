import { NextPage } from "next";
import HomeTitle from "@/components/title/home";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Fragment } from "react";

interface Props {
  id: number;
  name: string;
  last_name: string;
  title: string;
  description: string;
  facebook: string;
  linkedin: string;
  instagram: string;
  avatar: string;
  experience: number;
  phone: string;
  email: string;
  skill_description: string;
  sea_food: number;
  soup: number;
  mutton: number;
}

export default function Page({ params }: { params: { slug: string } }) {
  const chefData = [
    {
      id: 1,
      name: "George",
      last_name: "Lomks1",
      title: "Executive Head Chef",
      description:
        "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
      experience: 2,
      phone: "+995 599391080",
      email: "info@lomsk1.dev",
      facebook: "",
      linkedin: "",
      instagram: "",
      avatar:
        "https://mediacity.co.in/delici/static/media/team-1.13ef80b1974630746485.jpg",
      skill_description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
      sea_food: 80,
      soup: 60,
      mutton: 76,
    },
    {
      id: 2,
      name: "Brad",
      last_name: "Pit",
      title: "Executive Head Chef",
      description:
        "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
      experience: 1,
      phone: "+995 599391080",
      email: "info@lomsk1.dev",
      facebook: "",
      linkedin: "",
      instagram: "",
      avatar:
        "https://mediacity.co.in/delici/static/media/team-2.b5cdd3ec598386d90dc6.jpg",
      skill_description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
      sea_food: 100,
      soup: 20,
      mutton: 76,
    },
    {
      id: 3,
      name: "Nick",
      last_name: "Botch",
      title: "Executive Head Chef",
      description:
        "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
      experience: 6,
      phone: "+995 599391080",
      email: "info@lomsk1.dev",
      facebook: "",
      linkedin: "",
      instagram: "",
      avatar:
        "https://mediacity.co.in/delici/static/media/team-3.b9d6f81ac39cd9ccb9de.jpg",
      skill_description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
      sea_food: 80,
      soup: 60,
      mutton: 76,
    },
    {
      id: 4,
      name: "Gio",
      last_name: "Chkokac",
      title: "Executive Head Chef",
      description:
        "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
      experience: 2,
      phone: "+995 599391080",
      email: "info@lomsk1.dev",
      facebook: "",
      linkedin: "",
      instagram: "",
      avatar:
        "https://mediacity.co.in/delici/static/media/team-1.13ef80b1974630746485.jpg",
      skill_description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
      sea_food: 82,
      soup: 64,
      mutton: 36,
    },
    {
      id: 5,
      name: "Bill",
      last_name: "Gat",
      title: "Chef",
      description:
        "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
      experience: 8,
      phone: "+995 599391080",
      email: "info@lomsk1.dev",
      facebook: "",
      linkedin: "",
      instagram: "",
      avatar:
        "https://mediacity.co.in/delici/static/media/team-2.b5cdd3ec598386d90dc6.jpg",
      skill_description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
      sea_food: 30,
      soup: 20,
      mutton: 56,
    },
    {
      id: 6,
      name: "George",
      last_name: "Bao",
      title: "Chef",
      description:
        "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
      experience: 10,
      phone: "+995 599391080",
      email: "info@lomsk1.dev",
      facebook: "",
      linkedin: "",
      instagram: "",
      avatar:
        "https://mediacity.co.in/delici/static/media/team-1.13ef80b1974630746485.jpg",
      skill_description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
      sea_food: 82,
      soup: 61,
      mutton: 71,
    },
  ];

  return (
    <>
      <section className="chef_details_section_one">
        <div className="filter"></div>
        <HomeTitle section="Chef Detail Section" title="Chef Details" />
      </section>
      {chefData
        .filter((data: Props) => data.id === Number(params.slug))
        .map((data) => (
          <Fragment key={data.id}>
            <section className="chef_details_section_two">
              <div className="container">
                <div className="info">
                  <HomeTitle
                    section="Hello, I'm"
                    title={`${data.name} ${data.last_name}`}
                  />
                  <div className="about">
                    <h3>About Me:</h3>
                    <p>{data.description}</p>
                  </div>

                  <div className="contact_information">
                    <div>
                      <p>
                        Department: <span>{data.title}.</span>
                      </p>
                      <p>
                        Phone: <span>{data.phone}</span>
                      </p>
                    </div>
                    <div>
                      <p>
                        Experience: <span>{data.experience} Years.</span>
                      </p>
                      <p>
                        Email:
                        <span>
                          <Link href={`mailto:${data.email}`}>
                            {data.email}
                          </Link>
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="social">
                    <p>Follow Me: </p>
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
                <div className="image">
                  <img src={data.avatar} alt="" />
                </div>
              </div>
            </section>

            <section className="chef_details_section_three">
              <div className="container">
                <h2>My Skills:</h2>

                <p>{data.skill_description}</p>

                <label htmlFor="">Sea Food:</label>
                <div className="box">
                  <div
                    className="progress"
                    style={{ width: `${data.sea_food}%` }}
                  >
                    <p>{data.sea_food}%</p>
                  </div>
                </div>

                <label htmlFor="">Soup Item:</label>
                <div className="box">
                  <div className="progress" style={{ width: `${data.soup}%` }}>
                    <p>{data.soup}%</p>
                  </div>
                </div>

                <label htmlFor="">Mutton Bireyani:</label>
                <div className="box">
                  <div
                    className="progress"
                    style={{ width: `${data.mutton}%` }}
                  >
                    <p>{data.mutton}%</p>
                  </div>
                </div>
              </div>
            </section>
          </Fragment>
        ))}
    </>
  );
}
