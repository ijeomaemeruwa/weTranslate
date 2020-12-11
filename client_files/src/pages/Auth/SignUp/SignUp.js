import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import CustomButton from '../../../components/CustomButton/CustomButton';

const SignUp = () => {
    return (
    <>
    <section>
    <Form className="mx-auto col-md-6 my-5 form">
    <Form.Row>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Last Name" />
    </Form.Group>
    </Form.Row>

    <Form.Group controlId="formGridEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Email Address.." />
    </Form.Group>

    <Form.Group controlId="formGridComapany">
    <Form.Label>Company</Form.Label>
    <Form.Control type="text" placeholder="Comapany Name" />
    </Form.Group>

    <Form.Row>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Enter password.."/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" placeholder="Confirm password.."/>
    </Form.Group>
    </Form.Row>

    <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="I accept the terms and conditions." />
    </Form.Group>

    <CustomButton type="submit">
    Register
    </CustomButton>
    </Form>
    </section>      
    </>
    )
}

export default SignUp;
