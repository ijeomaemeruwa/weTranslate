import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import UserContext from './context/UserContext';


const App = () => {
  const [open, setOpen] = useState(false);
  const [ userData, setUserData ] = useState({
    token: undefined,
    user: undefined
  });


  useEffect(() => {
    const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");
    if(token === null){
    localStorage.setItem("auth-token", "");
    token = "";
    }
    
    const tokenResponse = await axios
    .post('http://localhost:5000/auth/tokenIsValid', null, {headers: {"x-auth-token": token}});

    if (tokenResponse.data) {
    const userRes = await axios.get("http://localhost:5000/auth/", {
    headers: { "x-auth-token": token },
    });

    setUserData({
       token,
       user: userRes.data,
    });
    }
    }
    checkLoggedIn();
    }, []);

  return (
    <>
    <Router>
    <UserContext.Provider value={{ userData, setUserData }}>
      <NavBar open={open} setOpen={setOpen} />
      <SideBar open={open} setOpen={setOpen} />
    <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/login" component={Login} />
       <Route exact path="/signup" component={SignUp} />
       {/* <Route exact path="/talent" component={Talent} /> */}
    </Switch>
    </UserContext.Provider>
    </Router>
    </>
  );
}

export default App;
