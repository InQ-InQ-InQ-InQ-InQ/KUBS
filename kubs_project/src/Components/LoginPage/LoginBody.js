import React, { useState } from "react";
import { LoginStyle } from "./LoginStyle";
import { Button, Container, Grid, TextField } from "@material-ui/core";
import swal from "sweetalert";
import LoginVisual from './LoginVisual.jpg';

const loginUser = async (credentials) => {
    return fetch("https://www.melivecode.com/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json());
};

const LoginBody = () => {
    const styles = LoginStyle();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await loginUser({
            username,
            password
        });
        if ("accessToken" in response) {
            swal("Success", response.message, "success", {
                buttons: false,
                timer: 2000,
            })
            .then((value) => {
                localStorage.setItem("accessToken", response["accessToken"]);
                localStorage.setItem("user", JSON.stringify(response["user"]));
                window.location.href = "/map";
            });
            console.log("success!")
        } else {
            swal("Failed", response.message, "error");
            console.log("failed!");
        }
    }

    return (
        <body>
            <Container maxWidth="lg" className={styles.root}>
                <Grid container  justifyContent="center" alignItems="center" >
                    <Grid item xs={5} elevation={6}>
                        <div className={styles.paper}>
                            <h1>KUBS SYSTEM</h1> 
                            <form className={styles.form} noValidate onSubmit={handleSubmit}>
                                <div>
                                    <TextField required id="email" name="email" label="ID" variant="filled" fullWidth onChange={e => setUsername(e.target.value)}/>
                                    <br/>
                                    <TextField required id="password" name="password" label="PASSWORD" type="password" variant="filled" fullWidth onChange={e => setPassword(e.target.value)}/>
                                </div>
                                <div>
                                    <Button type="submit" variant="outlined" fullWidth>로그인</Button>
                                </div>
                                <br />
                                <hr />
                                <div className={styles.option}>
                                    <a>아이디/비밀번호찾기</a>
                                    &nbsp;
                                    <a>회원가입</a>
                                </div>
                            </form>
                        </div>
                    </Grid>
                    <Grid item xs={7} elevation={6}>
                        <img className={styles.image} src={LoginVisual}></img>
                    </Grid>
                </Grid>
            </Container>
        </body>
    );
};

export default LoginBody;