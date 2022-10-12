import { makeStyles } from "@material-ui/core";
// import LoginVisual from './LoginVisual.jpg';

export const LoginStyle = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    option: {
        textAlign: 'center',
    },
    image: {
        display: 'flex',
        height: '100%',
        width: '100%',
    }
}));

