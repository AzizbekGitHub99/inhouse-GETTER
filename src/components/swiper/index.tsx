"use client";
import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "../productCard";

import "./swiper.scss";

const SwiperDis = () => {
  const slides = Array.from({ length: 10 }).map(
    (el, index) => `Slide ${index + 1}`
  );
  return (
    <Fragment>
      <Swiper
        loop={true}
        navigation={true}
        slidesPerView={5}
        spaceBetween={30}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        className="mySwiper swiper__container"
      >
        {slides.map((el, i) => (
          <SwiperSlide key={i}>
            <ProductCard key={i} dis={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default SwiperDis;