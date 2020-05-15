import React from 'react';
import SideNav from '../components/organisms/SideNav.tsx';
import '../../node_modules/@elastic/eui/dist/eui_theme_light.min.css';

export default {
  title: 'SideNav',
  component: SideNav,
};

export const Default = () => <SideNav />;
