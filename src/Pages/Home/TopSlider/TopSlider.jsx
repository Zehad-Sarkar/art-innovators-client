import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slider1 from "../../../../src/assets/slider/b1.jpg";
import slider2 from "../../../../src/assets/slider/b2.jpg";
import slider3 from "../../../../src/assets/slider/slider3.jpg";
import slider4 from "../../../../src/assets/slider/slider4.jpg";
import slider5 from "../../../../src/assets/slider/slider5.jpg";

const TopSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="" className="w-full h-[600px]" />
          <div className="w-3/4 mx-auto text-xl text-center text-red-500 -mt-52 ">
            <h3 className="font-bold bg-gray-800">Painting</h3>
            <p>
              Painting is the practice of applying paint, pigment, color or
              other medium to a solid surface. The medium is commonly applied to
              the base with a brush, but other implements, such as knives,
              sponges, and airbrushes, can be used. In art, the term painting
              describes both the act and the result of the action.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" className="w-full h-[600px]" />
          <div className="w-3/4 mx-auto -mt-40 text-xl text-center text-red-500 ">
            <h3 className="font-bold ">Painting</h3>
            <p>
              Painting is the practice of applying paint, pigment, color or
              other medium to a solid surface. The medium is commonly applied to
              the base with a brush, but other implements, such as knives,
              sponges, and airbrushes, can be used. In art, the term painting
              describes both the act and the result of the action.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" className="w-full h-[600px]" />
          <div className="w-3/4 mx-auto text-xl text-center text-red-500 -mt-52 ">
            <h3 className="font-bold ">Painting</h3>
            <p>
              Painting is the practice of applying paint, pigment, color or
              other medium to a solid surface. The medium is commonly applied to
              the base with a brush, but other implements, such as knives,
              sponges, and airbrushes, can be used. In art, the term painting
              describes both the act and the result of the action.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" className="w-full h-[600px]" />
          <div className="w-3/4 mx-auto text-xl text-center text-red-500 -mt-52 ">
            <h3 className="font-bold ">Painting</h3>
            <p>
              Painting is the practice of applying paint, pigment, color or
              other medium to a solid surface. The medium is commonly applied to
              the base with a brush, but other implements, such as knives,
              sponges, and airbrushes, can be used. In art, the term painting
              describes both the act and the result of the action.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" className="w-full h-[600px]" />
          <div className="w-3/4 mx-auto text-xl text-center text-red-500 -mt-52 ">
            <h3 className="font-bold">Painting</h3>
            <p>
              Painting is the practice of applying paint, pigment, color or
              other medium to a solid surface. The medium is commonly applied to
              the base with a brush, but other implements, such as knives,
              sponges, and airbrushes, can be used. In art, the term painting
              describes both the act and the result of the action.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopSlider;
