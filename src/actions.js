import axios from 'axios';

const BASE_URL = 'http://localhost:3000/comments';

export const LOAD_COMMENTS = "LOAD_COMMENTS";
export const SET_ACTION = "SET_ACTION";

export const loadComments = () => {
    return {
        type: LOAD_COMMENTS,
        payload: axios.get(BASE_URL)
    }
};

export const setAction = (action, selected) => {
    return {
        type: SET_ACTION,
        payload: {action, selected}
    }
};

export const clearAction = () => {
    return {
        type: SET_ACTION,
        payload: {action: '', selected: ''}
    }
};

export const editComment = (selected, comment) => {
    const url = `${BASE_URL}/${selected}`;

    return action(url, 'PUT', {comment});
};

export const deleteComment = (selected) => {
    const url = `${BASE_URL}/${selected}`;

    return action(url, 'DELETE');
};

const action = (url, method, data) => {
    return function (dispatch) {
        return axios({
            method,
            url,
            data,
            headers:{'Content-Type': 'application/json; charset=utf-8'}
        }).then(() => {
                dispatch(loadComments());
                dispatch(clearAction());
            })
    }
};