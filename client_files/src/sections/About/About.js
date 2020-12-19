import React from 'react';
import './about.scss';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Image from 'react-bootstrap/Image';

const About = () => {
    return (
    <>
    <section className="about_section">
    <div className="about_container container row mx-auto">
    <div className="col-md-6 mx-auto">
    <Image 
    src={"https://contenthub-static.grammarly.com/blog/wp-content/uploads/2020/11/how-to-ask-for-promotion-raise.jpg"} 
    alt="about" fluid 
    />
    </div>
    <div className="col-md-6 mx-auto text-center about_content">
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
