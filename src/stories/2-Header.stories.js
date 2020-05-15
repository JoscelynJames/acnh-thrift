import React from 'react';
import Header from '../components/organisms/Header.tsx';
import '../../node_modules/@elastic/eui/dist/eui_theme_light.min.css';

export default {
  title: 'Header',
  component: Header,
};

export const Default = () => <Header />;

export const LoggedIn = () => <Header isLoggedIn />;

const breadcrumbs = [
  {
    text: 'peanut',
    href: '/peanut',
  },
  {
    text: 'butter',
    href: '/butter',
  },
  {
    text: 'jelly',
    href: '/jelly',
  },
  {
    text: 'sandwiches',
  },
];

export const Breadcrumbs = () => <Header isLoggedIn breadcrumbs={breadcrumbs} />;
