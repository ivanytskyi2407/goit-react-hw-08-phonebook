import s from './Login.module.css';

export const Login = () => {
  return (
    <div>
      <form className={s.form}>
        <h2>Login</h2>
        <input
          className={s.input}
          type="email"
          id="loginEmail"
          placeholder="Email"
          required
        />
        <input
          className={s.input}
          type="password"
          id="loginPassword"
          placeholder="Password"
          required
        />
        <button type="submit" id="signIn" className={s.btn}>
          sign In
        </button>
      </form>
    </div>
  );
};
