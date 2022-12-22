import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import MypageItemComponent from './MypageItemComponent';
import '../styles/MypageStyle.css';

function MypageComponent() {
  const onLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('authorized');
  };

  const testReservation = [
    { time: '1000~1100', room: '6007' },
    { time: '1200~1300', room: '6008' },
  ];

  const testUser = { studentId: '201912088', name: '신현호', department: '컴퓨터공학부' };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">KUBS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" />
            <Nav>
              <Nav.Link href="/" onClick={onLogout}>
                로그아웃
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="mypage">
        <div className="mypage_main">
          <div>
            <div>{testUser.studentId}</div>
            <div>{testUser.name}</div>
            <div>{testUser.department}</div>
          </div>
          <div>
            <h1>예약 목록</h1>
            {testReservation.map(({ time, room }) => (
              <MypageItemComponent time={time} room={room} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MypageComponent;
