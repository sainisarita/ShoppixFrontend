  import React, { useState, useEffect } from "react";
  import Card from "react-bootstrap/Card";
  import { Fade } from "react-reveal";
  import "./ArmaaniQuotes.css";
  import ArmaaniImage from "../../images/armaaniImage.jpg";
  import ArmaaniEaringImage from "../../images/earing1.jpg";

  const ArmaaniQuotes = () => {
  

    return (
      <div className="armaani-quotes">
        <Card className="custom-card">
          <div className="blank-card"></div>
          {/* Blank card behind the image */}
          <Card.Img variant="top" src={ArmaaniImage} className="card-image" />
          <Card.Img variant="top" src={ArmaaniEaringImage} className="armaani-earing-image"/>
        <div className="blockquotes">
            <blockquote className="quote">
              To create something 
              {"\n"}exceptional your mindset 
              {"\n"}must be relentlessly focused
              {"\n"}on the smallest detail.
              <br />
            </blockquote>
            <p className="author">——— Giorgio Armani</p>
          </div>
        </Card>
        </div>
    );
  };

  export default ArmaaniQuotes;

