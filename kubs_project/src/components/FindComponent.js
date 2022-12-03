import { Button, Form, Modal, InputGroup } from "react-bootstrap";
import "../styles/FindStyle.css";

const FindComponent = ({
  onPWFindIdHandler,
  onPWFindPhoneNumberHandler,
  onPWFindEmailHandler,
  onPWFindSubmitHandler,
  onChangePasswordHandler,
  onChangePasswordConfirmHandler,
  onChangePasswordSubmitHandler,
  handleClose,
  show,
  onValidateEmailHandler,
  onValidateHandler,
  onValidateConfirmHandler,
  sendInvisible,
  verifyInvisible,
  pwFindInvisible,
}) => {
  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>아이디/비밀번호 찾기</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!pwFindInvisible ? (
          <Form className="findSection" onSubmit={onPWFindSubmitHandler}>
            <Form.Group className="mb-3">
              <Form.Label>비밀번호 찾기</Form.Label>
              <Form.Control
                className="mb-3"
                type="text"
                placeholder="아이디"
                onChange={onPWFindIdHandler}
              />
              <Form.Control
                className="mb-3"
                type="text"
                placeholder="핸드폰번호"
                onChange={onPWFindPhoneNumberHandler}
              />
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="경기대학교 이메일"
                  aria-label="경기대학교 이메일"
                  onChange={onPWFindEmailHandler}
                />
                {!sendInvisible ? (
                  <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    onClick={onValidateEmailHandler}
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
              {sendInvisible ? (
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="인증 코드"
                    aria-label="인증 코드"
                    onChange={onValidateHandler}
                  />
                  {!verifyInvisible ? (
                    <Button
                      variant="outline-secondary"
                      id="button-addon2"
                      onClick={onValidateConfirmHandler}
                    >
                      인증
                    </Button>
                  ) : (
                    <Button
                      variant="outline-secondary"
                      id="button-addon2"
                      disabled
                    >
                      인증
                    </Button>
                  )}
                </InputGroup>
              ) : (
                <></>
              )}
            </Form.Group>
            <Button className="buttonSection" variant="primary" type="submit">
              찾기
            </Button>
          </Form>
        ) : (
          <Form onSubmit={onChangePasswordSubmitHandler}>
            <Form.Group>
              <Form.Control
                className="mb-3"
                type="password"
                placeholder="새 비밀번호"
                onChange={onChangePasswordHandler}
              />
              <Form.Control
                className="mb-3"
                type="password"
                placeholder="새 비밀번호 확인"
                onChange={onChangePasswordConfirmHandler}
              />
            </Form.Group>
            <Button className="buttonSection" variant="primary" type="submit">
              변경
            </Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default FindComponent;
