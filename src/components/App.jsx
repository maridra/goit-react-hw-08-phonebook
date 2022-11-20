import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { SharedLayout } from 'components';
import { SignUpForm, LogInForm, ContactsPages, Home } from 'pages';
import { refreshCurrentUser } from 'redux/auth/authOperations';
// import { selectIsLoading, selectError } from 'redux/selectors';

import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <div className={css.main}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<SignUpForm />} />
          <Route path="login" element={<LogInForm />} />
          <Route path="/contacts" element={<ContactsPages />} />
        </Route>
      </Routes>
    </div>
  );
}
