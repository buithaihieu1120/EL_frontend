import React from 'react';
import { AuthForm } from 'components';
import './styles/auth.css';
import useTitle from 'hooks/useTitle';

function Register() {
  useTitle('Đăng ký');
  return (
    <div className="auth">
      <AuthForm type="register" />
    </div>
  );
}

export default Register;
