import React from 'react';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import './EaringCollection.css';
import Fade from 'react-reveal/Fade';
import EaringImage from '../../images/earings.jpg'

const EaringCollection = () => {
  return (
    <div className="earing-collection">
        <Card className="custom-card">
      <Card.Img variant="top" src={EaringImage} />
      <div className="earing-collection-2020">
        <Fade bottom>
          <Card.Title>COLLECTION 2020</Card.Title>
        </Fade>
          <Card.Text>
            <span>Earing's</span>
            <span>Collection</span>
            <span>2020</span>
          </Card.Text>
          <Fade top >
          <Button variant="primary">View Products</Button>

          </Fade>
        </div>
    </Card>
    </div>
  );
}

export default EaringCollection;
