import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';
import '../stylesheets/SideBar.scss';


function SideBar (props) {
  return (
    <Menu {...props}>
      <Link to="/cv">Mi CV</Link>
      <Link to="/proyects">Proyects</Link>
      <Link to="/contact">Contact</Link>     
    </Menu>
  );
};

export default SideBar;
