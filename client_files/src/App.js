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


const App = () => {
  

  return (
    <>
    <Router>
      <NavBar />
      <SideBar />
    <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/login" component={Login} />
       <Route path="/signup" component={SignUp} />
       <Route path="/resetpassword" component={Reset} />
       <Route exact path="/discover" component={Discover} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
