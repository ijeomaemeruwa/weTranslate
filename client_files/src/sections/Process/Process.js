import React, { Component } from 'react'
import './process.scss'

import PROCESS_DATA from './processdata'
import Image from 'react-bootstrap/Image'

class Process extends Component {

    state = {
        process: PROCESS_DATA
    }

    render() {
        const { process } = this.state;
    return (
        <>
        <section className="my-5 process">
        <div className="text-center py-3">
        <h2>Our Process</h2>   
        </div>  
        
        <div className="process_container">
        {
          process.map(process => (
            <div key={process.id} className="process_content mx-auto my-3 container row">
             <div className="process_img col-md-6">
             <Image src={process.img} alt={process.text} fluid />
             </div>

            <div className="process_text m-auto text-left col-md-5">
            <h3>{process.number}</h3>
            <h4>{process.text}</h4>
            <p>{process.detail}</p>
            </div>
            </div>
          ))
        }   
        </div>  
        </section>       
        </>
    )
    }
   
}

export default Process
