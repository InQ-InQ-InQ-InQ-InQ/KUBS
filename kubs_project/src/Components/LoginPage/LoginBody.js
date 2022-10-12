import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import swal from "sweetalert";

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
            <div>
                <form noValidate onSubmit={handleSubmit}>
                    <h1>LoginBody</h1> 
                    <div>
                        <TextField required id="email" name="email" label="ID" variant="outlined" onChange={e => setUsername(e.target.value)}/>
                        <br/><br/>
                        <TextField required id="password" name="password" label="PASSWORD" type="password" variant="outlined" onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <Button type="submit" variant="outlined">로그인</Button>
                    </div>
                    <br />
                    <div>
                        <a>회원가입</a>&nbsp;
                        <a>아이디찾기</a>&nbsp;
                        <a>비밀번호찾기</a>
                    </div>
                </form>
            </div>
        </body>
    );
};

export default LoginBody;