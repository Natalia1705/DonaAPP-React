import { Navigate } from 'react-router-dom';
import Auth from '../../utils/Auth';

// prettier-ignore
const PrivateRoute = ({ children }) => (
  Auth.isLogin() ? children : <Navigate to="/login" />
);

export default PrivateRoute;
