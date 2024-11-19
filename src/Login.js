import React from 'react';
import { Input, Button, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.svg';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard'); // Redirect to the Dashboard
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white border border-gray-200 rounded-lg shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={logo} // Replace with your logo
            alt="Logo"
            className="w-16 h-16"
          />
        </div>
        {/* Title */}
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
          Sign In
        </h2>
        {/* Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <Input
              type="email"
              placeholder="Email"
              size="large"
              required
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <Input.Password
              placeholder="Password"
              size="large"
              required
              className="w-full"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <Checkbox>Remember me</Checkbox>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>
          <Button type="primary" htmlType="submit" block>
            Log in
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
