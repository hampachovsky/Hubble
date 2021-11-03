import { Layout } from 'antd';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { publicRoutes } from 'router/routes';

export const PrivateAppRouter = () => {
  return (
    <Layout.Content>
      <Switch>
        {publicRoutes.map((route) => {
          return (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
              key={route.path}
            />
          );
        })}
        <Redirect to='/login' />
      </Switch>
    </Layout.Content>
  );
};
