import React from "react";
import Card from "react-bootstrap/Card";
import "./ArmaaniQuotes.css";
import ArmaaniImage from "../../images/armaaniImage.jpg";

const ArmaaniQuotes = () => {
  return (
    <div className="armaani-quotes">
      <Card className="custom-card">
        <div className="card-image-container">
          <div className="blank-card"></div> {/* Blank card behind the image */}
          <Card.Img variant="top" src={ArmaaniImage} className="card-image" />
        </div>
      </Card>
    </div>
  );
};

export default ArmaaniQuotes;
