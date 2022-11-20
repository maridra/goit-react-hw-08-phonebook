import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PT from 'prop-types';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export default function PrivateRoutes({ children, redirectTo = '/' }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}

PrivateRoutes.propTypes = {
  children: PT.node.isRequired,
  redirectTo: PT.string,
};
