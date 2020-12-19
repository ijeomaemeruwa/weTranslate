import React, {useState} from 'react';
import './auth.scss';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';


const SignUp = () => {
  const [input, setInput] = useState({
    username: '',
    company: '',
    email: '',
    password: '',
    confirmPassword: ''
 })


 const handleChange = e => {
   const { name, value } = e.target;
   setInput({ [name]: value })
 }


  return (
  <>
  <section className="form_section">
  <div className="form_container container mx-auto">
  <Form className="mx-auto col-md-6 form">
  <Form.Group controlId="formGridName">
  <Form.Label>Name</Form.Label>
  <CustomInput 
    type="text" 
    value={input.username}
    onChange={handleChange}
  />
  </Form.Group>
  <Form.Group controlId="formGridEmail">
  <Form.Label>Email</Form.Label>
  <CustomInput  
    type="email"
    value={input.email} 
    onChange={handleChange} 
  />
  </Form.Group>
  <Form.Group controlId="formGridComapany">
  <Form.Label>Company</Form.Label>
  <CustomInput  
    type="text"
    value={input.company} 
    onChange={handleChange} 
  />
  </Form.Group>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridPassword">
  <Form.Label>Password</Form.Label>
  <CustomInput  
    type="password"
    value={input.password}
    onChange={handleChange}  
  />
  </Form.Group>
  <Form.Group as={Col} controlId="formGridPassword">
  <Form.Label>Confirm Password</Form.Label>
  <CustomInput  
    type="password"
    value={input.confirmPassword}
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
