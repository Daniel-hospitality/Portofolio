import React from 'react';
import Carousel from '../components/Carousel';

import Hero from '../components/Hero';
import "./HacPage.css";
// import "./Hero.css";


function HomePage(props) {
    
    return (
        <div className="HomePage">
          <Hero title={props.title} subTitle={props.subTitle} text={props.text} stylingClass="slogon1"/>



          <Carousel />
        </div>
    );

}

export default HomePage;