import { Button, Form, Modal, InputGroup } from "react-bootstrap";
import DepartmentItemComponent from "./DepartmentItemComponents";
import "../styles/DepartmentStyle.css";

const DepartmentComponent = ({
  onDepartmentHandler,
  onDepartmentKeywardHandler,
  onDepartmentFindHandler,
  handleClose,
  show,
}) => {
  const mockDepartmentList = [
    {
      id: 1,
      name: "컴퓨터공학부",
    },
    {
      id: 2,
      name: "컴퓨터과학과",
    },
    {
      id: 3,
      name: "나노공학과",
    },
    {
      id: 4,
      name: "공공안전학부",
    },
    {
      id: 5,
      name: "IT컴퓨터공학부",
    },
    {
      id: 6,
      name: "영어영문학과",
    },
  ];

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>학과 검색</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="wrapContainer" onSubmit={onDepartmentFindHandler}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="학과를 입력해주세요"
              aria-label="학과"
              onChange={onDepartmentKeywardHandler}
            />
            <Button
              type="submit"
              variant="outline-secondary"
              id="button-addon2"
            >
              검색
            </Button>
          </InputGroup>
          <div className="scrollContainer">
            <div className="departmentContainer">
              {mockDepartmentList.map((department) => (
                <DepartmentItemComponent
                  department={department}
                  onDepartmentHandler={onDepartmentHandler}
                />
              ))}
            </div>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default DepartmentComponent;
