import SectionTitle from "./../../../components/SectionTitle/SectionTitle";
import img1 from "./../../../assets/home/slide1.jpg";
import FoodCard from "../../Shared/FoodCard/FoodCard";

const ChefRecommends = () => {
  return (
    <div className="py-16">
      <div>
        <SectionTitle subHeading="---Should Try---" heading="CHEF RECOMMENDS" />
      </div>
      <div className="grid md:grid-cols-3 pt-10">
        {/* <FoodCard
          img={img1}
          title={"Caeser Salad"}
          desc={"If a dog chews shoes whose shoes does he choose?"}
        />
        <FoodCard
          img={img1}
          title={"Caeser Salad"}
          desc={"If a dog chews shoes whose shoes does he choose?"}
        />
        <FoodCard
          img={img1}
          title={"Caeser Salad"}
          desc={"If a dog chews shoes whose shoes does he choose?"}
        /> */}
      </div>
    </div>
  );
};

export default ChefRecommends;
