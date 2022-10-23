import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const change_field = createAction(
    CHANGE_FIELD,
    ({ form, key, value }) => ({
        form,
        key,
        value,
    }),
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form);

const initialState = {
    register: {
        username: ' ',
        password: ' ',
        email: ' ',
    },
    login: {
        username: ' ',
        password: ' ',
    },
};

const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => produce(state, draft => {
            draft[form][key] = value;
        }),
        [INITIALIZE_FORM]: (state, { payload: form }) => produce({
            ...state,
            [form]: initialState[form],
        }),
    },
    initialState,
);

export default auth;