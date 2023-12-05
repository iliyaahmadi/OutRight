import React from 'react';
import '../styles/layout/_panel.scss';
import SideNav from '../components/sidenav';
import { Outlet } from 'react-router-dom';

const panel = () => {
  return (
    <div className="panel">
      <SideNav />
      <Outlet className="outlet" />
    </div>
  );
};

export default panel;
