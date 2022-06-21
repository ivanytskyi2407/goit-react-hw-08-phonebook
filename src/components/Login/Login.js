import s from './Login.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperation from 'redux/auth/authOperation';

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperation.login({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          onChange={handleChange}
          name="email"
          className={s.input}
          type="email"
          placeholder="Email"
          required
        />
        <input
          onChange={handleChange}
          value={password}
          name="password"
          className={s.input}
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit" id="signUp" className={s.btn}>
          sign up
        </button>
      </form>
    </div>
  );
};