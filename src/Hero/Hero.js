import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container" id="herooo">
      <div className="hero-content">
        <div className="content">
          <div className="hand1">
          <h1>👋</h1>
          </div>
          <div className="main">
            <p className="hello">Hello,I am</p>
            <h1 className="name">Vinay</h1>
          </div>
        </div>
        <p>
        A Frontend focused Web Developer building the Frontend  Websites and Web Applications that leads to the success of the overall product.
        </p>
      </div>

      <div className="hero-img">
        <div>
         
          <img className="vvv" src="/images/vinay.jpg"></img>
        </div>
</div>
    </section>
  );
};

export default Hero;
