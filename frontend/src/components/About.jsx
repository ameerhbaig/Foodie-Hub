import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className="mid">
          Welcome to Foodie Hub, where passion meets flavors and every dish tells a story. At Foodie Hub, we take pride in crafting culinary experiences that delight your taste buds and leave a lasting impression.Our journey began with a simple love for good food. 
          From farm-fresh ingredients to expertly crafted recipes, we are committed to bringing you a dining experience that goes beyond just a meal. Every dish is a celebration of flavors, a symphony of tastes that reflects our dedication to quality and authenticity.
          What sets us apart is not just the delectable dishes we serve but the heart and soul we put into each creation.            
           
           
           Whether you're here for a casual meal or a special celebration, we strive to make every visit memorable.
            We look forward to serving you and making your dining experience truly extraordinary.

          </p>
          <Link to={"menu"} spy={true} smooth={true} duration={500}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
