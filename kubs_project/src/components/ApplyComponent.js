import React, { useState } from 'react';
import { Container, Nav, Navbar, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
//import { Link } from "react-router-dom";
import "../styles/ApplyStyle.css";


const ApplyComponent = () => {
    
    const [radioValue, setRadioValue] = useState('0');


    const radios = [
        { name: '09시', value: '1' },
        { name: '10시', value: '2' },
        { name: '11시', value: '3' },
        { name: '12시', value: '4' },
        { name: '13시', value: '5' },
        { name: '14시', value: '6' },
        { name: '15시', value: '7' },
        { name: '16시', value: '8' },
        { name: '17시', value: '9' },
        { name: '18시', value: '10' },
        { name: '19시', value: '11' },
        { name: '20시', value: '12' },

    ];



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


        <div className="apply-box">
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link eventKey="link-b1">B1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">1층</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">2층</Nav.Link>
                </Nav.Item>   
                <Nav.Item>
                    <Nav.Link eventKey="link-3">3층</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4">4층</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-5">5층</Nav.Link>
                </Nav.Item>
            </Nav>

            <div className="date-box">
                <div style={{margin:'auto', width:'90%', textAlign:'center'}}>
                <p style={{textAlign:'left'}}>이용 시작 시간</p>
                {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="dark"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            style={{margin: '10px'}}
          >
            {radio.name}
          </ToggleButton>
        ))}
                        <br/>
                        <br/>
                        <br/>
                <p style={{textAlign:'left'}}>사용 시간</p>
                <ToggleButtonGroup type="radio" name="options" style={{margin:'10px'}}>
        <ToggleButton id="tbg-radio-1" value={1} variant="dark" style={{paddingLeft:'10px'}}>
          1h
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2} variant="dark">
          2h
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3} variant="dark">
          3h
        </ToggleButton>
      </ToggleButtonGroup>

        </div>
        </div>
    </div>
        </>
    );
};

export default ApplyComponent;