import React from 'react';
import './testimonial.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { VscQuote } from 'react-icons/vsc';

const Testimonial = () => {
    return (
    <>
    <section className='section'>
    <div className="overlay">
    <div className="carousel_container">
     <Carousel 
     showArrow={true}
     infiniteLoop={true}
     autoPlay={true}
     swipeable={true}
     showStatus={false} 
     showThumbs={false} 
     className="carousel"
     >
      <div className="carousel_content col-md-6 mx-auto text-center">
      <span><VscQuote/></span>
        <h6>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat.
        </h6>
        <p>Drew Miles</p>
        <p>CEO AppTent</p>
      </div>

      <div className="carousel_content col-md-6 mx-auto text-center">
      <span><VscQuote/></span>
        <h6>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat.
        </h6>
        <p>Ted Gogo</p>
        <p>CEO Flip</p>
      </div>
     </Carousel>
    </div>
    </div>
    </section>       
    </>
    )
}

export default Testimonial;
