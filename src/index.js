import React                            from 'react';
import ReactDOM                         from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home         from './components/pages/home';
import PageNotFound from './components/pages/page-not-found';

import './styles/main.scss';

ReactDOM.render(
  <BrowserRouter basename="/">
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route component={ PageNotFound } />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root'),
);
