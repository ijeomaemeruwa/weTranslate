import React from 'react';

import Form from 'react-bootstrap/Form';
import CustomButton from '../../../components/CustomButton/CustomButton';

const Login = () => {
    return (
        <>
        <section>
        <Form className="mx-auto col-md-5 my-5 form">
        <Form.Group controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email Address.." />
        </Form.Group>

        <Form.Group controlId="formGridComapany">
        <Form.Label>Company</Form.Label>
        <Form.Control type="text" placeholder="Comapany Name" />
        </Form.Group> 

        <CustomButton type="submit">
         Log In
        </CustomButton>
        </Form>   
        </section>   
        </>
    )
}

export default Login;
