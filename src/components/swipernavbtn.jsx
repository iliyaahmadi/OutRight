import '../styles/components/_swipernavbtn.scss';
import { useSwiper } from 'swiper/react';

const swipernavbtn = () => {
  const swiper = useSwiper();
  return (
    <div>
      <div
        className="swiper-button-prev"
        onClick={() => swiper.slidePrev()}
      ></div>
      <div
        className="swiper-button-next"
        onClick={() => swiper.slideNext()}
      ></div>
    </div>
  );
};

export default swipernavbtn;
