import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../thunk/register";
import RegisterComponent from "../components/RegisterComponent";
import DepartmentComponent from "../components/DepartmentComponent";

const RegisterContainer = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [department, setDepartment] = useState("");
  const [departmentDisable, setDepartmentDisable] = useState(false);
  const [email, setEmail] = useState("");
  const [verifyVisible, setVerifyVisible] = useState(false);
  const [validate, setValidate] = useState("");
  const [show, setShow] = useState(false);

  const onUsernameHandler = (e) => {
    setUsername(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onPasswordConfirmHandler = (e) => {
    setPasswordConfirm(e.currentTarget.value);
  };

  const onDepartmentHandler = (e) => {
    setDepartment(e.currentTarget.value);
    setDepartmentDisable(true);
  };

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onVerifyVisibleHandler = () => {
    setVerifyVisible(true);
  };

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const onValidateHandler = (e) => {
    setValidate(e.currentTarget.value);

    const testValidate = "123123";
    if (validate !== testValidate)
      return alert("인증 코드가 일치하지 않습니다!");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm)
      return alert("비밀번호와 비밀번호 확인이 같지 않습니다!");

    let body = {
      username: username,
      password: password,
      passwordConfirm: passwordConfirm,
      department: department,
      email: email,
    };

    dispatch(register(body));
  };

  return (
    <>
      <RegisterComponent
        onUsernameHandler={onUsernameHandler}
        onPasswordHandler={onPasswordHandler}
        onPasswordConfirmHandler={onPasswordConfirmHandler}
        onEmailHandler={onEmailHandler}
        onVerifyVisibleHandler={onVerifyVisibleHandler}
        onValidateHandler={onValidateHandler}
        onSubmitHandler={onSubmitHandler}
        handleShow={handleShow}
        departmentDisable={departmentDisable}
        department={department}
        verifyVisible={verifyVisible}
      />
      <DepartmentComponent
        onDepartmentHandler={onDepartmentHandler}
        handleClose={handleClose}
        show={show}
      />
    </>
  );
};

export default RegisterContainer;
