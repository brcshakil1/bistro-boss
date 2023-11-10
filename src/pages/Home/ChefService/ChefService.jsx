import img from "../../../assets/home/chef-service.jpg";
const ChefService = () => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="p-20 bg-fixed bg-cover my-14"
    >
      <div className="bg-base-200 py-16 px-20 text-center">
        <h2 className="text-5xl pb-5">Bistro boss</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default ChefService;
