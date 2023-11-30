import '../styles/components/_footer.scss';

const footer = () => {
  return (
    <div className="footer">
      <div className="footer__title">
        <img src="/outright.svg" alt="outright-logo" />
        <h2>اوت رایت</h2>
      </div>
      <div className="footer__desc">
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
          درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها..
        </p>
      </div>
      <div className="footer__links">
        <div className="btn">بلاگ</div>
        <div className="btn">پشتیبانی</div>
        <div className="btn">سفارشات</div>
        <div className="btn">داشبورد</div>
      </div>
    </div>
  );
};

export default footer;
