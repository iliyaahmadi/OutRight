import '../styles/components/_giftcard.scss';

const giftcard = () => {
  return (
    <div className="giftcards">
      <div className="giftcards__card">
        <img
          className="epic"
          src="/src/assets/img/epicBG.png"
          alt="epicgamesBG"
        />
        <div className="logo">
          <img src="/src/assets/img/epic.png" alt="epicgames" />
        </div>
        <div className="desc">
          <div className="desc__title">
            <h2>اپیک گیمز</h2>
          </div>
          <div className="desc__type">
            <p>گیفت کارت</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
            >
              <circle cx="19" cy="19" r="19" fill="#383545" />
              <path
                d="M22.5388 12.4201C22.1921 12.0734 21.6331 12.0734 21.2864 12.4201L15.4067 18.2998C15.1307 18.5758 15.1307 19.0215 15.4067 19.2975L21.2864 25.1772C21.6331 25.5239 22.1921 25.5239 22.5388 25.1772C22.8855 24.8305 22.8855 24.2716 22.5388 23.9249L17.4161 18.7951L22.5459 13.6654C22.8855 13.3257 22.8855 12.7597 22.5388 12.4201Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="giftcards__card">
        <img
          className="steam"
          src="/src/assets/img/steamBG.png"
          alt="steamBG"
        />
        <div className="logo">
          <img src="/src/assets/img/steam.png" alt="steam" />
        </div>
        <div className="desc">
          <div className="desc__title">
            <h2>استیم</h2>
          </div>
          <div className="desc__type">
            <p>گیفت کارت</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
            >
              <circle cx="19" cy="19" r="19" fill="#383545" />
              <path
                d="M22.5388 12.4201C22.1921 12.0734 21.6331 12.0734 21.2864 12.4201L15.4067 18.2998C15.1307 18.5758 15.1307 19.0215 15.4067 19.2975L21.2864 25.1772C21.6331 25.5239 22.1921 25.5239 22.5388 25.1772C22.8855 24.8305 22.8855 24.2716 22.5388 23.9249L17.4161 18.7951L22.5459 13.6654C22.8855 13.3257 22.8855 12.7597 22.5388 12.4201Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="giftcards__card">
        <img
          className="ps"
          src="/src/assets/img/psBG.png"
          alt="playstationBG"
        />
        <div className="logo">
          <img src="/src/assets/img/ps.png" alt="epicgames" />
        </div>
        <div className="desc">
          <div className="desc__title">
            <h2>پلی استیشن</h2>
          </div>
          <div className="desc__type">
            <p>گیفت کارت</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
            >
              <circle cx="19" cy="19" r="19" fill="#383545" />
              <path
                d="M22.5388 12.4201C22.1921 12.0734 21.6331 12.0734 21.2864 12.4201L15.4067 18.2998C15.1307 18.5758 15.1307 19.0215 15.4067 19.2975L21.2864 25.1772C21.6331 25.5239 22.1921 25.5239 22.5388 25.1772C22.8855 24.8305 22.8855 24.2716 22.5388 23.9249L17.4161 18.7951L22.5459 13.6654C22.8855 13.3257 22.8855 12.7597 22.5388 12.4201Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="giftcards__card">
        <img className="xbox" src="/src/assets/img/xBoxBG.png" alt="xboxBG" />
        <div className="logo">
          <img src="/src/assets/img/xBox.png" alt="xBox" />
        </div>
        <div className="desc">
          <div className="desc__title">
            <h2>ایکس باکس</h2>
          </div>
          <div className="desc__type">
            <p>گیفت کارت</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
            >
              <circle cx="19" cy="19" r="19" fill="#383545" />
              <path
                d="M22.5388 12.4201C22.1921 12.0734 21.6331 12.0734 21.2864 12.4201L15.4067 18.2998C15.1307 18.5758 15.1307 19.0215 15.4067 19.2975L21.2864 25.1772C21.6331 25.5239 22.1921 25.5239 22.5388 25.1772C22.8855 24.8305 22.8855 24.2716 22.5388 23.9249L17.4161 18.7951L22.5459 13.6654C22.8855 13.3257 22.8855 12.7597 22.5388 12.4201Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default giftcard;
