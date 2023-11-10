// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

// swiper css
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "./../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        heading={"ORDER ONLINE"}
        subHeading={"---From 11:00am to 10:00pm---"}
      />
      <div className="py-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-20 text-white">
              Salade
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-20 text-white">
              Pizza
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-20 text-white">
              Soup
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-20 text-white">
              Desserts
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-20 text-white">
              Salade
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
