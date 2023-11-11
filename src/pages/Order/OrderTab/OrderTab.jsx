import FoodCard from "../../Shared/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const OrderTab = ({ food }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid md:grid-cols-3 gap-5 py-10">
            {food.slice(0, 6).map((item) => (
              <FoodCard
                key={item._id}
                img={item.image}
                title={item.category}
                desc={item.recipe}
                price={item.price}
              />
            ))}
          </div>
        </SwiperSlide>
        {food.length > 6 && (
          <SwiperSlide>
            <div className="grid md:grid-cols-3 gap-5 py-10">
              {food.slice(6, 12).map((item) => (
                <FoodCard
                  key={item._id}
                  img={item.image}
                  title={item.category}
                  desc={item.recipe}
                  price={item.price}
                />
              ))}
            </div>
          </SwiperSlide>
        )}
        {food.length > 12 && (
          <SwiperSlide>
            <div className="grid md:grid-cols-3 gap-5 py-10">
              {food.slice(12, 18).map((item) => (
                <FoodCard
                  key={item._id}
                  img={item.image}
                  title={item.category}
                  desc={item.recipe}
                  price={item.price}
                />
              ))}
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default OrderTab;
