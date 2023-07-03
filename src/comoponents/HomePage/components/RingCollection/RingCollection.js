import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Fade from 'react-reveal/Fade';

import "./RingCollection.css";
import RingCollectionImage from "../../images/ringCollection.jpg";

const RingCollection = () => {
  return (
    <div className="ring-collection">
      <Card className="custom-card">
        <Card.Img
          variant="top"
          src={RingCollectionImage}
          className="card-img-top custom-image"
        />
        <div className="ring-collection-2020">
          <Fade bottom>
          <Card.Title>COLLECTION 2020</Card.Title>
          </Fade>
          <Card.Text className="card-text">
            <span>Ring's</span>
            <span>Collection</span>
            <span>2020</span>
          </Card.Text>
          <Fade top>
          <Button variant="primary">View Products</Button>

          </Fade>
        </div>
      </Card>
    </div>
  );
};

export default RingCollection;
