import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './MyNavbar.css';
import Sidebar from './components/Sidebar/Sidebar';

const MyNavbar = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Move these functions outside the useEffect hook
  const handleMenuClick = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };
  useEffect(() => {
    const contentContainer = document.getElementById('content');
    if (contentContainer) {
      if (isSidebarOpen) {
        contentContainer.classList.add('open-sidebar');
      } else {
        contentContainer.classList.remove('open-sidebar');
      }
    }
  }, [isSidebarOpen]);

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
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className={`my-navbar ${isNavbarFixed ? 'rounded-left' : ''}`}>
        <Container>
          <Navbar.Brand href="#home">
            <div className="menu-container" onClick={handleMenuClick}>
              <span className="menu-icon">
                <i className="fas fa-align-left"></i>
              </span>
              <span className="menu-name">Menu</span>
            </div>
            Shoppix
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#deets">Shop</Nav.Link>
              <Nav.Link href="#deets">Category</Nav.Link>
              <NavDropdown title="Product details" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Product detail style #1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Product detail style #2</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#deets">Product details</Nav.Link>
              <Nav.Link href="#deets">Search Result</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

    </div>
  );
};

export default MyNavbar;
