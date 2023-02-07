import { NextPage } from "next";
import { chefData } from "../page";
import HomeTitle from "@/components/title/home";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

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
  return (
    <>
      <section className="chef_details_section_one">
        <div className="filter"></div>
        <HomeTitle section="Chef Detail Section" title="Chef Details" />
      </section>
      {chefData
        .filter((data: Props) => data.id === Number(params.slug))
        .map((data) => (
          <>
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
          </>
        ))}
    </>
  );
}
