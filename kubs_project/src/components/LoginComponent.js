import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/LoginStyle.css";

const LoginComponent = ({
  onUsernameHandler,
  onPasswordHandler,
  onSubmitHandler,
  handleShow,
}) => {
  return (
    <div className="root">
      <div className="main">
        <div className="login_formSection">
          <div className="login_formSection_top">
            <img
              src="https://barun.kyonggi.ac.kr/modules/kgu/templets/default/images/logo.png"
              alt="KGU LOGO"
            />
          </div>
          <div className="login_formSection_bottom">
            <Form onSubmit={onSubmitHandler}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="아이디"
                  onChange={onUsernameHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="비밀번호"
                  onChange={onPasswordHandler}
                />
              </Form.Group>
              <Button id="main_login" variant="primary" type="submit">
                로그인
              </Button>
            </Form>
            <hr />
            <div className="login_options">
              <Link id="find_link" onClick={handleShow}>
                비밀번호찾기
              </Link>
              <Link id="signup_link" to="/register">
                회원가입
              </Link>
            </div>
          </div>
        </div>
        <div className="imageSection"></div>
      </div>
    </div>
  );
};

export default LoginComponent;
