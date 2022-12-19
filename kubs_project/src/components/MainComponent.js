/* eslint-disable */
import React, { useState } from 'react';
import { Container, Nav, Navbar, ToggleButton, ToggleButtonGroup, Modal, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import axios from "axios";


const MainComponent = () => {

  const [building, setBuilding] = useState(["1강", "2강", "3강", "예대", "학생관", "복지관", "어울림관", "4강", "5강", "6강", "7강", "8강", "제2공학관", "대운동장", "풋살장", "테니스장"]);




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

      <div style={{ width: "50%", margin: "auto", marginTop: "20px" }}>
        {
          building.map(function (a, i) {
            return (
              <>
                <p onClick={() => {
                  axios.post('http://localhost:8080/api/login', { building: building[i] })
                    .then(function (response) {
                      console.log(response);
                      // response  
                    }).catch(function (error) {
                      console.log(error);
                      // 오류발생시 실행
                    })
                }}>
                  {building[i]}</p>
              </>
            )
          })
        }
      </div>
    </>
  );
};




export default MainComponent;