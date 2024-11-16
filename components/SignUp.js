  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import './SignUp.css';

  const SignUp = ({ onLogin }) => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [signupCredentials, setSignupCredentials] = useState({
      name: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    });
    const [isSignUp, setIsSignUp] = useState(false);
    const [emailValid, setEmailValid] = useState(true);
    const [passwordStrength, setPasswordStrength] = useState('');
    const [usernameValid, setUsernameValid] = useState(true);
    const [emailLengthValid, setEmailLengthValid] = useState(true);

    const navigate = useNavigate();

    const handleChangeLogin = (e) => {
      setCredentials({
        ...credentials,
        [e.target.name]: e.target.value,
      });
    };

    const handleChangeSignUp = (e) => {
      const { name, value } = e.target;
      setSignupCredentials({
        ...signupCredentials,
        [name]: value,
      });

      if (name === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailValid(emailRegex.test(value));
        setEmailLengthValid(value.length <= 30); // Check email length
      }

      if (name === 'username') {
        setUsernameValid(value.length <= 12); // Check username length
      }

      if (name === 'password') {
        checkPasswordStrength(value);
      }
    };

    const checkPasswordStrength = (password) => {
      if (password.length < 6) {
        setPasswordStrength('weak');
      } else if (password.length >= 6 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
        setPasswordStrength('strong');
      } else {
        setPasswordStrength('medium');
      }
    };

    const handleLoginSubmit = (e) => {
      e.preventDefault();

      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = existingUsers.find(
        (user) => user.username === credentials.username && user.password === credentials.password
      );

      if (userExists) {
        onLogin();
        navigate('/dashboard');
      } else {
        alert('Invalid username or password.');
      }
    };

    const handleSignUpSubmit = (e) => {
      e.preventDefault();

      if (signupCredentials.password !== signupCredentials.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = existingUsers.some(
        (user) => user.username === signupCredentials.username || user.email === signupCredentials.email
      );

      if (userExists) {
        alert('User with this username or email already exists.');
      } else {
        existingUsers.push(signupCredentials);
        localStorage.setItem('users', JSON.stringify(existingUsers));
        alert('User registered successfully! You can now log in.');
        setIsSignUp(false);
      }
    };

    const toggleForm = () => {
      setIsSignUp(!isSignUp);
    };

    return (
      <div className="auth-container">
        {isSignUp ? (
          <div className="signup-form-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUpSubmit}>
              <div className="form-input-material">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  onChange={handleChangeSignUp}
                  maxLength="12"
                  required
                  className="form-control"
                />
              </div>
              <div className="form-input-material">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChangeSignUp}
                  maxLength={30}
                  required
                  className={`form-control ${!emailValid || !emailLengthValid ? 'invalid' : ''}`}
                />
                {!emailValid && <p className="error-text">Please enter a valid email.</p>}
                {!emailLengthValid && <p className="error-text">Email should be 20 characters or fewer.</p>}
              </div>
              <div className="form-input-material">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={handleChangeSignUp}
                  maxLength={12}
                  required
                  className={`form-control ${!usernameValid ? 'invalid' : ''}`}
                />
                {!usernameValid && <p className="error-text">Username should be 12 characters or fewer.</p>}
              </div>
              <div className="form-input-material">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChangeSignUp}
                  required
                  className="form-control"
                />
                <p className={`password-strength ${passwordStrength}`}>
                  Password strength: {passwordStrength}
                </p>
              </div>
              <div className="form-input-material">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Re-enter Password"
                  onChange={handleChangeSignUp}
                  required
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
            <p>Already have an account? <button onClick={toggleForm}>Login</button></p>
          </div>
        ) : (
          <div className="login-form-container">
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="form-input-material">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={handleChangeLogin}
                  required
                  className="form-control"
                />
              </div>
              <div className="form-input-material">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChangeLogin}
                  required
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <p>Don't have an account? <button onClick={toggleForm}>Sign Up</button></p>
          </div>
        )}
      </div>
    );
  };

  export default SignUp;
