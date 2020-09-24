import React from 'react';
import '../stylesheets/App.scss';
import '../stylesheets/reset.scss';
import './Landing';
import Landing from './Landing';
import {Switch, Route} from 'react-router-dom';
import Curriculum from './Curriculum';
import Proyects from './Proyects';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/curriculum" component={Curriculum} />
        <Route exact path="/proyects" component={Proyects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>  
    </div>
  );
}

export default App;
