import React from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import '../styles/layout/_root.scss';
import { Outlet } from 'react-router-dom';

const root = () => {
  return (
    <div className="root">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default root;
