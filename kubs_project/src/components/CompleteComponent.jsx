/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import axios from 'axios';
import '../styles/CompleteStyle.css';
import { useNavigate } from 'react-router-dom';

const CompleteComponent = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState();
  const [place, setPlace] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    axios.post('http://localhost:8080/api/complete').then((response) => {
      setTime(response.data.time);
      setPlace(response.data.placeName);
      setDate(response.data.date);
    });
  }, []);

  console.log(time);
  console.log(place);
  console.log(date);

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
            <p>날짜 : {date}</p>
            <p>시간 : {time}</p>
            <p>강의실 : {place}</p>
            <button onClick={(e)=>{    
              e.preventDefault();
              navigate('/mypage');}}>My Page</button>
            <button onClick={(e)=>{    
              e.preventDefault();
              navigate('/main');}}>Home</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CompleteComponent;
