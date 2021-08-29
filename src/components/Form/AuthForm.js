import React from 'react';
import './form.css';
import { Link } from 'react-router-dom';

function AuthForm({ type }) {
  return (
    <div className="authForm">
      <span className="authForm__title">Học Tiếng Anh miễn phí</span>
      <form className="authForm__group">
        {type === 'register' && (
          <div className="authForm__item">
            <input id="name" type="text" className="authForm__input" required />
            <label htmlFor="name">Tên người dùng</label>
          </div>
        )}
        <div className="authForm__item">
          <input id="email" type="email" className="authForm__input" required />
          <label htmlFor="email">Email</label>
        </div>
        <div className="authForm__item">
          <input
            id="password"
            type="password"
            className="authForm__input"
            required
          />
          <label htmlFor="password">Mật khẩu</label>
        </div>
        <div className="authForm__item">
          <button type="submit" className="authForm__button">
            {type === 'login' ? 'Đăng nhập' : 'Đăng ký'}
          </button>
        </div>
        {type === 'login' ? (
          <span className="authForm__link">
            Bạn chưa có tài khoản? <Link to="/register"> Đăng ký</Link>
          </span>
        ) : (
          <span className="authForm__link">
            Bạn đã có tài khoản? <Link to="/login"> Đăng nhập</Link>
          </span>
        )}
      </form>
    </div>
  );
}

export default AuthForm;
