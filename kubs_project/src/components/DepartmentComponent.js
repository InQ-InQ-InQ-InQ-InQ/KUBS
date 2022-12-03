import { Button, Form, Modal, InputGroup } from 'react-bootstrap';
import DepartmentItemComponent from './DepartmentItemComponents';
import '../styles/DepartmentStyle.css';

const DepartmentComponent = ({
  onDepartmentHandler,
  onDepartmentKeywordHandler,
  onDepartmentFindHandler,
  handleClose,
  show,
  departmentList,
}) => {
  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>학과 검색</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="wrapContainer" onSubmit={onDepartmentFindHandler}>
          <InputGroup className="mb-3">
            <Form.Control placeholder="학과를 입력해주세요" aria-label="학과" onChange={onDepartmentKeywordHandler} />
            <Button type="submit" variant="outline-secondary" id="button-addon2">
              검색
            </Button>
          </InputGroup>
          <div className="scrollContainer">
            <div className="departmentContainer">
              {departmentList.map((department) => (
                <DepartmentItemComponent department={department} onDepartmentHandler={onDepartmentHandler} />
              ))}
            </div>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default DepartmentComponent;
