import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { privateRoutes } from 'router/routes';

export const PublicAppRouter: React.FC = () => {
  return (
    <>
      <Switch>
        {privateRoutes.map((route) => {
          return (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
              key={route.path}
            />
          );
        })}
        <Redirect to='/articles' />
      </Switch>
    </>
  );
};
