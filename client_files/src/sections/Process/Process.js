import React, { Component } from 'react';
import './process.scss';
import PROCESS_DATA from './processdata';

class Process extends Component {

    state = {
      process: PROCESS_DATA
    }

    render() {
      const { process } = this.state;
    return (
        <>
        <section className="my-5 process">
        <div className="process_header text-center py-3">
        <p>OUR PROCESS</p>  
        <h4>We help you achieve your reach and global goal.</h4> 
        </div>  
        
        <div className="process_container">
        {
          process.map(process => (
            <div key={process.id} className="process_content m-auto">
             <span>{process.img}</span>

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
