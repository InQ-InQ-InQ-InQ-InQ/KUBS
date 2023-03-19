/* eslint-disable */
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../styles/CompleteStyle.css';

function CompleteComponent({ navigate, pageSet, completeDate, completeStartTime, completeEndTime, completePlaceName }) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">KUBS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>

            <Nav>
              <Nav.Link href="#mypage">My Page</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="root">
        <div className="main">
          <div className="container-box">
            <h4> 예약완료</h4>
            <p>강의실예약이 성공적으로 완료되었습니다.</p>
            <p>날짜 : {completeDate}</p>
            <p>
              시간 : {completeStartTime} ~ {completeEndTime}
            </p>
            <p>강의실 : {completePlaceName}</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                navigate('/mypage');
              }}
            >
              My Page
            </button>
            <button
              onClick={() => {
                pageSet(1);
              }}
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default CompleteComponent;
