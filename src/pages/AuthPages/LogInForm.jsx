import { useState } from 'react';
import { useDispatch} from 'react-redux';

import { FiLogIn } from 'react-icons/fi';

import { logIn } from 'redux/auth/authOperations';
import css from './AuthForm.module.css';


export default function LogInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const {name, value} = e.target;

    if(name === 'email') {
      setEmail(value)
    }

    if(name === 'password') {
      setPassword(value)
    }
  }

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn({email, password}));
    resetForm()
  }

  const resetForm = () => {
    setPassword('');
    setEmail('');
  };

  return (
    <div className={css.auth__page}>
      <div className={css.box}>
        <div className={css.title}>
          <FiLogIn className={css.icon} />
          <h2 className={css.text}>Log in</h2>
        </div>

        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.field}
            type="text"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={handleInputChange}
          />
          <input
            className={css.field}
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleInputChange}
          />
          <button className={css.btn} type="submit">
            log in to your account
          </button>
        </form>
      </div>
    </div>
  );
}
