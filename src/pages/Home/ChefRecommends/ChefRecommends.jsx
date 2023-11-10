import SectionTitle from "./../../../components/SectionTitle/SectionTitle";
import img1 from "./../../../assets/home/slide1.jpg";

const ChefRecommends = () => {
  return (
    <div className="py-16">
      <div>
        <SectionTitle subHeading="---Should Try---" heading="CHEF RECOMMENDS" />
      </div>
      <div className="grid md:grid-cols-3 pt-10">
        <div className="w-96">
          <img src={img1} alt="Shoes" className="w-full h-72 object-cover" />
          <div className="flex flex-col justify-center items-center px-5 text-center py-5 space-y-3">
            <h2 className="card-title">Caeser Salad</h2>
            <p className="font-semibold">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions">
              <button className="bg-slate-200 py-3 px-5 rounded-md text-yellow-600 hover:bg-slate-800 uppercase font-bold border-0 border-b-4 border-yellow-600">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="w-96">
          <img src={img1} alt="Shoes" className="w-full h-72 object-cover" />
          <div className="flex flex-col justify-center items-center px-5 text-center py-5 space-y-3">
            <h2 className="card-title">Caeser Salad</h2>
            <p className="font-semibold">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions">
              <button className="bg-slate-200 py-3 px-5 rounded-md text-yellow-600 hover:bg-slate-800 uppercase font-bold border-0 border-b-4 border-yellow-600">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="w-96">
          <img src={img1} alt="Shoes" className="w-full h-72 object-cover" />
          <div className="flex flex-col justify-center items-center px-5 text-center py-5 space-y-3">
            <h2 className="card-title">Caeser Salad</h2>
            <p className="font-semibold">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions">
              <button className="bg-slate-200 py-3 px-5 rounded-md text-yellow-600 hover:bg-slate-800 uppercase font-bold border-0 border-b-4 border-yellow-600">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommends;
