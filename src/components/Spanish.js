import React from 'react';
import SideBar from './SideBar';


function Spanish(props) {
    return (
      <div className="cv-wrapper">
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"Spanish"} />
        <div className="name">
          <span>Marina</span>
          <span>Carbonell</span>
          <span>Álvarez</span>
        </div>
        <div className="text">
          <p>
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
