import React,{lazy,Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Home from './Pages/Home'
import Notfound from './Pages/Notfound'
import './App.css';

const Home = lazy(() => import('./Pages/Home'));

function App() {
  return (
    <div className="App">
       <Suspense fallback={<div style={{textAlign:'center',marginTop:'100px'}}>loading......</div>}>
        <Router>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact component={Notfound} />
              </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
