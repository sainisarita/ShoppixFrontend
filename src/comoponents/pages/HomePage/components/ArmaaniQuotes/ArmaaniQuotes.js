import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Fade } from "react-reveal";
import "./ArmaaniQuotes.css";
import ArmaaniImage from "../../images/armaaniImage.jpg";
import ArmaaniEaringImage from "../../images/earing1.jpg";

const ArmaaniQuotes = () => {
  const [scrollDirection, setScrollDirection] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > 0) {
        setScrollDirection(currentScrollPos > scrollPosition ? "down" : "up");
      }
      setScrollPosition(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className="armaani-quotes">
      <Card className="custom-card">
        <div className="blank-card"></div>
        {/* Blank card behind the image */}
        <Card.Img variant="top" src={ArmaaniImage} className="card-image" />
        <Fade duration={500} bottom={scrollDirection === "down"} top={scrollDirection === "up"}>
          <Card.Img
            variant="top"
            src={ArmaaniEaringImage}
            className="armaani-earing-image"
          />
        </Fade>
        <div className="blockquotes">
          <blockquote className="quote">
          "To create something exceptional,
            {"\n"}your mindset must be
            {"\n"}relentlessly focused
            {"\n"}on the smallest detail."
            <br />
          </blockquote>
          <p className="author">——— Giorgio Armani</p>
        </div>
      </Card>
      </div>
  );
};

export default ArmaaniQuotes;

