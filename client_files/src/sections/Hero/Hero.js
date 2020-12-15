import React from 'react';
import './hero.scss';
// import map from '../../assets/images/hero.png'
import CustomButton from '../../components/CustomButton/CustomButton';

const Hero = () => {
    return (
    <>
    <section className="hero">
    <div className="hero_container">
    <div className="col-md-8 my-auto hero_content">
    <h1>Gain global reach for your business.</h1>
    <h4>Get in touch with talent from across the globe.</h4>
    <CustomButton>
     Find Talent
    </CustomButton>
    </div>
    </div>
    </section>   
    </>
    )
}

export default Hero
