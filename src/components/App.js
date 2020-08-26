import React from 'react';
import '../stylesheets/App.scss';
import '../stylesheets/reset.scss';
import './Landing';
import Landing from './Landing';
import {Switch, Route} from 'react-router-dom';
import English from './English';
import Spanish from './Spanish';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/hello" component={English} />
        <Route path="/hola" component={Spanish} />
      </Switch>
      
    </div>
    
           

  );
}

export default App;
