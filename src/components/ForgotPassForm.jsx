import '../styles/components/_ForgotPassForm.scss';
import { NavLink } from 'react-router-dom';
const ForgotPassForm = () => {
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
        <input type="text" placeholder="شماره تلفن خود را وارد نمایید" />
      </div>
      <div className="form__submit">
        <NavLink to="/auth/verify"> ارسال کد</NavLink>
      </div>
    </div>
  );
};

export default ForgotPassForm;
