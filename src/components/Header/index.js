import React from "react";
import "./style.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

import headshot from "../../images/dan-oneil-headshot.jpg";

function Header() {
  return (
    <Navbar variant="dark" bg="primary" expand="sm">
      <Navbar.Brand href="#about">
        <Image src={headshot} width="45" height="45" className="d-inline-block align-top rounded" alt=""/> Dan O'Neil
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav>
          <Nav.Link href="#/about">About Me</Nav.Link>
          <Nav.Link href="#/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#/skills">Skills</Nav.Link>
          <Nav.Link href="#/resume">Resume</Nav.Link>
          <Nav.Link href="#/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
