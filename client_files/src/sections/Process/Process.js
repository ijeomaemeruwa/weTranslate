import React, { Component } from 'react'
import './process.scss'

import PROCESS_DATA from './processdata'

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
            <div key={process.id} className="process_content mx-auto">
             <div className="process_img col-md-6">
             {process.img}
             </div>

            <div className="process_text">
            <h5>{process.text}</h5>
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
