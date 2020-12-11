import React, {Component} from 'react';
import './talent.scss';

import CustomButton from '../../components/CustomButton/CustomButton';
import { BsPerson } from 'react-icons/bs';

// import PROJECT from './talentdata';
// import Card from 'react-bootstrap/Card'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import CountUp from 'react-countup';


// const responsive = {
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 2
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 1
//     },
//     mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 1
//     },
// };


class Talent extends Component {

    // state = {
    //     talent: PROJECT
    // }


    render() {
    return (
    <>
    <section className="talent_section my-5 mx-auto">
    <div className="talent_container">
    <div className="talent_content text-center col-md-4 mx-auto">
    <span className="talent_icon"><BsPerson /></span>
    <h3>Discover and hire <span>top talent.</span></h3>
    <CustomButton>
     Hire Talent
    </CustomButton>
    </div>


{/*     
        <Carousel
        showDots
        swipeable
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        ssr={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5s ease"
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px p-2 my-auto"> 
        <div className="col-md-8 row">
    {
      talent.map((talent) => (
        <Card key={talent.id} style={{ width: '15rem' }} className="talent_card">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
        <Card.Title>{talent.name}</Card.Title>
        <Card.Text>
        Top language: {talent.language}
       </Card.Text>
       <div>
        <p>Clients: <CountUp end={talent.clientNo} duration={5} /></p>
        <p>Rating: {talent.successRate}</p>
       </div>
       </Card.Body>
       </Card>
      ))
    }
     </div>
    </Carousel> */}
    </div>    
    </section>       
    </>
    )
}
}

export default Talent;
