import React from 'react';
import './talent.scss';

import CustomButton from '../../components/CustomButton/CustomButton';
import { BsPerson } from 'react-icons/bs';

import Image from 'react-bootstrap/Image';

const Talent = () => {
    return (
    <>
    <section className="talent_section">
    <div className="talent_container container row mx-auto">
    <div className="talent_content col-md-5 my-auto text-center">
    <span className="talent_icon"><BsPerson /></span>
    <p>Discover and hire top <span>talent.</span></p>
    <h4>Let us help you get the best professional service.</h4>
    <CustomButton>
     Hire Talent
    </CustomButton>
    </div>

    <div className="col-md-6 mx-auto">
    <Image 
    src={"https://i.pinimg.com/originals/83/2a/46/832a460b522c84fa9650c11face5927e.jpg"} 
    alt="talent" fluid 
    />
    </div>
    </div>    
    </section>       
    </>
    )
}

export default Talent;
