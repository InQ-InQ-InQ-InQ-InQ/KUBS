import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import register from '../thunk/register';
import department from '../thunk/department';
import getValidation from '../thunk/getValidation';
import postValidation from '../thunk/postValidation';
import RegisterComponent from '../components/RegisterComponent';
import DepartmentComponent from '../components/DepartmentComponent';

function RegisterContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [departmentList, setDepartmentList] = useState([]);
  const [departmentId, setDepartmentId] = useState('');
  const [departmentName, setDepartmentName] = useState('');
  const [departmentKeyword, setDepartmentKeyword] = useState('');
  const [departmentDisable, setDepartmentDisable] = useState(false);
  const [email, setEmail] = useState('');
  const [sendInvisible, setSendInvisible] = useState(false);
  const [verifyInvisible, setVerifyInvisible] = useState(false);
  const [validate, setValidate] = useState('');
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

  const onDepartmentKeywordHandler = (e) => {
    setDepartmentKeyword(e.currentTarget.value);
  };

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onValidateHandler = (e) => {
    setValidate(e.currentTarget.value);
  };

  const handleShow = () => setShow(true);

  const handleClose = () => {
    setDepartmentKeyword('');
    setDepartmentId('');
    setDepartmentName('');
    setDepartmentList([]);
    setShow(false);
  };

  const onValidateEmailHandler = () => {
    setSendInvisible(true);
    const body = JSON.stringify({
      email,
    });

    dispatch(postValidation(body));
  };

  const onValidateConfirmHandler = () => {
    const body = {
      validate,
    };

    dispatch(getValidation(body)).then((res) => {
      console.log(res);
      if (res.payload.data.success) setVerifyInvisible(true);
      else return alert('인증 코드가 일치하지 않습니다!');
    });
  };

  const onDepartmentFindHandler = (e) => {
    e.preventDefault();
    const body = {
      keyword: departmentKeyword,
    };

    dispatch(department(body)).then((res) => {
      setDepartmentList(res.payload.data);
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate('/');

    if (password !== passwordConfirm) return alert('비밀번호와 비밀번호 확인이 일치하지 않습니다!');

    if (!verifyInvisible) return alert('이메일 인증을 완료하여야 합니다!');

    const body = JSON.stringify({
      name,
      studentId,
      password,
      email,
      departmentId,
      phoneNumber,
    });

    dispatch(register(body)).then((res) => {
      console.log(res);
      if (res.payload.data.success) {
        setName('');
        setStudentId('');
        setPassword('');
        setPasswordConfirm('');
        setPhoneNumber('');
        setDepartmentKeyword('');
        setDepartmentId('');
        setDepartmentName('');
        setDepartmentList([]);
        setEmail('');
      }
    });
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
        onValidateEmailHandler={onValidateEmailHandler}
        onValidateHandler={onValidateHandler}
        onValidateConfirmHandler={onValidateConfirmHandler}
        onSubmitHandler={onSubmitHandler}
        handleShow={handleShow}
        departmentDisable={departmentDisable}
        department={departmentName}
        sendInvisible={sendInvisible}
        verifyInvisible={verifyInvisible}
      />
      <DepartmentComponent
        onDepartmentHandler={onDepartmentHandler}
        onDepartmentKeywordHandler={onDepartmentKeywordHandler}
        onDepartmentFindHandler={onDepartmentFindHandler}
        handleClose={handleClose}
        show={show}
        departmentList={departmentList}
      />
    </>
  );
}

export default RegisterContainer;
