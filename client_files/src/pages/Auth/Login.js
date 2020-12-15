import React, {useContext, useState} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import UserContext from '../../context/UserContext';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import Form from 'react-bootstrap/Form';
import CustomButton from '../../components/CustomButton/CustomButton';

const Login = () => {
    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const loginUser = {email, password};
        const loginResponse = await axios.post("http://localhost:5000/auth/login", loginUser);
        setUserData({
        token: loginResponse.data.token,
        user: loginResponse.data.user
        });
        localStorage.setItem("auth-token", loginResponse.data.token);
        history.push("/"); //(/discover) --send users to discover page on login
    } catch(err) {
        err.response.data.msg && setError(err.response.data.msg)
        }
        };
  
return (
    <>
    <section>
    {
    error && 
    <ErrorMessage message={error} 
    clearError={() => setError(undefined)} 
    />
    }
    <Form 
      className="mx-auto col-md-5 my-5 form"
      onSubmit={handleSubmit}
    >
    <Form.Group controlId="formGridEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control 
      type="email" 
      placeholder="Email Address.." 
      onChange={e => setEmail(e.target.value)}
    />
    </Form.Group>

    <Form.Group controlId="formGridComapany">
    <Form.Label>Password</Form.Label>
    <Form.Control 
      type="text" 
      placeholder="Comapany Name" 
      onChange={e => setPassword(e.target.value)}
    />
    </Form.Group> 

    <CustomButton type="submit">Log In</CustomButton>
    </Form>   
    </section>   
    </>
    )
}

export default Login;
