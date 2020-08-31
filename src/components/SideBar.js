import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';
import '../stylesheets/SideBar.scss';

function SideBar (props) {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/cv">
        hola
      </a>
      <Link to="/cv">Mi CV</Link>
      <a className="menu-item" href="/services">
        Services
      </a>

      <a className="menu-item" href="/contact">
        Contact us
      </a>
    </Menu>
  );
};

export default SideBar;
