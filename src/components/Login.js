import React from "react";
import './login.css'
function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
