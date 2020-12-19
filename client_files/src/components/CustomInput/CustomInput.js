import React from 'react';
import './custominput.scss'

const CustomInput = ({ ...otherInputProps }) => {
    return (
    <>
    <div>
    <input 
    className="input"
    {...otherInputProps}
    />
    </div>      
    </>
    )
}

export default CustomInput;