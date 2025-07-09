import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Lottie from 'lottie-react';
import hiAnimation from "../assets/hiAnimation.json";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-animation">

        <Lottie animationData={hiAnimation} loop={true} />
        
      </div>
      <div className="hero-text text-center">

        <h1 className="text-heading">
          <Typewriter 
            words={["Hello, my name is Hinal"]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          ></Typewriter>
        </h1>

        <h3 className="text-headingB" style={{color:'#b0b0b0'}}>This is my portfolio. Feel free to look at any of my projects and </h3>
        <p className="text-paragraph" style={{color:'#b0b0b0'}}>I'm a software engineer from Chicago, USA. Just a girl trying to solve hard problems until they become easy and boring</p>

        <a href="mailto:hinaloza15@gmail.com"style={{textDecoration:'None'}}><button className="btn btn-outline-pink">Say hi!</button></a>

      </div>

    </div>
  );
}

export default Hero;
