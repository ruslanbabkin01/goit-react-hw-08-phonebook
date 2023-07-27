import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

interface IPrivateRoute {
  component: React.ReactElement;
  redirectTo: string;
}

export const PrivateRoute: React.FC<IPrivateRoute> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
