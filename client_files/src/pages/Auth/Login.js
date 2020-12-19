import React, {useState} from 'react';

import Form from 'react-bootstrap/Form';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import { Link } from 'react-router-dom';


const Login = () => {
  const [input, setInput] = useState({
     email: '',
     password: ''
  })


  const handleChange = e => {
    const { name, value } = e.target;
    setInput({ [name]: value })
  }
  

return (
    <>
    <section className="form_section">
    <div className="form_container container mx-auto">
    <Form 
      className="mx-auto col-md-5 my-5 form"
    >
    <Form.Group controlId="formGridEmail">
    <Form.Label>Email</Form.Label>
    <CustomInput 
      type="email"
      value={input.email} 
      onChange={handleChange}
    />
    </Form.Group>

    <Form.Group controlId="formGridComapany">
    <Form.Label>Password</Form.Label>
    <CustomInput 
      type="text" 
      value={input.password}
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
