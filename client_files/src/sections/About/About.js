import React from 'react';
import './about.scss';
import connect from '../../assets/images/connect.png';
import Image from 'react-bootstrap/Image';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const About = () => {
    return (
    <>
    <section className="about_section">
    <div className="about_container row mx-auto">

      <div className="col-md-6">
      <Image src={connect} alt="connect_vector" fluid />
      </div>

      <div className="col-md-5 my-auto text-center about_content">
        <div className="about_icon"><HiOutlineLocationMarker /></div>
        <h5><span>weTranslate</span> connects you with top talent across the globe
          and helps foster an inclusive and local feel to your business, helping
          customers feel at home.
        </h5>
      </div>
      
    </div> 
    </section>       
    </>
    )
}

export default About
