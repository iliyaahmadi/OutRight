import '../styles/components/_orders.scss';

const orders = () => {
  return (
    <div className="orders">
      <div className="orders__right">
        <h2>چرا اوت رایت؟</h2>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی...
        </p>
      </div>
      <div className="orders__left">
        <h2>سفارشات امروز</h2>
        <div className="status">
          <div className="box">
            <img src="/src/assets/icons/reload.svg" alt="icon" />
            <p>در حال انجام: ۷۵ عدد</p>
          </div>
          <div className="box">
            <img src="/src/assets/icons/check.svg" alt="icon" />
            <p>انجام شده: ۲۲ عدد</p>
          </div>
          <div className="box">
            <img src="/src/assets/icons/setting.svg" alt="icon" />
            <p>در حال بررسی: ۸ عدد</p>
          </div>
        </div>
        <div className="progress">
          <progress value={40} max={100} />
        </div>
      </div>
    </div>
  );
};

export default orders;
