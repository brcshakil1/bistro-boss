const FoodCard = ({ img, title, desc, price }) => {
  return (
    <div className="w-96 shadow-md bg-base-300 relative">
      <img src={img} alt="Shoes" className="w-full h-72 object-cover" />
      {price && (
        <p className="py-1 top-5 right-5 px-3 absolute text-white rounded-md font-semibold text-lg bg-slate-900">
          ${price}
        </p>
      )}
      <div className="flex flex-col justify-center items-center px-5 text-center py-5 space-y-3">
        <h2 className="card-title  uppercase">{title}</h2>
        <p className="font-semibold pb-1">{desc}</p>
        <div className="card-actions">
          <button className="bg-slate-200 py-3 px-5 rounded-md text-yellow-600 hover:bg-slate-800 uppercase font-bold border-0 border-b-4 border-yellow-600">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
