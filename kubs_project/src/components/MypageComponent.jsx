import React from 'react';
import { Container, Nav, Navbar, Card } from 'react-bootstrap';
import MypageItemComponent from './MypageItemComponent';
import img from '../image/LoginVisual.jpg';
import '../styles/MypageStyle.css';

function MypageComponent({
  name,
  studentId,
  departmentName,
  phoneNumber,
  email,
  reservationList,
  onMain,
  onApply,
  onLogout,
}) {
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
              <Nav.Link onClick={onLogout}>로그아웃</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="mypage">
        <div className="mypage_main">
          <div className="mypage_info">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>회원 정보</Card.Title>
                <Card.Text>{studentId}</Card.Text>
                <Card.Text>{name}</Card.Text>
                <Card.Text>{departmentName}</Card.Text>
                <Card.Text>{phoneNumber}</Card.Text>
                <Card.Text>{email}</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <h1>예약 목록</h1>
            {reservationList.map(({ time, room }) => (
              <MypageItemComponent time={time} room={room} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MypageComponent;
