import '../styles/components/_ProductHeader.scss';

const ProductHeader = () => {
  return (
    <div className="product-header">
      <div className="product-header__img">
        <img src="./src/assets/img/mk-p.jpg" alt="product-image" />
      </div>
      <div className="product-header__info info">
        <div className="info__title">
          <h1>مورتال کمبت 1</h1>
          <span>OR_۱۹۹۵</span>
        </div>
        <div className="info__slug">
          <p>MORTAL KOMBAT 1</p>
        </div>
        <div className="info__rating">
          <div className="stars">
            <img src="./src/assets/icons/star-fill.svg" alt="star" />
            <img src="./src/assets/icons/star-fill.svg" alt="star" />
            <img src="./src/assets/icons/star-fill.svg" alt="star" />
            <img src="./src/assets/icons/star-fill.svg" alt="star" />
            <img src="./src/assets/icons/star.svg" alt="star-empty" />
          </div>
          <p>دارای ۱۳۰۰ نظر</p>
        </div>
        <div className="info__traits">
          <div className="trait">
            <div className="trait__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="26"
                viewBox="0 0 24 26"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0408 0C5.56305 0 0.25 4.57168 0.25 11.1862C0.25 16.2301 2.5061 19.9332 5.06835 22.359C6.34608 23.5687 7.70613 24.4678 8.91705 25.068C10.0979 25.6533 11.2297 26 12.0408 26C12.8519 26 13.9837 25.6533 15.1646 25.068C16.3755 24.4678 17.7356 23.5687 19.0132 22.359C21.5755 19.9332 23.8316 16.2301 23.8316 11.1862C23.8316 4.57168 18.5186 0 12.0408 0ZM15.6687 11.7908C15.6687 13.7945 14.0445 15.4187 12.0408 15.4187C10.0371 15.4187 8.41287 13.7945 8.41287 11.7908C8.41287 9.78716 10.0371 8.16287 12.0408 8.16287C14.0445 8.16287 15.6687 9.78716 15.6687 11.7908Z"
                  fill="#5E54F8"
                />
              </svg>
            </div>
            <div className="trait__info">
              <p className="title">ریجن</p>
              <p className="content">آمریکا</p>
            </div>
          </div>
          <div className="trait">
            <div className="trait__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="26"
                viewBox="0 0 24 26"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0408 0C5.56305 0 0.25 4.57168 0.25 11.1862C0.25 16.2301 2.5061 19.9332 5.06835 22.359C6.34608 23.5687 7.70613 24.4678 8.91705 25.068C10.0979 25.6533 11.2297 26 12.0408 26C12.8519 26 13.9837 25.6533 15.1646 25.068C16.3755 24.4678 17.7356 23.5687 19.0132 22.359C21.5755 19.9332 23.8316 16.2301 23.8316 11.1862C23.8316 4.57168 18.5186 0 12.0408 0ZM15.6687 11.7908C15.6687 13.7945 14.0445 15.4187 12.0408 15.4187C10.0371 15.4187 8.41287 13.7945 8.41287 11.7908C8.41287 9.78716 10.0371 8.16287 12.0408 8.16287C14.0445 8.16287 15.6687 9.78716 15.6687 11.7908Z"
                  fill="#5E54F8"
                />
              </svg>
            </div>
            <div className="trait__info">
              <p className="title">گارانتی </p>
              <p className="content">مادام العمر</p>
            </div>
          </div>
          <div className="trait">
            <div className="trait__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="26"
                viewBox="0 0 24 26"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0408 0C5.56305 0 0.25 4.57168 0.25 11.1862C0.25 16.2301 2.5061 19.9332 5.06835 22.359C6.34608 23.5687 7.70613 24.4678 8.91705 25.068C10.0979 25.6533 11.2297 26 12.0408 26C12.8519 26 13.9837 25.6533 15.1646 25.068C16.3755 24.4678 17.7356 23.5687 19.0132 22.359C21.5755 19.9332 23.8316 16.2301 23.8316 11.1862C23.8316 4.57168 18.5186 0 12.0408 0ZM15.6687 11.7908C15.6687 13.7945 14.0445 15.4187 12.0408 15.4187C10.0371 15.4187 8.41287 13.7945 8.41287 11.7908C8.41287 9.78716 10.0371 8.16287 12.0408 8.16287C14.0445 8.16287 15.6687 9.78716 15.6687 11.7908Z"
                  fill="#5E54F8"
                />
              </svg>
            </div>
            <div className="trait__info">
              <p className="title">تحویل</p>
              <p className="content">آنی پس از خرید</p>
            </div>
          </div>
        </div>
        <div className="info__cat">
          <b>
            دسته بندی : <p>عناوین بازی</p>
          </b>
        </div>
        <div className="info__order">
          <div className="price">۲۵۰.۰۰۰ تا ۵۰۰.۰۰۰ تومان</div>
          <div className="order-btn">
            <div className="notice-btn">
              <img src="./src/assets/icons/star-fill.svg" alt="star" />
            </div>
            <div className="buy-btn">ثبت اطلاعات و خرید</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
