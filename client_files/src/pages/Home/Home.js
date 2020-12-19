import React from 'react';

import Hero from '../../sections/Hero/Hero';
import About from '../../sections/About/About';
import Process from '../../sections/Process/Process';
import Talent from '../../sections/Talent/Talent';
import Footer from '../../sections/Footer/Footer';
import Testimonial from '../../sections/Testimonial/Testimonial';

const Home = () => {
    return (
    <>
     <Hero />
     <About /> 
     <Process />
     <Talent />
     <Testimonial/> 
     <Footer />     
    </>
    )
}

export default Home
