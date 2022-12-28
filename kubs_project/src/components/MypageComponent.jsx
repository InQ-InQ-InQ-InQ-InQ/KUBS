import React from 'react';
import { Container, Nav, Navbar, Card } from 'react-bootstrap';
import MypageItemComponent from './MypageItemComponent';
import img from '../image/LoginVisual.jpg';
import '../styles/MypageStyle.css';

function MypageComponent({ name, studentId, departmentName, phoneNumber, email, reservationList, onMain, onLogout }) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={onMain}>KUBS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" />
            <Nav>
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
          <div className="mypage_reservation">
            <h1>예약 목록</h1>
            {reservationList.length > 0 ? (
              <div>
                {reservationList.map(({ placeName, date, startTime }) => (
                  <MypageItemComponent placeName={placeName} date={date} startTime={startTime} />
                ))}
              </div>
            ) : (
              <div>예약목록이 비어있습니다.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MypageComponent;
