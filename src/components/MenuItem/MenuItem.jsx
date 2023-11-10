const MenuItem = ({ item }) => {
  return (
    <div className="flex gap-5 pb-6">
      <img
        src={item?.image}
        alt={item?.name}
        className="w-[118px] h-[104px] rounded-tl-0 rounded-tr-full rounded-br-full rounded-bl-full "
      />
      <div className="py-2">
        <div className="flex justify-between">
          <h3 className="text-xl text-[#151515]">{item?.name} -------------</h3>
          <p className="text-yellow-600 text-xl">${item?.price}</p>
        </div>
        <p className="text-[#737373]">{item?.recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
