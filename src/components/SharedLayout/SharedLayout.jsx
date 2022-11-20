import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

import { Loader, UserMenu } from 'components';

import { Nav, StyledLink, AppBar } from './SharedLayout.styled';
import css from './SharedLayout.module.css';

export default function SharedLayout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        {isLoggedIn && (
          <>
            <StyledLink to="/contacts">Contacts</StyledLink>
            <div className={css.wrapper}>
              <UserMenu />
            </div>
          </>
        )}

        {!isLoggedIn && (
          <>
            <StyledLink to="/register">Sign up</StyledLink>
            <StyledLink to="/login">Log in</StyledLink>
          </>
        )}
      </Nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </AppBar>
  );
}
