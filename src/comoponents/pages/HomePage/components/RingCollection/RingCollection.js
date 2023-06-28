import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./RingCollection.css";
import RingCollectionImage from "../../images/ringCollection.jpg";

const RingCollection = () => {
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    let isScrollingUp = false;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      isScrollingUp = currentScrollPos < prevScrollPos;
      prevScrollPos = currentScrollPos;

      const cardText = document.querySelector(".ring-collection-2020 .card-text");
      const scrollPosition = currentScrollPos;
      const offset = 300; // Adjust the offset value as needed

      // Calculate the translateX value based on the scroll position and scrolling direction
      let translateX = 0;
      if (isScrollingUp) {
        translateX = Math.max(0, scrollPosition - offset);
      } else {
        translateX = Math.min(0, scrollPosition - offset);
      }

      // Apply the translateX value to the card text element
      cardText.style.transform = `translateX(${translateX}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="ring-collection">
      <Card className="custom-card">
        <Card.Img variant="top" src={RingCollectionImage} className="card-img-top" />
        <div className="ring-collection-2020">
          <Card.Title>COLLECTION 2020</Card.Title>
          <Card.Text className="card-text">
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
