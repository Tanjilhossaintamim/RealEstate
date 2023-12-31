import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="innerWidth paddings  hero-container">
        {/* left side  */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <h1>
              Discover <br /> Most Suitable <br />
              Property
            </h1>
          </div>

          <div className="flexColStart hero-description">
            <span className="secondaryText">Find a variety of properties that suit you very easilty</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className=" stats">
            <div className="flexColCenter state">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter state">
              <span>
                <CountUp start={1850} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>
            <div className="flexColCenter state">
              <span>
                <CountUp start={0} end={28} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        {/* right side  */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
