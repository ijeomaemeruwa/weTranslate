import React, {useState} from 'react';
import './auth.scss';
import axios from 'axios';
// import { Link, Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
  const [input, setInput] = useState({
    name: '',
    company: '',
    email: '',
    password: '',
    confirmPassword: ''
 })


 const handleChange = e => {
   const { name, value } = e.target;
   setInput({...input, [name]: value })
 }

 const handleSubmit = e => {
   e.preventDefault();
   axios({
     method: 'POST',
     url: `${process.env.API_ROUTE}/signup`,
     data: {name, company, email, password}
   })
   .then(response => {
     setInput({
      ...input,
      name: '',
      company: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    toast.success(response.data.message);
   })
   .catch(error => {
    console.log('SIGNUP ERROR', error.response.data);
    setInput({ ...input });
    toast.error(error.response.data.error);
   });
 }

 
const { name, email, company, password, confirmPassword } = input

  return (
  <>
  <section className="form_section">
  <ToastContainer />
  <div className="form_container container mx-auto">
  <Form className="mx-auto col-md-6 form" onSubmit={handleSubmit}>
  <Form.Group controlId="formGridName">
  <Form.Label>Name</Form.Label>
  <CustomInput 
    type="text"
    name="name" 
    value={name}
    onChange={handleChange}
  />
  </Form.Group>
  <Form.Group controlId="formGridEmail">
  <Form.Label>Email</Form.Label>
  <CustomInput  
    type="email"
    name="email" 
    value={email} 
    onChange={handleChange} 
  />
  </Form.Group>
  <Form.Group controlId="formGridComapany">
  <Form.Label>Company</Form.Label>
  <CustomInput  
    type="text"
    name="company" 
    value={company} 
    onChange={handleChange} 
  />
  </Form.Group>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridPassword">
  <Form.Label>Password</Form.Label>
  <CustomInput  
    type="password"
    name="password" 
    value={password}
    onChange={handleChange}  
  />
  </Form.Group>
  <Form.Group as={Col} controlId="formGridPassword">
  <Form.Label>Confirm Password</Form.Label>
  <CustomInput  
    type="password"
    name="confirmPassword" 
    value={confirmPassword}
    onChange={handleChange}  
  />
  </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
  <Form.Check type="checkbox" label="I accept the terms and conditions." />
  </Form.Group>

  <CustomButton type="submit">Register</CustomButton>
  </Form>
</div>
</section>      
</>
)
}


export default SignUp;
