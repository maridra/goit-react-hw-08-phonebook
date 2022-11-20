import { useState } from 'react';
import { useDispatch} from 'react-redux';

import { AiFillLock } from 'react-icons/ai';

import { register } from 'redux/auth/authOperations';
import css from './AuthForm.module.css';



export default function SignUpForm() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    }

    if (name === 'password') {
      setPassword(value);
    }

    if (name === 'email') {
      setEmail(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(register({ name, password, email }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setPassword('');
    setEmail('');
  };

  return (
    <div className={css.auth__page}>
      <div className={css.box}>
        <div className={css.title}>
          <AiFillLock className={css.icon} />
          <h2 className={css.text}>Sign up</h2>
        </div>

        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.field}
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={handleInputChange}
          />
          <input
            className={css.field}
            type="email"
            name="email"
            value={email}
            placeholder="Email address"
            onChange={handleInputChange}
          />
          <input
            className={css.field}
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleInputChange}
          />

          <button className={css.btn} type="submit">
            create
          </button>
        </form>
      </div>
    </div>
  );
}
