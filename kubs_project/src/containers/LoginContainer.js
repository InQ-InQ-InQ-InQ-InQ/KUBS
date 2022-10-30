import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { changeField, initializeForm } from "../modules/auth";
import LoginComponent from "../components/LoginComponent";

const LoginContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user
    }));

    const onChange = (e) => {
        const { value, name } =  e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        );
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const { username, password } = form;
        dispatch(login({ username, password }));
    };

    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    useEffect(() => {
        if(authError) {
            console.log("오류 발생");
            console.log(authError);
            return;
        }
        if(auth) {
            console.log("로그인 성공");
            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    useEffect(() => {
        if(user) {
            navigate('/');
        }
    }, [user]);

    return (
        <LoginComponent type="login" form={form} onChange={onChange} onSubmit={onSubmit} />
    );
};

export default LoginContainer;