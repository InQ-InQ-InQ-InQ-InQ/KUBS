import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../thunk/login";
import LoginComponent from "../components/LoginComponent";

const LoginContainer = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onUsernameHandler = (e) => {
        setUsername(e.currentTarget.value);
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let body = {
            username: username,
            password: password
        }

        dispatch(login(body));
    }

    return (
        <LoginComponent 
            onUsernameHandler={onUsernameHandler} onPasswordHandler={onPasswordHandler} onSubmitHandler={onSubmitHandler}
        />
    );
};

export default LoginContainer;