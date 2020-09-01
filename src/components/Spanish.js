import React from 'react';
import SideBar from './SideBar';
import '../stylesheets/Languages.scss';
import image from '../images/M.png';


function Spanish(props) {
    return (
      <div>
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"Spanish"} />
        <div className="name">
        <img className="profile-img" src={image} alt="profile-img"></img>
        </div>
        <div className="cv-wrapper">
          <p className="text">
            {props.greeting}
          </p>
          <p>
            {props.thanks}
          </p>
        </div>  
      </div>
    );
  }

export default Spanish;
