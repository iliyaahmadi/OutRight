import '../styles/components/_SignupForm.scss';
import { NavLink } from 'react-router-dom';
import CheckBox from './checkbox';
const SignupForm = () => {
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
        <div>
          <input type="text" placeholder="نام" className="half" />
          <input type="text" placeholder="نام خانوادگی" className="half" />
        </div>
        <input type="text" placeholder="آدرس ایمیل" />
        <input type="password" placeholder="پسورد خود را وارد نمایید" />
        <input type="text" placeholder="شماره موبایل" />
      </div>
      <div className="form__agreement">
        <CheckBox />
        <p>
          کلیه <a href="/rules">قوانین و مقررات</a> را قبول دارم
        </p>
      </div>
      <div className="form__submit">
        <NavLink to="/auth/login">
          <div className="submit">ثبت نام</div>
        </NavLink>
      </div>
    </div>
  );
};

export default SignupForm;
