import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Moviesposter from '../src/components/Moviesposter'

function App() {
  return (
    <Router>
    <div className="App">
      <Route path ='/' component ={Moviesposter}/>
      <Route path ='/:details' component ={Details}/>
    </div>
    </Router>
  );
}

function Details(){
  return(
    <div><h1>hello detsils</h1></div>
  );
}
export default App;
