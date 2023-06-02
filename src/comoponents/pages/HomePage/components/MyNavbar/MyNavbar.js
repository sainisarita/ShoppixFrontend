// // import Container from 'react-bootstrap/Container';
// // import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';
// // import NavDropdown from 'react-bootstrap/NavDropdown';
// // import React from 'react'
// // import './MyNavbar.css'

// // const MyNavbar = () => {
// //   return (
// //     <div className="myNavbar">
// //          <Navbar collapseOnSelect expand="lg" bg="light" variant="light" border-top border-dark>
// //           <Container>
// //             <Navbar.Brand href="#home">Shoppix</Navbar.Brand>
// //             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
// //             <Navbar.Collapse id="responsive-navbar-nav">
              
// //               <Nav className=''>
// //                 <Nav.Link href="#deets">Shop</Nav.Link>
// //                 <Nav.Link href="#deets">Category</Nav.Link>
// //                 <NavDropdown title="Product details" id="collasible-nav-dropdown">
// //                   <NavDropdown.Item href="#action/3.1">Product detail style #1</NavDropdown.Item>
// //                   <NavDropdown.Item href="#action/3.2">
// //                   Product detail style #1
// //                   </NavDropdown.Item>
// //                   </NavDropdown>
// //                 <Nav.Link href="#deets">Product details</Nav.Link>
// //                 <Nav.Link href="#deets">Search Result</Nav.Link>

               
// //               </Nav>
// //             </Navbar.Collapse>
// //           </Container>
// //         </Navbar>
// //     </div>
       
// //       );
  
// // }

// // export default MyNavbar

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import React from 'react';
// import './MyNavbar.css';

// const MyNavbar = () => {
//   return (
//     <div className="myNavbar">
//       <Navbar collapseOnSelect expand="lg" bg="light" variant="light" border-top border-dark>
//         <Container>
//           <Navbar.Brand href="#home">Shoppix</Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="ml-auto justify-content-end">
//               <Nav.Link href="#deets">Shop</Nav.Link>
//               <Nav.Link href="#deets">Category</Nav.Link>
//               <NavDropdown title="Product details" id="collasible-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Product detail style #1</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">
//                   Product detail style #2
//                 </NavDropdown.Item>
//               </NavDropdown>
//               <Nav.Link href="#deets">Product details</Nav.Link>
//               <Nav.Link href="#deets">Search Result</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default MyNavbar;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import './MyNavbar.css';

const MyNavbar = () => {
  return (
    <div className="myNavbar">
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
