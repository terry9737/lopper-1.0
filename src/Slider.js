import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import MainContainer from "./components/Layout/MainContainer";
import "./styles/Slider/slider.scss";
import comma from "./images/comma.svg";
import SwiperCore, { Navigation } from "swiper";
import SliderDots from "./components/Slider/SliderDots";
import { SliderData } from "./components/Slider/SliderData";
SwiperCore.use([Navigation]);
const Slider = () => {
  return (
    <>
      <MainContainer>
        {/* <Wrapper> */}
        <Swiper
          className="swiper"
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          grabCursor={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {SliderData.map((slider) => {
            return (
              <SwiperSlide key={slider.id} className="swiper_slide">
                <div className="image_container">
                  <div className="image_container-wrapper">
                    <img src={slider.img} alt="first person" />
                    <img src={comma} className="comma" alt="comma element" />
                  </div>
                </div>
                <p className="swiper_text">{slider.text}</p>
                <p className="swiper_subtext">
                  <span>Kerry Johnes</span> - Some Company
                </p>
                <SliderDots />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* </Wrapper> */}
      </MainContainer>
    </>
  );
};

export default Slider;
