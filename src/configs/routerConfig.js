import React from 'react';
import { Route } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage } from 'pages';

const routes = [
  {
    name: 'HomePage',
    path: '/',
    exact: true,
    isProtect: false,
    component: () => <HomePage />,
  },
  {
    name: 'LoginPage',
    path: '/login',
    exact: true,
    isProtect: false,
    component: () => <LoginPage />,
  },
  {
    name: 'RegisterPage',
    path: '/register',
    exact: true,
    isProtect: false,
    component: () => <RegisterPage />,
  },
];

function renderRoutes(isAuth = false) {
  return routes.map((route, index) => {
    const { path, exact, component, isProtect } = route;
    const componentRender = !isProtect ? (
      component
    ) : isAuth ? (
      component
    ) : (
      <LoginPage />
    );
    return (
      <Route
        key={index}
        path={path}
        exact={exact}
        component={componentRender}
      />
    );
  });
}

export default renderRoutes;
