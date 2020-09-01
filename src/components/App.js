import React from 'react';
import '../stylesheets/App.scss';
import '../stylesheets/reset.scss';
import './Landing';
import Landing from './Landing';
import {Switch, Route} from 'react-router-dom';
import English from './English';
import Spanish from './Spanish';
import CV from './CV';
import Proyects from './Proyects';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/hello" component={English} />
        <Route path="/hola" component={() => <Spanish greeting="¡Hola! Soy Marina y soy especialista en Marketing Digital en la parte de SEM, Google Analytics, Tag Manager y Social Media y me he reconvertido en
            programadora Front-end gracias a Adalab y busco poder dedicarme a ello." thanks="Y si tú has llegado hasta aquí es porque estás interesado en mi CV a si que, ¡gracias!"/>}></Route>
        <Route exact path="/cv" component={CV} />
        <Route exact path="/proyects" component={Proyects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      
    </div>
    
           

  );
}

export default App;
