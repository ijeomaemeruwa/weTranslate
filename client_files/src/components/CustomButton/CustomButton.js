import React from 'react'
import './custombutton.scss'

const CustomButton = ({children, auth_btn, ...otherProps}) => {
    return (
    <>
    <button 
     className={` 
     ${auth_btn ? 'auth_btn': ''} 
     custom_btn `} 
     {...otherProps}
    >
     {children}    
    </button>       
    </>
    )
}

export default CustomButton
