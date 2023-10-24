import { Outlet } from 'react-router-dom';
import '../styles/pages/_auth.scss';

function auth() {
  return (
    <div className="auth">
      <div className="auth__form">
        <Outlet />
      </div>
      <div className="auth__img"></div>
      <div className="overlay"></div>
    </div>
  );
}

export default auth;
