import React, { useState } from 'react';
import LoginForm from "../components/LoginForm";

const UserLogin = () => {
  const handleLogin = (credentials) => {
    console.log('User login:', credentials);
    // Add authentication logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">User Login</h1>
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
};

export default UserLogin;
