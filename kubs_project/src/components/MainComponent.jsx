import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function MainComponent({ building, onMain, onApply, onMypage, handleArea }) {
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
        {building.map((element) => (
          <p onClick={() => handleArea(element.value)}>{element.name}</p>
        ))}
      </div>
    </>
  );
}

export default MainComponent;
