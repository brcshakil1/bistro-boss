import { Link } from "react-router-dom";
import MenuItem from "../../../components/MenuItem/MenuItem";
import ViewMenuBtn from "../../../components/ViewMenuBtn/ViewMenuBtn";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({ items, title, img }) => {
  console.log(items, title);
  return (
    <div className="py-10">
      {title && <Cover img={img} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 pt-14">
        {items?.map((item) => (
          <MenuItem key={item?._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={`/order/${title}`}>
          <ViewMenuBtn />
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
