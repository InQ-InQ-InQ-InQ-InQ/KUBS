import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../thunk/register";
import RegisterComponent from "../components/RegisterComponent";

const RegisterContainer = () => {
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [email, setEmail] = useState("");

    const onUsernameHandler = (e) => {
        setUsername(e.currentTarget.value);
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }

    const onPasswordConfirmHandler = (e) => {
        setPasswordConfirm(e.currentTarget.value);
    }

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(password !== passwordConfirm)
            return alert('비밀번호와 비밀번호 확인이 같지 않습니다!');

        let body = {
            username: username,
            password: password,
            passwordConfirm: passwordConfirm,
            email: email,
        }

        dispatch(register(body));
    }

    return (
        <RegisterComponent 
            onUsernameHandler={onUsernameHandler} onPasswordHandler={onPasswordHandler} onPasswordConfirmHandler={onPasswordConfirmHandler} onEmailHandler={onEmailHandler} onSubmitHandler={onSubmitHandler}
        />
    );
};

export default RegisterContainer;