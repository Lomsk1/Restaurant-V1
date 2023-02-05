import {
  faArrowRight,
  faDirections,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuBoxName } from "../title/menu";
import MenuProductBox from "./product";
import Image from "next/image";

interface Props {
  //   children: any;
  category: string;
  productData: any;
}

function MenuContainer({ category, productData }: Props) {
  return (
    <div className="menu_container">
      {/* Images */}
      <div className="image">
        <img
          src="https://restho-nextjs.vercel.app/assets/images/icon/menu-top-left.svg"
          alt=""
        />
      </div>
      <div className="image">
        <img
          src="https://restho-nextjs.vercel.app/assets/images/icon/menu-top-right.svg"
          alt=""
        />
      </div>
      <div className="image">
        <img
          src="https://restho-nextjs.vercel.app/assets/images/icon/menu-btm-right.svg"
          alt=""
        />
      </div>
      <div className="image">
        <img
          src="https://restho-nextjs.vercel.app/assets/images/icon/menu-btm-left.svg"
          alt=""
        />
      </div>

      <MenuBoxName title={category} />

      <div className="box_container">
        {productData &&
          productData.map((data: any) => (
            <MenuProductBox
              key={data.id}
              id={data.id}
              productName={data.name}
              price={data.price}
              ingredients={data.ingredients}
              image={data.image}
            />
          ))}
      </div>
    </div>
  );
}

export default MenuContainer;
