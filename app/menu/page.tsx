import MenuContainer from "@/components/menu_container";
import HomeTitle from "@/components/title/home";
import MenuTitle from "@/components/title/menu";

export default function Menu() {
  const starterData = [
    {
      id: 1,
      name: "Mozzarella Dippers",
      ingredients: "Fried mozzarella sticks, marinara sauce",
      price: "27.00",
      image:
        "https://duruthemes.com/demo/html/candore/demo1/img/menu/starters/1.jpg",
    },
    {
      id: 2,
      name: "Buffalo Wings",
      ingredients: "Spicy chicken wings, blue cheese sauce, carrot, celery",
      price: "30.50",
      image:
        "https://duruthemes.com/demo/html/candore/demo1/img/menu/starters/2.jpg",
    },
    {
      id: 3,
      name: "Onion Rings",
      ingredients: "Fried onion rings, smoked aioli",
      price: "15.00",
      image:
        "https://duruthemes.com/demo/html/candore/demo1/img/menu/starters/3.jpg",
    },
    {
      id: 4,
      name: "Chilli Con Carne",
      ingredients: "Spicy ground beef, bacon, kidney beans",
      price: "20.00",
      image:
        "https://duruthemes.com/demo/html/candore/demo1/img/menu/starters/4.jpg",
    },
    {
      id: 5,
      name: "Mozzarella Dippers",
      ingredients: "Fried mozzarella sticks, marinara sauce",
      price: "27.00",
      image:
        "https://duruthemes.com/demo/html/candore/demo1/img/menu/starters/1.jpg",
    },
  ];
  return (
    <>
      <section className="menu_section_one">
        <div className="filter"></div>
        <HomeTitle title="Our Menu" section="DELICIOUS & AMAZING" />
      </section>
      <section className="menu_section_two">
        <MenuTitle title="Starter" />
        <MenuContainer productData={starterData} category="Starter" />
      </section>
      <section className="menu_section_two">
        <MenuTitle title="Main Courses" />
        <MenuContainer productData={starterData} category="Main Courses" />
      </section>
      <section className="menu_section_two">
        <MenuTitle title="Salads" />
        <MenuContainer productData={starterData} category="Salads" />
      </section>
      <section className="menu_section_two">
        <MenuTitle title="Desserts" />
        <MenuContainer productData={starterData} category="Desserts" />
      </section>
      <section className="menu_section_two">
        <MenuTitle title="Wine" />
        <MenuContainer productData={starterData} category="Wine" />
      </section>
    </>
  );
}
