import '../styles/components/_banner.scss';

const banner = () => {
  return (
    <div className="banner">
      <div className="banner__game">
        <img
          className="fort"
          src="/src/assets/img/FortBanner.png"
          alt="Fortnite-Banner"
        />
        <div className="bg">
          <div className="bg__desc">
            <h2>فورتنایت</h2>
            <p>انواع خدمات و خرید های درون برنامه ای فورتنایت...</p>
          </div>
          <div className="bg__view">
            <p>مشاهده و سفارش</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <rect width="25" height="25" rx="5" fill="currentcolor" />
              <path
                d="M15.3401 7.22463C15.0406 6.92512 14.5577 6.92512 14.2582 7.22463L9.17879 12.3041C8.9404 12.5425 8.9404 12.9275 9.17879 13.1659L14.2582 18.2454C14.5577 18.5449 15.0406 18.5449 15.3401 18.2454C15.6396 17.9459 15.6396 17.463 15.3401 17.1635L10.9147 12.7319L15.3462 8.30042C15.6396 8.00703 15.6396 7.51803 15.3401 7.22463Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="banner__game">
        <img
          className="teemo"
          src="/src/assets/img/LolBanner.png"
          alt="Leauge-Banner"
        />
        <div className="bg">
          <div className="bg__desc">
            <h2>لیگ اف لجندز</h2>
            <p>زارائه محصولات و آیتم های بازی لیگ آف لجندز...</p>
          </div>
          <div className="bg__view">
            <p>مشاهده و سفارش</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <rect width="25" height="25" rx="5" fill="currentcolor" />
              <path
                d="M15.3401 7.22463C15.0406 6.92512 14.5577 6.92512 14.2582 7.22463L9.17879 12.3041C8.9404 12.5425 8.9404 12.9275 9.17879 13.1659L14.2582 18.2454C14.5577 18.5449 15.0406 18.5449 15.3401 18.2454C15.6396 17.9459 15.6396 17.463 15.3401 17.1635L10.9147 12.7319L15.3462 8.30042C15.6396 8.00703 15.6396 7.51803 15.3401 7.22463Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default banner;
