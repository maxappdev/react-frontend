import React from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login'
import {BrowserRouter as Router,
        Switch,
        Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
