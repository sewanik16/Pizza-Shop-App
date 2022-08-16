import React from "react";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
// import { logoutUser } from "../actions/userAction";
const NavBar = () => {
  
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{height:"100px"}}>
        <Container>
          <Navbar.Brand>
            <Image
              src="images/logo11.png"
              alt="logo" className="App-logo"
              style={{ height: "160px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
           
             <Nav className="ms-auto">
                  
             <LinkContainer to="/cart">
             <Nav.Link>Cart</Nav.Link>
             </LinkContainer>
             <LinkContainer to="/login">
             <Nav.Link>Login</Nav.Link>
             </LinkContainer>
             </Nav>
                
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;