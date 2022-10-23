import { makeStyles } from "@material-ui/core";

export const SignUpStyle= makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    textField: {
        margin: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(2),
    },
}));

