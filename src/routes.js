import React from 'react';
import {Route, Redirect, IndexRoute} from 'react-router';
import App from './components/App';
import LogPage from './components/log/_LogPage';
import AboutPage from './components/about/_AboutPage';
import AdminPage from './components/admin/_AdminPage';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={LogPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="admin" component={AdminPage}/>
    <Redirect from="*" to="/"/>
  </Route>
);
