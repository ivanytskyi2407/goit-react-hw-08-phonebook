import s from './Register.module.css';

export const Register = () => {
  return (
    <div>
      <form className={s.form}>
        <input
          className={s.input}
          type="email"
          id="registerEmail"
          placeholder="Email"
          required
        />
        <input
          className={s.input}
          type="password"
          id="registerPassword"
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
