import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../components/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu([]);
  const popular = menu.filter((item) => item?.category === "popular");
  // useEffect(() => {
  //   fetch("/menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data?.filter(
  //         (item) => item?.category === "popular"
  //       );
  //       setMenu(popularItems);
  //     });
  // }, []);

  console.log(menu);

  return (
    <section>
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      />
      <div className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {popular?.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="border-b-4 mt-5 text-xl font-semibold rounded-md py-2 px-4 hover:text-white border-slate-800 hover:border-slate-800 hover:bg-slate-800">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularMenu;
