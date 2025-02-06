import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/custom/Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />  {/* This renders the nested route content */}
    </div>
  );
};

export default Layout;
