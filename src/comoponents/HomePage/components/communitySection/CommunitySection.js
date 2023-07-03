import React, { useState } from 'react';
import { Container, Form, Button ,Row ,Col} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import './CommunitySection.css'

const CommunitySection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your desired action, such as sending the email to a server

    // Reset the form after submission
    setEmail('');
  };

  return (
    <Container className="community-section d-flex flex-column align-items-center">
      <Fade bottom>
      <h2 className='community-section-title'>JOIN THE COMMUNITY</h2>
      </Fade>
      <h1>What's New</h1>
      <span>|</span>
      <p community-section-para>Sign up for exclusive early sale access and tailored new arrivals.</p>
      <Form onSubmit={handleSubmit} style={{ width: '800px' }}  >
      <Row>
          <Col xs={9}>
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Yes, here's my email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rectangular-input"
                style={{ height: '80px' }}
              />
            </Form.Group>
          </Col>
          <Col xs={3} className="d-flex align-items-center">
            <Button variant="primary" type="submit" className="rounded-0 custom-button" >
              Sign me up
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default CommunitySection;