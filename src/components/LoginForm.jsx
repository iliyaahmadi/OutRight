import '../styles/components/_LoginForm.scss';
import { NavLink } from 'react-router-dom';
const LoginForm = () => {
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
        <input type="text" placeholder="آدرس ایمیل" />
        <input type="password" placeholder="پسورد خود را وارد نمایید" />
      </div>
      <div className="form__submit">
        <div className="login">ورود</div>
        <div className="forget">
          <NavLink to="/auth/forgotpassword">فراموشی رمز</NavLink>
        </div>
      </div>
      <div className="form__register">
        <p>
          هنوز ثبت نام نکردید؟ <a href="/auth">ثبت نام کنید</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
