import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from 'pages/auth';
import Home from 'pages/home';
import ProtectedRoute from './ProtectedRoute';
import routes from './routes';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route
        path="/auth"
        exact
        component={Auth}
      />
      <Route
        path="/"
        exact
        component={Home}
      />
      {routes.map(({ component: Component, ...rest }, idx) => (
        <ProtectedRoute
          key={idx}
          {...rest}
        >
          <Component />
        </ProtectedRoute>
      ))}
    </Switch>
  );
};

export default Router;
