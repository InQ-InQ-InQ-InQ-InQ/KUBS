import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import axios from 'axios';

function MainComponent() {
  const navigate = useNavigate();
  const [building, setBuilding] = useState([
    '1강',
    '2강',
    '3강',
    '예대',
    '학생관',
    '복지관',
    '어울림관',
    '4강',
    '5강',
    '6강',
    '7강',
    '8강',
    '제2공학관',
    '대운동장',
    '풋살장',
    '테니스장',
  ]);
  const onMain = (e) => {
    e.preventDefault();
    navigate('/main');
  };

  const onApply = (e) => {
    e.preventDefault();
    navigate('/apply');
  };

  const onMypage = (e) => {
    e.preventDefault();
    navigate('/mypage');
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={onMain}>KUBS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" />
            <Nav>
              <Nav.Link onClick={onApply}>예약</Nav.Link>
              <Nav.Link onClick={onMypage}>마이페이지</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ width: '50%', margin: 'auto', marginTop: '20px' }}>
        {building.map((a, i) => (
          <p
            onClick={() => {
              axios
                .post('http://localhost:8080/api/login', { building: building[i] })
                .then((response) => {
                  console.log(response);
                  // response
                })
                .catch((error) => {
                  console.log(error);
                  // 오류발생시 실행
                });
            }}
          >
            {building[i]}
          </p>
        ))}
      </div>
    </>
  );
}

export default MainComponent;
