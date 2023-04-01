import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, Image, NavDropdown, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { cartReducer } from "../reducer/cartReducer";
import logo from "../Image/favicon.ico"
const NavBar = () => {
 
  const dispatch = useDispatch()

  const cartState = useSelector(state=>state.cartReducer)

  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container>
       <LinkContainer to="/">
        <Nav.Link>
        <Navbar.Brand><Card.Img variant="top" src={logo} style={{height:'8vh', width:'4vw', marginRight:'1vw'}} />
          Pizza Shop</Navbar.Brand>
          </Nav.Link>
           </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
            <Nav.Link>Cart {cartState.cartItems.length}</Nav.Link>
            </LinkContainer>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default NavBar;
