import React from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/LoginStyle.css";

const RegisterComponent = ({ onUsernameHandler, onPasswordHandler, onPasswordConfirmHandler, onEmailHandler,onSubmitHandler }) => {
    
    return (
        <Container fluid="md" className="root">
            <Row className="login">
                <Col md={6} className="image">
                </Col>
                <Col md={6}>
                    <div className="logo"/>
                    <Form onSubmit={onSubmitHandler}>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" onChange={onUsernameHandler}/>
                            <Form.Text className="text-muted">
                            We'll never share your ID with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={onPasswordHandler}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password Confirm</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={onPasswordConfirmHandler}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>KGU E-MAIL</Form.Label>
                            <Form.Control type="text" placeholder="E-MAIL" onChange={onEmailHandler}/>
                            <Form.Text className="text-muted">
                            Only Kyonggi Univ. student can access KUBS
                            </Form.Text>
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            SignUp
                        </Button> 
                        <Link to="/login">
                            <Button variant="outline-primary">
                                Login
                            </Button>
                        </Link>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default RegisterComponent;