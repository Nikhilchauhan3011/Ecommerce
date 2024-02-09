// Login.js
import React, { useState } from 'react';
import '../ComponentsCss/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginAs, setLoginAs] = useState('customer'); // Default value is 'customer'
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Simple form validation
    if (!username || !password || !loginAs) {
      setError('Please enter both username, password, and select a login type.');
      return;
    }

    // Your more advanced login logic here
    console.log('Logging in:', username, password, 'as', loginAs);

    // Reset error on successful login
    setError('');
  };

  return (
    <div>
      <h1>Logo</h1>
    <div className="login-container">
      <h2 style={{color:'#002333', textDecoration:'underline'}}>Login</h2>
      <form>
        <label>
          <h4 style={{color:'white', marginBottom:'0px'}}>
          Username:
          </h4>
          <br></br>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
        <h4 style={{color:'white', marginBottom:'0px'}}>
          Password:
        </h4>
          <br></br>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <h4 style={{color:'white', marginBottom:'0px'}}>
          Login As:
          </h4>
          <br></br>
          <select
            value={loginAs}
            onChange={(e) => setLoginAs(e.target.value)}
            style={{marginBottom:'32px'}}
          >
            <option value="customer">Customer</option>
            <option value="seller">Seller</option>
          </select>
        </label>
        {error && <p className="error-message">{error}</p>}
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <p className="sign-up-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
    </div>
  );
};

export default Login;
