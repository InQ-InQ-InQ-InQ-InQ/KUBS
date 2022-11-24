import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LoginComponent from "../components/LoginComponent";
import FindComponent from "../components/FindComponent";
import { login } from "../thunk/login";
import { findPW } from "../thunk/findPW";

const LoginContainer = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pwFindId, setPWFindId] = useState("");
  const [pwFindEmail, setPWFindEmail] = useState("");
  const [show, setShow] = useState(false);

  const onUsernameHandler = (e) => {
    setUsername(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onPWFindIdHandler = (e) => {
    setPWFindId(e.currentTarget.value);
  };

  const onPWFindEmailHandler = (e) => {
    setPWFindEmail(e.currentTarget.value);
  };

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      username: username,
      password: password,
    };

    dispatch(login(body));
  };

  const onPWFindSubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      pwFindId: pwFindId,
      pwFindEmail: pwFindEmail,
    };

    dispatch(findPW(body));
  };

  return (
    <>
      <LoginComponent
        onUsernameHandler={onUsernameHandler}
        onPasswordHandler={onPasswordHandler}
        onSubmitHandler={onSubmitHandler}
        handleShow={handleShow}
      />
      <FindComponent
        onPWFindIdHandler={onPWFindIdHandler}
        onPWFindEmailHandler={onPWFindEmailHandler}
        onPWFindSubmitHandler={onPWFindSubmitHandler}
        handleClose={handleClose}
        show={show}
      />
    </>
  );
};

export default LoginContainer;
