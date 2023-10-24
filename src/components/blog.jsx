import '../styles/components/_blog.scss';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperNavButton from './swipernavbtn';
import BlogCard from './blogcard';
import ac from '../assets/img/ac-blog.png';
import steam from '../assets/img/steam-blog.png';
import fort from '../assets/img/fort-blog.png';

const blog = () => {
  const data = [
    {
      name: 'fort',
      title: 'سیزن جدید فورتنایت !',
      label: 'اخبار بازی',
      img: fort,
    },
    {
      name: 'steam',
      title: 'چگونه ریجن استیم را تغییر دهیم...',
      label: 'آموزشات',
      img: steam,
    },
    {
      name: 'ac',
      title: 'ارائه اساسین کرید جدید',
      label: 'اخبار بازی',
      img: ac,
    },
    {
      name: 'fort',
      title: 'سیزن جدید فورتنایت !',
      label: 'اخبار بازی',
      img: fort,
    },
    {
      name: 'steam',
      title: 'چگونه ریجن استیم را تغییر دهیم...',
      label: 'آموزشات',
      img: steam,
    },
    {
      name: 'ac',
      title: 'ارائه اساسین کرید جدید',
      label: 'اخبار بازی',
      img: ac,
    },
  ];

  return (
    <div className="blog">
      <div className="blog__top">
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
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
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
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="blog__items">
        <Swiper
          className="wrapper"
          modules={[Navigation]}
          navigation
          spaceBetween={50}
          slidesPerView="auto"
        >
          {data.map((data) => {
            return (
              <SwiperSlide className="blog-post">
                <BlogCard {...data} />
              </SwiperSlide>
            );
          })}
          <SwiperNavButton />
        </Swiper>
      </div>
    </div>
  );
};

export default blog;
{
  /* <div className="latest__top">
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
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
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
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</div>
</div> */
}
