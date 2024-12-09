import "./HeroSection.css";
import { useState } from "react";

const HeroSection = () => {
  const [gradient, setGradient] = useState(
    "linear-gradient(180deg, #030C17, #0A223F)"
  ); // Initial gradient

  const [color, setColor] = useState("#081120"); // Initial color

  const handleLogoClick = () => {
    // Toggle the gradient
    setGradient(
      (prevGradient) =>
        prevGradient === "linear-gradient(180deg, #030C17, #0A223F)"
          ? "linear-gradient(180deg, #030C17, #103562)"
          : "linear-gradient(180deg, #030C17, #0A223F)" // Toggle back to the initial gradient
    );

    setColor(
      (prevColor) => (prevColor === "#081120" ? "#0A1628" : "#081120") // Toggle back to the initial
    );
  };

  return (
    <div className="outer" style={{ background: gradient }}>
      <div className="circle0"></div>
      <div className="circle01"></div>
      <div className="circle02"></div>
      <div className="circle1">
        <img
          src="innovision.svg"
          alt="inno"
          className="logo"
          onClick={handleLogoClick}
        />

        <div className="sanga-box">
          <img src="sanganitra.svg" alt="sanga" className="sanga" />
          <a className="text">Sanganitra</a>
        </div>
        <div className="vidyut-box">
          <img src="vidyut.svg" alt="vidyut" className="vidyut" />
          <a className="text">Vidyut</a>
        </div>
        <div className="saahitya-box">
          <img src="saahitya.svg" alt="saahitya" className="saahitya" />
          <a className="text">Saahitya</a>
        </div>
        <div className="kaaryavarta-box">
          <img
            src="kaaryavarta.svg"
            alt="kaaryavarta"
            className="kaaryavarta"
          />
          <a className="text">Kaaryavarta</a>
        </div>
        <div className="abhivyakta-box">
          <img src="abhivyakta.svg" alt="abhivyakta" className="abhivyakta" />
          <a className="text">Abhivyakta</a>
        </div>
        <div className="yantrika-box">
          <img src="yantrika.svg" alt="yantrika" className="yantrika" />
          <a className="text">Yantrika</a>
        </div>

        <div className="circle2-alias"></div>
        <div className="circle2">
          <div className="circle3">
            <div className="semi-circle" style={{ background: color }}></div>
          </div>
          <div className="circle4"></div>

          <div className="title-box">
            <a className="subtitle">ACM NITK</a>
            <a className="title-inno">Innovision&#39;25</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
