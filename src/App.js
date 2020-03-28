import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Notfound from './Pages/Notfound'
import './App.css';

function App() {
  return (
    <div className="App">
       <Router>
          <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact component={Notfound} />
            </Switch>
      </Router>
    </div>
  );
}

export default App;
