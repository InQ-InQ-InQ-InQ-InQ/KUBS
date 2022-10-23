import { Button, Dialog, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import { SignUpStyle } from "../styles/SignUpStyle";

const SignUpComponent= () => {
    const styles = SignUpStyle();
    const [open, setOpen] = useState(true);

    const closeDialog = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <Dialog className={styles.root} open={open}>
            <DialogTitle>회원가입</DialogTitle>
            <DialogContent className={styles.content}>
                <form className={styles.textField}>
                    <TextField required label="ID" variant="filled" fullWidth></TextField>
                    <TextField required label="PASSWORD" type="password" variant="filled" fullWidth></TextField>
                    <TextField required label="E-MAIL" variant="filled" fullWidth></TextField>
                </form>
                <div>
                    <Button type="submit" variant="contained" onClick={closeDialog}>취소</Button>
                    <Button className={styles.submit} type="submit" variant="contained" color="primary">확인</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SignUpComponent;