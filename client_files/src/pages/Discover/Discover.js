import React, { useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';

const Discover = () => {
    const {userData} = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
    if(!userData.user)
    history.push("/login");
    }); //may require dependency array

    return (
    <div>
      {userData.user ? (
      <p>Welcome {userData.user.name}</p>
      //Discover Content, cards and contact button

      ) : (
     <div>
     <h5>You are not logged in</h5>
     <Link to="/login">Login</Link>
     </div>
    )}      
    </div>
    )
}

export default Discover
