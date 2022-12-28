import React from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/RegisterStyle.css';

function RegisterComponent({
  onNameHandler,
  onStudentIdHandler,
  onStudentIdValidateHandler,
  onPasswordHandler,
  onPasswordConfirmHandler,
  onEmailHandler,
  onPhoneNumberHandler,
  onValidateEmailHandler,
  onValidateHandler,
  onValidateConfirmHandler,
  onSubmitHandler,
  handleShow,
  departmentDisable,
  department,
  idCheck,
  sendInvisible,
  verifyInvisible,
}) {
  return (
    <div className="register">
      <div className="register_main">
        <div className="register_formSection">
          <div className="register_formSection_top">
            <img src="https://barun.kyonggi.ac.kr/modules/kgu/templets/default/images/logo.png" alt="KGU LOGO" />
          </div>
          <div className="register_formSection_bottom">
            <Form onSubmit={onSubmitHandler}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="이름" onChange={onNameHandler} />
              </Form.Group>

              {!idCheck ? (
                <InputGroup className="mb-3">
                  <Form.Control placeholder="학번" aria-label="학번" onChange={onStudentIdHandler} />
                  <Button variant="outline-secondary" id="button-addon2" onClick={onStudentIdValidateHandler}>
                    인증
                  </Button>
                </InputGroup>
              ) : (
                <InputGroup className="mb-3">
                  <Form.Control placeholder="학번" aria-label="학번" disabled />
                  <Button variant="outline-secondary" id="button-addon2" disabled>
                    인증
                  </Button>
                </InputGroup>
              )}

              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="비밀번호" onChange={onPasswordHandler} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="비밀번호 확인" onChange={onPasswordConfirmHandler} />
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
                {!sendInvisible ? (
                  <Button variant="outline-secondary" id="button-addon2" onClick={onValidateEmailHandler}>
                    전송
                  </Button>
                ) : (
                  <Button variant="outline-secondary" id="button-addon2" disabled>
                    전송
                  </Button>
                )}
              </InputGroup>
              {sendInvisible ? (
                <InputGroup className="mb-3">
                  <Form.Control placeholder="인증 코드" aria-label="인증 코드" onChange={onValidateHandler} />
                  {!verifyInvisible ? (
                    <Button variant="outline-secondary" id="button-addon2" onClick={onValidateConfirmHandler}>
                      인증
                    </Button>
                  ) : (
                    <Button variant="outline-secondary" id="button-addon2" disabled>
                      인증
                    </Button>
                  )}
                </InputGroup>
              ) : (
                <div />
              )}
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="핸드폰 번호" onChange={onPhoneNumberHandler} />
              </Form.Group>
              <Button id="main_login" variant="primary" type="submit">
                회원가입
              </Button>
            </Form>
            <hr />
            <div className="register_options">
              <Link id="login_link" to="/">
                로그인
              </Link>
            </div>
          </div>
        </div>
        <div className="imageSection" />
      </div>
    </div>
  );
}

export default RegisterComponent;
