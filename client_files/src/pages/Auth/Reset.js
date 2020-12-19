import React, {useState} from 'react';

import Form from 'react-bootstrap/Form';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';


const Reset = () => {
  const [input, setInput] = useState({
     email: ''
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
  
    <CustomButton type="submit">Reset Password</CustomButton>
    </Form> 
    </div>  
    </section>   
    </>
    )
}

export default Reset;