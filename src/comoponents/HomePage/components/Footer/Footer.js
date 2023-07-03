import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <Container className='footer'>
        <Row className="justify-content-center">
          <Col className='text-left'>
            <h5 className="text-muted ml-2">Copyright © 2020 Shopix</h5>
          </Col>
          <Col className='text-center'>
            <ul className="list-unstyled d-flex justify-content-center">
              <li className="mx-2">
                <a href="https://www.facebook.com/shopix">
                  <FontAwesomeIcon icon={faFacebookF} style={{color:'black'}}/>
                </a>
              </li>
              <li className="mx-2">
                <a href="https://www.twitter.com/shopix">
                  <FontAwesomeIcon icon={faTwitter} style={{color:'black'}} />
                </a>
              </li>
              <li className="mx-2">
                <a href="https://www.youtube.com/shopix">
                  <FontAwesomeIcon icon={faYoutube} style={{color:'black'}} />
                </a>
              </li>
              <li className="mx-2">
                <a href="https://www.pinterest.com/shopix">
                  <FontAwesomeIcon icon={faPinterest} style={{color:'black'}}/>
                </a>
              </li>
              <li className="mx-2">
                <a href="https://www.instagram.com/shopix">
                  <FontAwesomeIcon icon={faInstagram} style={{color:'black'}} />
                </a>
              </li>
            </ul>
          </Col>
          <Col className='text-right'>
            <ul className="list-unstyled d-flex justify-content-center">
              <li className="mx-2">
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li className="mx-2">
                <a href="/terms-of-service">Terms of Service</a>
              </li>
              <li className="mx-2">
                <a href="/language">Language</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
