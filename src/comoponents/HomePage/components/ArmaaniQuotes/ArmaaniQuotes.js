import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Fade } from "react-reveal";
import "./ArmaaniQuotes.css";
import ArmaaniImage from "../../images/armaaniImage.jpg";
import ArmaaniEaringImage from "../../images/earing1.jpg";

const ArmaaniQuotes = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollPercentage = scrollPosition / (document.documentElement.scrollHeight - window.innerHeight);

  return (
    <div className="armaani-quotes">
      <Card className="custom-card">
        <div className="blank-card"></div>
        <Card.Img variant="top" src={ArmaaniImage} className="card-image" />
        <div className="scrolling-image-container">
          <Card.Img
            variant="top"
            src={ArmaaniEaringImage}
            className="armaani-earing-image"
            style={{
              animationDuration: "0.2s", // Decreased animation duration for increased speed
              transform: `translateY(${scrollPercentage * 500}px)`, // Adjusted value for faster scrolling speed
            }}
          />
        </div>
        <div className="blockquotes">
          <blockquote className="quote">
            To create something
            {"\n"}
            exceptional your mindset
            {"\n"}
            must be relentlessly focused
            {"\n"}
            on the smallest detail.
            <br />
          </blockquote>
          <p className="author">——— Giorgio Armani</p>
        </div>
      </Card>
    </div>
  );
};

export default ArmaaniQuotes;