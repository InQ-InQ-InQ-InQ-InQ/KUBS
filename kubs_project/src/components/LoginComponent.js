import React from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/LoginStyle.css";

const LoginComponent = () => {
    
    return (
        <Container fluid="md" className="root">
            <Row className="login">
                <Col md={6} className="image">
                </Col>
                <Col md={6}>
                    <div className="logo"/>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="text" placeholder="ID" />
                            <Form.Text className="text-muted">
                            We'll never share your ID with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button> 

                        <Link to="/register">
                            <Button variant="primary" type="submit">
                                SignUp
                            </Button>
                        </Link>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginComponent;