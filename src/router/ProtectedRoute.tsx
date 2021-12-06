import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useStoreSelector } from 'store/hooks';
import { selectProfile } from 'store/reducers/profile';
import { UserRoles } from './routes';

interface ProtectedRoteType extends RouteProps {
  role: UserRoles | UserRoles[];
}

const hasRoleAccess = (role: string | string[], userRole?: string) => {
  if (!userRole || userRole === 'any') return true;
  if (typeof role == 'string') {
    return role === userRole;
  }
  return role.includes(userRole);
};

const ProtectedRoute: React.FC<ProtectedRoteType> = ({ children, role, ...rest }) => {
  const profile = useStoreSelector(selectProfile);
  return (
    <Route
      {...rest}
      render={({ location }) => (hasRoleAccess(role, profile?.role) ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: location }
          }}
        />
      ))}
    />
  );
};

export default ProtectedRoute;
