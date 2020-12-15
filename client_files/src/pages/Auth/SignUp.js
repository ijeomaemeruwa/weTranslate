import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import UserContext from '../../context/UserContext';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import CustomButton from '../../components/CustomButton/CustomButton';

const SignUp = () => {
  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const [ name, setName ] = useState('');
  const [ email,setEmail ] = useState('');
  const [company, setCompany] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const newUser = {name, email, company, password, confirmPassword };

    await axios.post("http://localhost:5000/auth/signup", newUser);
    const loginResponse = await axios.post("http://localhost:5000/auth/login", {
       email, 
       password
     });
    setUserData({
    token: loginResponse.data.token,
    user: loginResponse.data.user
    });
    localStorage.setItem("auth-token", loginResponse.data.token);
    history.push("/"); //(/discover) --send users to discover page on login
    } 
    catch(err) {
    err.response.data.msg && setError(err.response.data.msg);
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
    className="mx-auto col-md-6 my-5 form" 
    onSubmit={handleSubmit}
  >
  <Form.Group as={Col} controlId="formGridName">
  <Form.Label>Name</Form.Label>
  <Form.Control 
    type="text" 
    placeholder="First Name" 
    onChange={e => setName(e.target.value)}
  />
  </Form.Group>

  <Form.Group controlId="formGridEmail">
  <Form.Label>Email</Form.Label>
  <Form.Control 
    type="email" 
    placeholder="Email Address.." 
    onChange={e => setEmail(e.target.value)}
  />
  </Form.Group>

  <Form.Group controlId="formGridComapany">
  <Form.Label>Company</Form.Label>
  <Form.Control 
    type="text" 
    placeholder="Comapany Name" 
    onChange={e => setCompany(e.target.value)}
  />
  </Form.Group>

  <Form.Row>
  <Form.Group as={Col} controlId="formGridPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control 
    type="password" 
    placeholder="Enter password.."
    onChange={e => setPassword(e.target.value)}
  />
  </Form.Group>

  <Form.Group as={Col} controlId="formGridPassword">
  <Form.Label>Confirm Password</Form.Label>
  <Form.Control 
    type="password" 
    placeholder="Confirm password.."
    onChange={e => setConfirmPassword(e.target.value)}
  />
  </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
  <Form.Check type="checkbox" label="I accept the terms and conditions." />
  </Form.Group>

  <CustomButton type="submit">Register</CustomButton>
  </Form>
</section>      
</>
)
}


export default SignUp;
