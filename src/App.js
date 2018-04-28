import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import routeList from './routes/index'
import './App.css';
import './static/fonts/iconfont.css';
class App extends Component {
  render() {
    return (
        <HashRouter>
          <div>
              {routeList.map((route, index) => (
                  <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={route.component}
                  />
              ))}
          </div>
        </HashRouter>
    );
  }
}

export default App;
