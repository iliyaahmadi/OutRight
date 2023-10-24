import '../styles/components/_slider.scss';

function slider() {
  return (
    <div className="slider">
      <div className="slider__main main">
        <div className="main__nav nav">
          <div className="nav__bullets">
            <div className="bullet"></div>
            <div className="bullet active"></div>
            <div className="bullet"></div>
            <div className="bullet"></div>
          </div>
          <div className="nav__btn">
            <svg
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
        <div className="main__img">
          <img src="/src/assets/img/omen.png" alt="SliderImg" />
        </div>
        {/* <div className="main__bg" style={{backgroundColor: "#717784"}}> */}
        <div className="main__bg bg">
          <div className="bg__top">
            <div className="icon">
              <img src="/src/assets/img/riot.png" alt="gameicon" />
            </div>
            <div className="icon">
              <img src="/src/assets/img/valorant.png" alt="gameicon" />
            </div>
            <div className="offer">
              <svg
                width="23"
                height="21"
                viewBox="0 0 23 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.2698 14.2147C19.9854 12.2563 21.33 9.82728 21.33 7.09943C21.33 3.54183 18.2805 1.04477 15.231 1.00066C13.7062 0.97859 12.1815 1.50891 11.165 3.0336C10.1485 1.50891 8.59737 1.00066 7.099 1.00066C4.0495 1.00066 1 3.54183 1 7.09943C1 14.2147 10.1485 19.297 11.165 19.297C11.4487 19.297 12.3661 18.901 13.5413 18.1753C13.9653 17.9134 14.4229 17.6087 14.8964 17.2641"
                  stroke="#2E25BD"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>فروش ویژه</p>
            </div>
          </div>
          <div className="bg__content">
            <h2>ولورانت پوینت</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است...
            </p>
          </div>
          <div className="bg__bottom">
            <div className="btn">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.77561 0.524946C3.80587 5.74145e-08 5.15455 0 7.85192 0H13.1498C15.8472 0 17.1959 5.74145e-08 18.2262 0.524946C19.1324 0.986692 19.8692 1.7235 20.3309 2.62974C20.8559 3.66 20.8559 5.00868 20.8559 7.70605V13.004C20.8559 15.7014 20.8559 17.05 20.3309 18.0803C19.8692 18.9865 19.1324 19.7233 18.2262 20.185C17.1959 20.71 15.8472 20.71 13.1498 20.71H7.85192C5.15455 20.71 3.80587 20.71 2.77561 20.185C1.86937 19.7233 1.13257 18.9865 0.67082 18.0803C0.145874 17.05 0.145874 15.7014 0.145874 13.004V7.70605C0.145874 5.00868 0.145874 3.66 0.67082 2.62974C1.13257 1.7235 1.86937 0.986692 2.77561 0.524946ZM10.0484 7.01271C10.3306 6.73059 10.3306 6.27316 10.0484 5.99103C9.76629 5.7089 9.30894 5.7089 9.0268 5.99104L5.17375 9.84409C4.89162 10.1262 4.89162 10.5837 5.17375 10.8658L9.0268 14.7188C9.30894 15.001 9.76629 15.001 10.0484 14.7188C10.3306 14.4367 10.3306 13.9792 10.0484 13.6971L7.42872 11.0774H15.3172C15.7161 11.0774 16.0396 10.754 16.0396 10.355C16.0396 9.95592 15.7161 9.63256 15.3172 9.63256H7.4287L10.0484 7.01271Z"
                  fill="#2E25BD"
                />
              </svg>
              <p>الان بخرید</p>
            </div>
          </div>
        </div>
      </div>
      <div className="slider__queue queue">
        <div className="queue__item">
          <img
            className="image"
            src="/src/assets/img/fort-p.jpg"
            alt="product"
          />
          <div className="title">
            <h2>باندل بتمن</h2>
            <p>فورتنایت</p>
          </div>
          <img
            src="/src/assets/icons/view.svg"
            alt="view-icon"
            className="icon"
          />
        </div>
        <div className="queue__item">
          <img
            className="image"
            src="/src/assets/img/pubg-p.jpg"
            alt="product"
          />
          <div className="title">
            <h2>انسی پابجی نیو</h2>
            <p>پابجی</p>
          </div>
          <img
            src="/src/assets/icons/view.svg"
            alt="view-icon"
            className="icon"
          />
        </div>
        <div className="queue__item">
          <img
            className="image"
            src="/src/assets/img/fifa-p.jpg"
            alt="product"
          />
          <div className="title">
            <h2>فیفا ۲۴</h2>
            <p>عناوین بازی</p>
          </div>
          <img
            src="/src/assets/icons/view.svg"
            alt="view-icon"
            className="icon"
          />
        </div>
      </div>
    </div>
  );
}

export default slider;
