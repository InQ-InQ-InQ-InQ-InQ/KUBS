import { Button, Form, Modal } from "react-bootstrap";
import "../styles/FindStyle.css";

const FindComponent = ({
  onPWFindIdHandler,
  onPWFindEmailHandler,
  onPWFindSubmitHandler,
  handleClose,
  show,
}) => {
  return (
    <Modal size="lg" centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>아이디/비밀번호 찾기</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="findSection" onSubmit={onPWFindSubmitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>비밀번호 찾기</Form.Label>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="아이디"
                onChange={onPWFindIdHandler}
              />
            </Form.Group>
          </Form.Group>
          <Form.Control
            type="email"
            placeholder="KGU 이메일"
            onChange={onPWFindEmailHandler}
          />
          <Form.Text className="text-muted">
            가입했을 때 사용한 KGU 이메일을 입력해주세요.
          </Form.Text>
          <Button className="buttonSection" variant="primary" type="submit">
            찾기
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FindComponent;
