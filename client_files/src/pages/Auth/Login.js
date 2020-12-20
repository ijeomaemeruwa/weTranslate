import React, {useState} from 'react';
import axios from 'axios';
import { authenticateUser, isAuthenticated } from './helpers';
import Form from 'react-bootstrap/Form';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import { Link, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [input, setInput] = useState({
     email: '',
     password: ''
  })


  const handleChange = e => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios({
      method: 'POST',
      url: `${process.env.API_ROUTE}/login`,
      data: {email, password}
    })
    .then(response => {
      authenticateUser(response, () => {
        setInput({...input, email: '', password: ''})
        toast.success(`Welcome, ${response.data.user.name}!`);
      })
    })
    .catch(error => {
     console.log('LOGIN ERROR', error.response.data);
     setInput({ ...input });
     toast.error(error.response.data.error);
    });
  }
  
const { email, password } = input

return (
    <>
    <section className="form_section">
    <ToastContainer/>
    {isAuthenticated() ? <Redirect to="/"/> : null}
    <div className="form_container container mx-auto">
    <Form 
      className="mx-auto col-md-5 my-5 form"
      onSubmit={handleSubmit}
    >
    <Form.Group controlId="formGridEmail">
    <Form.Label>Email</Form.Label>
    <CustomInput 
      type="email"
      value={email} 
      onChange={handleChange}
    />
    </Form.Group>

    <Form.Group controlId="formGridComapany">
    <Form.Label>Password</Form.Label>
    <CustomInput 
      type="text" 
      value={password}
      onChange={handleChange}
     />
    </Form.Group>
    <div className="form_links">
    <small><Link to="/signup">Sign Up</Link></small>
    <small><Link to="/resetpassword">Forgot Password?</Link></small>
    </div> 
  
    <CustomButton type="submit">Log In</CustomButton>
    </Form> 
    </div>  
    </section>   
    </>
    )
}

export default Login;
