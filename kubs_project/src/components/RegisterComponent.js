import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/RegisterStyle.css";

const RegisterComponent = ({
  onNameHandler,
  onStudentIdHandler,
  onPasswordHandler,
  onPasswordConfirmHandler,
  onEmailHandler,
  onPhoneNumberHandler,
  onVerifyVisibleHandler,
  onValidateHandler,
  onSubmitHandler,
  handleShow,
  departmentDisable,
  department,
  verifyVisible,
}) => {
  return (
    <div className="root">
      <div className="main">
        <div className="register_formSection">
          <div className="register_formSection_top">
            <img
              src="https://barun.kyonggi.ac.kr/modules/kgu/templets/default/images/logo.png"
              alt="KGU LOGO"
            />
          </div>
          <div className="register_formSection_bottom">
            <Form onSubmit={onSubmitHandler}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="이름"
                  onChange={onNameHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="학번"
                  onChange={onStudentIdHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="비밀번호"
                  onChange={onPasswordHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="비밀번호 확인"
                  onChange={onPasswordConfirmHandler}
                />
              </Form.Group>
              {!departmentDisable ? (
                <Form.Group className="mb-3">
                  <Form.Control placeholder="학과" onClick={handleShow} />
                </Form.Group>
              ) : (
                <Form.Group className="mb-3">
                  <Form.Control placeholder={department} disabled />
                </Form.Group>
              )}

              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="경기대학교 이메일"
                  aria-label="경기대학교 이메일"
                  onChange={onEmailHandler}
                />
                {!verifyVisible ? (
                  <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    onClick={onVerifyVisibleHandler}
                  >
                    전송
                  </Button>
                ) : (
                  <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    disabled
                  >
                    전송
                  </Button>
                )}
              </InputGroup>
              {verifyVisible ? (
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="인증 코드"
                    aria-label="인증 코드"
                    onChange={onEmailHandler}
                  />
                  <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    onClick={onValidateHandler}
                  >
                    인증
                  </Button>
                </InputGroup>
              ) : (
                <></>
              )}
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="핸드폰 번호"
                  onChange={onPhoneNumberHandler}
                />
              </Form.Group>
              <Button id="main_login" variant="primary" type="submit">
                회원가입
              </Button>
            </Form>
            <hr />
            <div className="register_options">
              <Link id="login_link" to="/login">
                로그인
              </Link>
            </div>
          </div>
        </div>
        <div className="imageSection"></div>
      </div>
    </div>
  );
};

export default RegisterComponent;
