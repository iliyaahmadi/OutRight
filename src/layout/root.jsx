import React from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import '../styles/layout/_root.scss';

const root = () => {
  return (
    <div className="root">
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default root;
