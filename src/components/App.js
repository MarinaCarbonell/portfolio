import React from 'react';
import '../stylesheets/App.scss';
import '../stylesheets/reset.scss';
import './Landing';
import Landing from './Landing';
import {Switch, Route} from 'react-router-dom';
import Arrival from './Arrival';
import CV from './CV';
import Proyects from './Proyects';
import Contact from './Contact';
import SideBar from './SideBar';
import image from '../docs/images/M.png';


function App() {
  return (
    <div className="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <img className="profile-img" src={image} alt="profile-img"></img>
      <div id="page-wrap">
      </div>
      <Switch>
        <Route exact path="/" component={Arrival} />
        <Route exact path="/aboutme" component={Landing} />
        <Route exact path="/cv" component={CV} />
        <Route exact path="/proyects" component={Proyects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>  
    </div>
  );
}

export default App;
