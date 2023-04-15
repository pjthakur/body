// react bootstrap carousel begins 
import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import im from "./images/akam-300x203-1.jpg"
import { BsTwitter } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import navimage from '../assets/download.png'
import image1 from '../assets/workout1.avif'
import image2 from '../assets/workout2.jpg'
import image3 from '../assets/workout3.avif'

// import image1 from './images/slide-1.jpg'
// import image2 from './images/slide-2.jpg'
// import image3 from './images/slide-3.jpg'
// import image4 from './images/slide-4.jpg'
// import image5 from './images/slide-5.jpg'
// import image6 from './images/slide-6.jpg'
// import image7 from './images/slide-7.jpg'

const Carousels = () => {
  const items = [
        {
          image: image1,
          alt: "Image 1",
          heading: "ANAEMIA PREVALENCE",
          caption :"All Districs Affected"
        },
        {
          image: image2,
          alt: "Image 2",
          heading: "ANAEMIA PREVALENCE",
          caption :"All Districs Affected"
        },
        {
          image:image3,
          alt: "Image 3",
          heading: "ANAEMIA PREVALENCE",
          caption :"All Districs Affected"
          
        },
        {
          image: navimage,
          alt: "Image 4",
          heading: "ANAEMIA PREVALENCE",
          caption : "All at Risks to Anemia"
          
        },
        {
          image: navimage,
          alt: "Image 5",
          heading: "ANAEMIA PREVALENCE",
          caption :"514 districts Anemia ≥ 40% among children 6-59 months",
          
        },
        {
          image: navimage,
          alt: "Image 6",
          heading: "ANAEMIA PREVALENCE",
          caption : "139 districts Anemia ≥ 40% among women of reproductive age"
          
        },
        {
          image: navimage,
          alt: "Image 7",
          heading: "ANAEMIA PREVALENCE",
          caption : "65 districtsAnemia ≥ 40% among pregnant women 15-49 years"
        },
      ];
  return (
    <Carousel fade>
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item.image} alt={item.alt} />
  
          <Carousel.Caption className="slideshow-carousel">
            <h3>{item.heading}</h3>
            <hr/>
            <h5>{item.caption}</h5>
          </Carousel.Caption>
          
        </Carousel.Item>
      ))}
      
    </Carousel>
  );
};

export default Carousels;

// react bootstrap carousel ends 
