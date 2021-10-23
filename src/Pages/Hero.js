import React from "react";
import About from "../components/About";
import Heading from "../components/Heading";
import Fact from "../components/Fact";
import Resume from "../components/Resume"
import Skills from "../components/Skills";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <Heading></Heading>
      <About></About>
      <Fact></Fact>
      <Resume></Resume>
      <Skills></Skills>
    </div>
  );
}

export default Hero;
