import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/_navbar.scss';
import NotifModal from './NotifModal';

const navbar = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [notifModal, setnotifModal] = useState(false);

  const showModal = () => {
    !notifModal ? setnotifModal(true) : setnotifModal(false);
    console.log(notifModal);
    return;
  };
  return (
    <div className="navbar">
      <div className="navbar__title">
        {isLogin ? (
          <h2>وقتت بخیر, ایلیا احمدی</h2>
        ) : (
          <h2> به اوت رایت خوش آمدید </h2>
        )}
      </div>
      <div className="navbar__search">
        <label>
          <input type="text" placeholder="جستجو کنید..." />
        </label>
      </div>
      <div className="navbar__left">
        {isLogin ? (
          <div className="tools">
            <div className="cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M8.834 5.262a3.251 3.251 0 016.332 0c-.46-.012-.99-.012-1.618-.012H10.452c-.629 0-1.158 0-1.618.012zM7.25 6.96V8a.75.75 0 101.5 0V6.766a63.925 63.925 0 011.832-.016h2.836c.784 0 1.37.001 1.832.016V8a.75.75 0 001.5 0V6.96a5.25 5.25 0 013.515 3.387c.2.604.26 1.358.385 3.145.143 2.027.196 2.886.055 3.568a5.25 5.25 0 01-3.724 3.995c-.67.188-1.53.195-3.563.195h-2.836c-2.032 0-2.893-.007-3.563-.195a5.25 5.25 0 01-3.724-3.995c-.14-.682-.087-1.54.055-3.568.126-1.787.185-2.54.385-3.145A5.25 5.25 0 017.25 6.959zm.037-1.554a4.75 4.75 0 019.426 0 6.75 6.75 0 014.976 4.47c.267.806.334 1.764.448 3.38v.001l.01.13.01.15c.129 1.833.205 2.916.017 3.827a6.75 6.75 0 01-4.787 5.136c-.896.251-1.981.251-3.818.251H10.432c-1.838 0-2.923 0-3.819-.25a6.75 6.75 0 01-4.787-5.137c-.188-.91-.112-1.994.017-3.826l.01-.15.01-.131c.114-1.617.18-2.575.448-3.381a6.75 6.75 0 014.976-4.47z"
                />
              </svg>
            </div>
            <div className="notif" onClick={() => showModal()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12 1.25a8.069 8.069 0 00-7.912 6.486l-1.254 6.27c-.403 2.013.666 4.037 2.534 4.867a16.1 16.1 0 002.093.761l.104.234a4.853 4.853 0 008.87 0l.104-.234a16.104 16.104 0 002.093-.761c1.868-.83 2.937-2.854 2.534-4.868l-1.254-6.269A8.069 8.069 0 0012 1.25zm3.89 17.008a.751.751 0 00-.158.042c-2.44.628-5.023.628-7.464 0a.75.75 0 00-.157-.042 14.61 14.61 0 01-2.134-.756A2.9 2.9 0 014.305 14.3l1.254-6.27a6.569 6.569 0 0112.882 0l1.254 6.27a2.9 2.9 0 01-1.672 3.202c-.693.308-1.407.56-2.134.756zm-6.441 1.815a16.53 16.53 0 005.102 0 3.354 3.354 0 01-5.102 0z"
                />
              </svg>
            </div>
            {notifModal ? <NotifModal className="notif-modal" /> : null}
            <div className="profile">
              <img src="/src/assets/img/profile.jpg" alt="profile" />
            </div>
          </div>
        ) : (
          <div className="login">
            <div className="login__faq">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
              >
                <path
                  d="M10.35 16.1H12.65V18.4H10.35V16.1ZM11.5 0C5.152 0 0 5.152 0 11.5C0 17.848 5.152 23 11.5 23C17.848 23 23 17.848 23 11.5C23 5.152 17.848 0 11.5 0ZM11.5 20.7C6.4285 20.7 2.3 16.5715 2.3 11.5C2.3 6.4285 6.4285 2.3 11.5 2.3C16.5715 2.3 20.7 6.4285 20.7 11.5C20.7 16.5715 16.5715 20.7 11.5 20.7ZM11.5 4.6C8.9585 4.6 6.9 6.6585 6.9 9.2H9.2C9.2 7.935 10.235 6.9 11.5 6.9C12.765 6.9 13.8 7.935 13.8 9.2C13.8 11.5 10.35 11.2125 10.35 14.95H12.65C12.65 12.3625 16.1 12.075 16.1 9.2C16.1 6.6585 14.0415 4.6 11.5 4.6Z"
                  fill="white"
                />
              </svg>
            </div>
            <NavLink to="/auth">
              {' '}
              <div className="login__btn">ورود / عضویت</div>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default navbar;
