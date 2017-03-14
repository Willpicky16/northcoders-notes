import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './App';
import Home from './Home';
import About from './About';
import Repos from './Repos';
import Repo from './Repo';

import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/about' component={About} />
      <Route path='/repos' component={Repos}>
        <Route path='/repos/:user_name/:repo_name' component={Repo}/>
      </Route>
      
    </Route>
  </Router>,
  document.getElementById('root')
);
