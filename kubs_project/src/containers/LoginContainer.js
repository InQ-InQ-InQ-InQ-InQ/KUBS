import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginComponent from "../components/LoginComponent";
import { changeField, initializeForm } from "../modules/auth";

const LoginContainer = () => {
    const dispatch = useDispatch();
    const { form } = useSelector(({ auth }) => ({
        form: auth.login
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
    };

    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    return (
        <LoginComponent type="login" form={form} onChange={onChange} onSubmit={onSubmit} />
    );
};

export default LoginContainer;