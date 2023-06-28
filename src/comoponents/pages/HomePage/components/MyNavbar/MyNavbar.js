import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState, useEffect } from 'react';
import './MyNavbar.css';
// import Header from '../Header/Header';

const MyNavbar = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const navbar = document.getElementById('myNavbar');
      const navbarOffsetTop = navbar.offsetTop;

      if (scrollTop > navbarOffsetTop) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="myNavbar" className={`myNavbar ${isNavbarFixed ? 'fixed-top' : ''}`}>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" border-top border-dark>
        <Container>
          <Navbar.Brand href="#home">Shoppix</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#deets">Shop</Nav.Link>
              <Nav.Link href="#deets">Category</Nav.Link>
              <NavDropdown title="Product details" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Product detail style #1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Product detail style #2
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#deets">Product details</Nav.Link>
              <Nav.Link href="#deets">Search Result</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
