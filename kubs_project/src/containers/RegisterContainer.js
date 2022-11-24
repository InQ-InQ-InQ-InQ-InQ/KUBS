import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../thunk/register";
import RegisterComponent from "../components/RegisterComponent";
import DepartmentComponent from "../components/DepartmentComponent";

const RegisterContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [departmentDisable, setDepartmentDisable] = useState(false);
  const [email, setEmail] = useState("");
  const [verifyVisible, setVerifyVisible] = useState(false);
  const [validate, setValidate] = useState("");
  const [show, setShow] = useState(false);

  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };

  const onStudentIdHandler = (e) => {
    setStudentId(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onPasswordConfirmHandler = (e) => {
    setPasswordConfirm(e.currentTarget.value);
  };

  const onPhoneNumberHandler = (e) => {
    setPhoneNumber(e.currentTarget.value);
  };

  const onDepartmentHandler = (id, name) => {
    setDepartmentId(id);
    setDepartmentName(name);
    setDepartmentDisable(true);
    setShow(false);
  };

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onVerifyVisibleHandler = () => {
    setVerifyVisible(true);
  };

  const handleShow = () => setShow(true);

  const onValidateHandler = (e) => {
    setValidate(e.currentTarget.value);
    const testValidate = "123123";
    if (validate !== testValidate)
      return alert("인증 코드가 일치하지 않습니다!");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/login");

    if (password !== passwordConfirm)
      return alert("비밀번호와 비밀번호 확인이 같지 않습니다!");

    let body = {
      name: name,
      studentId: studentId,
      password: password,
      email: email,
      department: departmentId,
      phoneNumber: phoneNumber,
    };

    dispatch(register(body));
  };

  return (
    <>
      <RegisterComponent
        onNameHandler={onNameHandler}
        onStudentIdHandler={onStudentIdHandler}
        onPasswordHandler={onPasswordHandler}
        onPasswordConfirmHandler={onPasswordConfirmHandler}
        onEmailHandler={onEmailHandler}
        onPhoneNumberHandler={onPhoneNumberHandler}
        onVerifyVisibleHandler={onVerifyVisibleHandler}
        onValidateHandler={onValidateHandler}
        onSubmitHandler={onSubmitHandler}
        handleShow={handleShow}
        departmentDisable={departmentDisable}
        department={departmentName}
        verifyVisible={verifyVisible}
      />
      <DepartmentComponent
        onDepartmentHandler={onDepartmentHandler}
        show={show}
      />
    </>
  );
};

export default RegisterContainer;
