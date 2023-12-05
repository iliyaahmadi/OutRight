import React from 'react';
import '../styles/components/_sidenav.scss';
import { NavLink } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import TableChartIcon from '@mui/icons-material/TableChart';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import MessageIcon from '@mui/icons-material/Message';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const sidenav = () => {
  return (
    <div className="sidenav">
      <ul className="sidenav__items">
        <NavLink to="/panel">
          <li className="active">
            <TableChartIcon fontSize="large" className="icon" />
            <p>داشبورد</p>
          </li>
        </NavLink>
        <NavLink to="/panel/users">
          <li>
            <PeopleIcon fontSize="large" className="icon" />
            <p>کاربر ها</p>
          </li>
        </NavLink>
        <NavLink to="/panel/products">
          <li>
            <InventoryIcon fontSize="large" className="icon" />
            <p>محصولات</p>
          </li>
        </NavLink>
        <NavLink to="/panel/orders">
          <li>
            <LocalAtmIcon fontSize="large" className="icon" />
            <p>سفارشات</p>
          </li>
        </NavLink>
        <NavLink to="/panel/blogs">
          <li>
            <MessageIcon fontSize="large" className="icon" />
            <p> بلاگ</p>
          </li>
        </NavLink>
        <NavLink to="/">
          <li>
            <ExitToAppIcon fontSize="large" className="icon" />
            <p> خروج</p>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default sidenav;
