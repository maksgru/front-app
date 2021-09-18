import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useStoreSelector } from 'store/hooks';
import { selectProfile } from 'store/reducers/profile';

const ProtectedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const profile = useStoreSelector(selectProfile);
  return (
    <Route
      {...rest}
      render={({ location }) => (profile ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/auth',
            state: { from: location }
          }}
        />
      ))}
    />
  );
};

export default ProtectedRoute;
