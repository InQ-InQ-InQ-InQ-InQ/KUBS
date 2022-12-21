/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, ToggleButton, ToggleButtonGroup, Modal, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/CompleteStyle.css";

const CompleteComponent = () => {
  const [variable, setVariable] = useState();
  
  useEffect(() => {    
    axios.get("http://localhost:8080/api/complete").then(response => {
      console.log(response.data);
      setVariable(response.data);
    })    
  }, []);
  
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

      <div className='root'>
        <div className='main'> 
          <div className='container-box'>
          <h4> 예약완료</h4>
          <p>강의실예약이 성공적으로 완료되었습니다.</p>
          <p>날짜 : </p>
          <p>시간 : </p>
          <p>강의실 : </p>
          <button>My Page</button>
          <button>Home</button>
          </div>    
        </div>
      </div>
    </>
  );
};
export default CompleteComponent;