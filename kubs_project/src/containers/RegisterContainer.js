import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, register } from "../modules/auth";
import LoginComponent from "../components/LoginComponent";
import { check } from "../modules/user";
import { useNavigate } from "react-router-dom";

const RegisterContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user
    }));

    const onChange = (e) => {
        const { value, name } =  e.target;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        );
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const { username, password, email } = form;
        dispatch(register({ username, password, email }));
    };

    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    useEffect(() => {
        if (authError) {
            console.log('ERROR!');
            console.log(authError);
        }
        if (auth) {
            console.log('REGISTER SUCCESS');
            console.log(auth);
            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user]);

    return (
        <LoginComponent type="register" form={form} onChange={onChange} onSubmit={onSubmit} />
    );
};

export default RegisterContainer;