import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Reset from './pages/Auth/Reset';
import Discover from './pages/Discover/Discover';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute'


const App = () => {
  

  return (
    <>
    <Router>
      <NavBar />
      <SideBar />
    <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/login" component={Login} />
       <Route exact path="/signup" component={SignUp} />
       <Route exact path="/resetpassword" component={Reset} />
       <PrivateRoute exact path="/discover" component={Discover} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
