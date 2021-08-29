import React from 'react';
import { AuthForm } from 'components';
import './styles/auth.css';
import useTitle from 'hooks/useTitle';

function Login() {
  useTitle('Đăng nhập');
  return (
    <div className="auth">
      <AuthForm type="login" />
    </div>
  );
}

export default Login;
