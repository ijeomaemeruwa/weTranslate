import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import CustomInput from './CustomInput/CustomInput';

const FilterSearch = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = e => {
      const { name, value } = e.target;
      setSearchTerm({ [name]: value })
    }

    return (
    <>
    <div className="form_container container mx-auto mt-5 col-md-5">
    <Form.Group controlId="formGridEmail">
    <CustomInput 
      type="text"
      value={searchTerm.email} 
      onChange={handleChange}
      placeholder="Search For Preferred Language..."
    />
    </Form.Group> 
    </div>      
    </>
    )
}

export default FilterSearch;
