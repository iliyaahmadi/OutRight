import '../styles/components/_latest.scss';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import mortalkombat from '../assets/img/mk-p.jpg';
import payday from '../assets/img/payd-p.jpg';
import fifa from '../assets/img/fifa-p.jpg';
import gow from '../assets/img/gow-p.jpg';
import pubg from '../assets/img/pubg-p.jpg';
import SwiperNavButton from './swipernavbtn';
const latest = () => {
  const data = [
    {
      id: 1,
      name: 'mortalkombat',
      img: mortalkombat,
    },
    {
      id: 2,
      name: 'payday',
      img: payday,
    },
    {
      id: 3,
      name: 'fifa',
      img: fifa,
    },
    {
      id: 4,
      name: 'gow',
      img: gow,
    },
    {
      id: 5,
      name: 'pubg',
      img: pubg,
    },
    {
      id: 6,
      name: 'mortalkombat',
      img: mortalkombat,
    },
    {
      id: 7,
      name: 'payday',
      img: payday,
    },
    {
      id: 8,
      name: 'fifa',
      img: fifa,
    },
  ];

  return (
    <div className="latest">
      <div className="latest__top">
        <h2>جدید ترین بازی ها</h2>
        <div className="btns">
          <svg
            onClick={() => swiper.slidePrev()}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9 6.39991L14.5 10M14.5 10L10.9 13.6M14.5 10L5.5 10M19 11.8L19 8.2C19 5.67973 19 4.41964 18.5095 3.457C18.0781 2.61028 17.3897 1.92187 16.543 1.4905C15.5804 1 14.3203 1 11.8 1L8.2 1C5.67977 1 4.41965 1 3.45704 1.4905C2.61032 1.92187 1.9219 2.61028 1.49047 3.457C0.999999 4.41964 0.999999 5.67973 1 8.2L1 11.8C1 14.3202 1 15.5804 1.49047 16.543C1.9219 17.3897 2.61032 18.0781 3.45704 18.5095C4.41965 19 5.67977 19 8.2 19L11.8 19C14.3203 19 15.5804 19 16.543 18.5095C17.3897 18.0781 18.0781 17.3897 18.5095 16.543C19 15.5804 19 14.3202 19 11.8Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            onClick={() => swiper.slideNext()}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.1 13.6001L5.5 10M5.5 10L9.1 6.4M5.5 10L14.5 10M1 8.2L1 11.8C1 14.3203 1 15.5804 1.4905 16.543C1.92187 17.3897 2.61028 18.0781 3.457 18.5095C4.41964 19 5.67973 19 8.2 19L11.8 19C14.3202 19 15.5804 19 16.543 18.5095C17.3897 18.0781 18.0781 17.3897 18.5095 16.543C19 15.5804 19 14.3203 19 11.8L19 8.2C19 5.67977 19 4.41965 18.5095 3.45704C18.0781 2.61032 17.3897 1.9219 16.543 1.49047C15.5804 1 14.3202 1 11.8 1L8.2 1C5.67973 0.999999 4.41964 0.999999 3.457 1.49047C2.61028 1.9219 1.92187 2.61032 1.4905 3.45704C1 4.41965 1 5.67977 1 8.2Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="latest__items">
        <Swiper
          className="wrapper"
          modules={[Navigation]}
          navigation
          spaceBetween={43}
          slidesPerView="auto"
        >
          {data.map((data) => {
            return (
              <SwiperSlide key={data.id} className="latestCard">
                <img src={data.img} alt={data.name} />
              </SwiperSlide>
            );
          })}
          <SwiperNavButton />
        </Swiper>
      </div>
    </div>
  );
};

export default latest;

{
  /* <img src="/src/assets/img/mk-p.jpg" alt="product" />
<img src="/src/assets/img/payd-p.jpg" alt="product" />
<img src="/src/assets/img/fifa-p.jpg" alt="product" />
<img src="/src/assets/img/gow-p.jpg" alt="product" />
<img src="/src/assets/img/pubg-p.jpg" alt="product" /> */
}
