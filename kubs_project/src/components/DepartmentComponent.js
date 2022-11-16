import { Button, Form, Modal, InputGroup } from "react-bootstrap";

const DepartmentComponent = ({ onDepartmentHandler, handleClose, show }) => {
  return (
    <Modal size="lg" centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>학과 검색</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="학과를 입력해주세요 (일부 검색도 가능, 예. 공학 → 컴퓨터공학, 기계공학 ...)"
              aria-label="학과"
            />
            <Button variant="outline-secondary" id="button-addon2">
              검색
            </Button>
          </InputGroup>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="학과 이름"
              onChange={onDepartmentHandler}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          확인
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DepartmentComponent;
