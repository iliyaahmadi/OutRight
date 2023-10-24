import '../styles/components/_VerifyCodeForm.scss';
import { NavLink } from 'react-router-dom';
const VerifyCodeForm = () => {
  return (
    <div className="form">
      <div className="form__welcome">
        <NavLink to="/">
          <img src="/outright.svg" alt="outright-logo" />
        </NavLink>
        <h2>به اوت رایت خوش آمدید!</h2>
        <p>لطفا اطلاعات خود را وارید نمایید</p>
      </div>
      <div className="form__inputs">
        <input type="text" placeholder="کد ۶ رقمی پیامک شده را وارد نمایید" />
      </div>
      <div className="form__submit">
        <NavLink to="/auth/success"> تایید کد</NavLink>
      </div>
      <div className="form__resend">
        آیا هنوز کد دریافت نکرده اید؟<a href="/auth">ارسال مجدد</a>
      </div>
    </div>
  );
};

export default VerifyCodeForm;
