/* eslint-disable */
import React, { useState } from 'react';
import { Container, Nav, Navbar, ToggleButton, ToggleButtonGroup, Modal, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import axios from "axios";


const MainComponent = () => {



  



  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">KUBS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>

            <Nav>
              <Nav.Link href="#mypage">My Page</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </>
  );
};




export default MainComponent;