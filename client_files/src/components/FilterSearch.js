import React from 'react';
import Form from 'react-bootstrap/Form';
import CustomInput from './CustomInput/CustomInput';

const FilterSearch = ({ search, onChange }) => { 
    return (
    <>
    <div className="form_container container mx-auto mt-5 col-md-5">
    <Form.Group controlId="formGridEmail">
    <CustomInput 
      type="text"
      value={search}
      onChange={onChange}
      placeholder="Search For Preferred Language..."
    />
    </Form.Group> 
    </div>      
    </>
    )
}


export default FilterSearch;
