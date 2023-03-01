import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../index.css";
// import required modules
import { Navigation } from "swiper";

const Slider = () => {
  return (
    <div className="flex justify-center pt-40">
      <div className="w-[100%] h-[30rem] rounded-2xl overflow-hidden">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img src="./images/slider/bannerApple.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/slider/bannerWatch.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
