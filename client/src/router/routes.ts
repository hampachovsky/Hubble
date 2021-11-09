import { Login } from 'pages/Login';
import { Articles } from 'pages/Articles';
import { Profile } from 'pages/Profile';
import { Register } from 'pages/Register';
import { Article } from 'pages/Article';

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum routesName {
  LOGIN = '/login',
  REGISTER = '/register',
  PROFILE = '/profile',
  ARTICLES = '/articles',
  ARTICLE = '/article/:id',
  SEARCH = '/search',
}

export const publicRoutes: IRoute[] = [
  {
    path: routesName.LOGIN,
    component: Login,
  },
  {
    path: routesName.REGISTER,
    component: Register,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: routesName.ARTICLES,
    component: Articles,
    exact: true,
  },
  { path: routesName.PROFILE, component: Profile },
  { path: routesName.ARTICLE, component: Article },
];
