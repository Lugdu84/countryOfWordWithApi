import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

const NavBar = (props) => (
  <Navbar bg="light" expand="sm">
    <Container fluid>
      <Navbar.Brand href="#"></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/countries" className="nav-link">Countries</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
