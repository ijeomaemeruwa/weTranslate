import React from 'react'
import './hero.scss'

// import map from '../../assets/images/map.png'
import map from '../../assets/images/hero.png'
import CustomButton from '../../components/CustomButton/CustomButton'

import Image from 'react-bootstrap/Image';

const Hero = () => {
    return (
    <>
    <section className="hero">
    <div className="hero_container row mx-auto">

    <div className="col-md-6 my-auto hero_content">
    <h1>Gain global reach for your business.</h1>
    <h4>Get in touch with talent from across the globe.</h4>
    <CustomButton>
     Find Talent
    </CustomButton>
    </div>
    
    <div className="col-md-6">
    <Image src={map} alt="map" fluid />
    </div>
    </div>
    </section>   
    </>
    )
}

export default Hero
