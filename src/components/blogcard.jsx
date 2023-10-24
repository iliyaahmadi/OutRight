import { SwiperSlide } from 'swiper/react';
import '../styles/components/_blogcard.scss';

const blogcard = (data) => {
  return (
    <div key={data.img} className="blog-post">
      <div className="cover">
        <img src={data.img} alt={data.name} />
      </div>
      <div className="info">
        <div className="title">
          <h3>{data.title}</h3>
        </div>
        <div className="visit">
          <div className="label">{data.label}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <rect width="30" height="30" rx="15" fill="#5E54F8" />
            <path
              d="M18.3391 8.26003C17.9924 7.91332 17.4334 7.91332 17.0867 8.26003L11.207 14.1398C10.931 14.4157 10.931 14.8615 11.207 15.1374L17.0867 21.0172C17.4334 21.3639 17.9924 21.3639 18.3391 21.0172C18.6858 20.6705 18.6858 20.1115 18.3391 19.7648L13.2164 14.6351L18.3462 9.50532C18.6858 9.16569 18.6858 8.59965 18.3391 8.26003Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default blogcard;
