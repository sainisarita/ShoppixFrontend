import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./RingCollection.css";
import RingCollectionImage from "../../images/ringCollection.jpg";

const RingCollection = () => {
  return (
    <div className="ring-collection">
      <Card className="custom-card">
        <Card.Img variant="top" src={RingCollectionImage} />
        <div className="ring-collection-2020">
          <Card.Title>COLLECTION 2020</Card.Title>
          <Card.Text>
            <span>Ring's</span>
            <span>Collection</span>
            <span>2020</span>
          </Card.Text>
          <Button variant="primary">View Products</Button>
        </div>
      </Card>
    </div>
  );
};

export default RingCollection;
