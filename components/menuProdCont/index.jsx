import Image from "next/image";

function MenuProductContainer() {
  const food = [
    "Tomatoes",
    " green bell pepper",
    " sliced cucumber onion",
    "olives",
    "feta cheese",
  ];
  return (
    <div className="menu_product_container">
      {/* Image */}
      <div className="img_container">
        <img
          src="https://mediacity.co.in/delici/static/media/menu-image-5.82f62d04acb6111c989f.png"
          alt=""
        />
      </div>
      <div className="infos">
        <div className="title">
          <p>Greek Salad</p>
          <p>⫸</p>
          <p>$25.50</p>
        </div>
        <div className="ingredients">
          {food.map((char, i) =>
            food.length - 1 > i ? char + ", " : "and " + char + "."
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuProductContainer;
