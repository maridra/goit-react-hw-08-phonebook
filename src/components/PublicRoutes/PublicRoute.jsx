import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PT from 'prop-types';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export default function PublicRoute({
  children,
  redirectTo = '/',
  restricted = false,
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return !shouldRedirect ? children : <Navigate to={redirectTo} />;
}

PublicRoute.propTypes = {
  children: PT.node.isRequired,
  redirectTo: PT.string,
  restricted: PT.bool,
};
