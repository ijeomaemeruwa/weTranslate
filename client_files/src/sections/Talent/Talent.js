import React from 'react';
import './talent.scss';

import CustomButton from '../../components/CustomButton/CustomButton';
import { BsPerson } from 'react-icons/bs';

import Image from 'react-bootstrap/Image';
import request from '../../assets/images/makerequest.png';


const Talent = () => {
    return (
    <>
    <section className="talent_section">
    <div className="talent_container row mx-auto">

    <div className="talent_content text-center col-md-4 my-auto">
    <span className="talent_icon"><BsPerson /></span>
    <h3>Discover and hire <span>top talent.</span></h3>
    <CustomButton>
     Hire Talent
    </CustomButton>
    </div>

    <div className="col-md-6">
    <Image src={request} alt="makerequest_vector" fluid />
    </div>

    </div>    
    </section>       
    </>
    )
}

export default Talent;
