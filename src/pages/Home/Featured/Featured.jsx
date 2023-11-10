import SectionTitle from "./../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div
      style={{ backgroundImage: `url(${featuredImg})` }}
      className="  bg-cover bg-[#000000b3] bg-fixed bg-blend-overlay md:mb-16 mb-10"
    >
      <div className="pt-4">
        <SectionTitle
          heading="Featured Item"
          subHeading="---check it out---"
          heading_text={"text-base-200"}
        />
      </div>
      <div className=" md:flex justify-center items-center gap-6 md:px-36 py-12">
        <div>
          <img src={featuredImg} alt="Featured" />
        </div>
        <div className="text-white">
          <p>March 20, 2023</p>
          <h3 className="text-2xl py-2">WHERE CAN I GET SOME?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="border-b-4 mt-5 text-xl font-semibold rounded-md py-3 px-5 hover:border-yellow-600 hover:bg-yellow-600">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
