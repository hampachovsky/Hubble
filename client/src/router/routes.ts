import { Login } from 'pages/Login';
import { Posts } from 'pages/Posts';
import { Profile } from 'pages/Profile';
import { Register } from 'pages/Register';

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum routesName {
  LOGIN = '/login',
  Register = '/register',
  PROFILE = '/profile',
  POSTS = '/',
  POST = '/post/:id',
}

export const publicRoutes: IRoute[] = [
  {
    path: routesName.LOGIN,
    component: Login,
  },
  {
    path: routesName.Register,
    component: Register,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: routesName.POSTS,
    component: Posts,
    exact: true,
  },
  { path: routesName.PROFILE, component: Profile },
];
