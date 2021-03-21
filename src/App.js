import React from 'react';
import './App.css';
import Sobremi from './components/Sobremi'
import About from './components/About'
import Second from './components/Second';
// import Navbar from './components/navbar';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Header/>
        </Route>
        <Route path="/second" >
            <Second/>
        </Route>

        <Route path="/about">
          <About/>
        </Route>

        <Route path="/sobremi">
          <Sobremi/>
        </Route>
      
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
