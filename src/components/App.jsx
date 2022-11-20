import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { SharedLayout, PrivateRoute, PublicRoute } from 'components';
import { refreshCurrentUser } from 'redux/auth/authOperations';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
// import { SignUpForm, LogInForm, ContactsPages, Home } from 'pages';

import css from './App.module.css';

const HomeView = lazy(() => import('pages/Home/Home'));
const SighUpView = lazy(() => import('pages/AuthPages/SignUpForm'));
const LogInView = lazy(() => import('pages/AuthPages/LogInForm'));
const ContactsView = lazy(() => import('pages/ContactsPage/ContactPages'));

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <div className={css.main}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomeView />} />
            <Route
              path="register"
              element={
                <PublicRoute redirectTo="/contacts" restricted>
                  <SighUpView />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute redirectTo="/contacts" restricted>
                  <LogInView />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsView />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </div>
    )
  );
}
