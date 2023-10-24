import '../styles/components/_SuccessPass.scss';
import { NavLink } from 'react-router-dom';
const SuccessPass = () => {
  return (
    <div className="form">
      <div className="form__msg">
        <NavLink to="/">
          <img src="/outright.svg" alt="outright-logo" />
        </NavLink>
        <h2>به اوت رایت خوش آمدید!</h2>
        <p>لطفا اطلاعات خود را وارید نمایید</p>
      </div>
      <div className="form__redirect">
        <NavLink to="/auth/login"> ورود به حساب</NavLink>
      </div>
    </div>
  );
};

export default SuccessPass;
