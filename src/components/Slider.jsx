import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../index.css";
// import required modules
import { Navigation } from "swiper";
import LazyLoad from "react-lazy-load";

const Slider = () => {
  return (
    <div className="flex justify-center pt-40">
      <div className="w-[100%] h-[30rem] rounded-2xl overflow-hidden">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <LazyLoad>
              <img src="./images/slider/bannerApple.png" alt="" />
            </LazyLoad>
          </SwiperSlide>
          <SwiperSlide>
            <LazyLoad>
              <img src="./images/slider/bannerWatch.png" alt="" />
            </LazyLoad>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
