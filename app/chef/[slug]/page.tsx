import { NextPage } from "next";
import { chefData } from "../page";
import HomeTitle from "@/components/title/home";
import Link from "next/link";

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
                    <p>
                      Department: <span>{data.title}.</span>
                    </p>
                    <p>
                      Experience: <span>{data.experience} Years.</span>
                    </p>
                    <p>
                      Phone: <span>{data.phone}</span>
                    </p>
                    <p>
                      Email:
                      <span>
                        <Link href={`mailto:${data.email}`}>{data.email}</Link>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="image"></div>
              </div>
            </section>
          </>
        ))}
    </>
  );
}

// const ChefDetail: NextPage<Props> = (props) => {
//   // using destructuring to get username
//   const { name } = props;

//   return <>{chefData.filter((data: Props) => data.id === params)}</>;
// };

// // export component
// export default ChefDetail;
