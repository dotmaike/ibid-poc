import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, hashHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from '../Login/Login.jsx';
/* Scenes */
import Home from '../../scenes/Home/Home.jsx';

const App = () => (

  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Route path="/" component={Login} />
      <Route path="/home" component={Home} />
    </Router>
  </MuiThemeProvider>

);
export default App;
