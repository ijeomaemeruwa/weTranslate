import React, { useState } from 'react'
import './App.css';

import Home from './pages/Home/Home'
import Footer from './sections/Footer/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar'
import Login from './pages/Auth/Login/Login'
import SignUp from './pages/Auth/SignUp/SignUp'

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <Router>
      <NavBar open={open} setOpen={setOpen} />
      <SideBar open={open} setOpen={setOpen} />
      <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/login" component={Login} />
       <Route exact path="/signup" component={SignUp} />
       {/* <Route exact path="/talent" component={Talent} /> */}
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
