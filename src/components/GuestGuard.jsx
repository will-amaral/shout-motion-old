import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from 'hooks';

function GuestGuard(props) {
  const { children } = props;
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to='/dashboard/account' />;
  }

  return children;
}

GuestGuard.propTypes = {
  children: PropTypes.node,
};

export default GuestGuard;
