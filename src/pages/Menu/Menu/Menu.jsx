import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import SectionTitle from "./../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupTmg from "../../../assets/menu/soup-bg.jpg";
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item?.category === "dessert");
  const soup = menu.filter((item) => item?.category === "soup");
  const salad = menu.filter((item) => item?.category === "salad");
  const pizza = menu.filter((item) => item?.category === "pizza");
  const offered = menu.filter((item) => item?.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover img={menuImg} title="our menu" />
      {/* offered menu items */}
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer" />
      {/* Offered menu */}
      <MenuCategory items={offered} />
      <MenuCategory items={dessert} img={dessertImg} title={"dessert"} />
      <MenuCategory items={pizza} img={pizzaImg} title={"pizza"} />
      <MenuCategory items={salad} img={saladImg} title={"salad"} />
      <MenuCategory items={soup} img={soupTmg} title={"soup"} />
    </div>
  );
};

export default Menu;
