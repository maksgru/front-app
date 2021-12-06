import Home from 'pages/home';
import Page404 from 'ui/components/Page404';
import Profile from 'pages/profile';
import React from 'react';
import Project from 'pages/project';

export type UserRoles = 'any' |'user' | 'client' | 'admin';

export interface RouteType {
  path: string;
  exact: boolean;
  component: React.FunctionComponent | React.ComponentClass;
  role: UserRoles | UserRoles[];
}

const routes: RouteType[] = [
  {
    path: '/',
    exact: true,
    component: Home,
    role: 'user'
  },
  {
    path: '/profile',
    exact: true,
    component: Profile,
    role: 'user'
  },
  {
    path: '/project',
    exact: true,
    component: Project,
    role: 'user'
  },
  {
    path: '/',
    exact: false,
    component: Page404,
    role: 'user'
  }
];

export default routes;
