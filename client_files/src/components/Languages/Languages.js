import React from 'react';
import './languages.scss';

const Languages = (props) => {
    return (
    <>
    <div>
    <select className="select"
    value={props.language}
    onChange={e => props.handleSetLanguage(e.target.value)}
    >
    <option value="English">English</option>
    <option value="French">French</option>
    </select>     
    </div>       
    </>
    )
}

export default Languages
