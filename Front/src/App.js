import React from 'react'
import { Router, Location, Redirect } from "@reach/router";

import Documentation from "./component/documentation/Documentation";
import DocItem from "./component/documentation/DocItem";
import Explore from './component/explore/Explore'
import Header from './component/header/Header'
import Home from './component/home/Home'
import Login from './component/login/Login'
import Register from './component/register/Register'

import './style.scss'
const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div id="routerhang">
        <div key={location.key}>
          <Router location={location}>{children}</Router>
        </div>
      </div>
    )}
  </Location>
);

const App = () => {

  return (
    <div className="wraper">
      <Header />
      <PosedRouter>
          <Explore path="/explore" />
          <Home path="/home" />
          <Documentation path="/documentation" />
		  <DocItem path="documentation/:documentationItem" />
          <Login path="/"  />
          <Register path="/register" />

      </PosedRouter>
    </div>
  );
};

export default App;
