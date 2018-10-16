import axios from "axios";

export const FETCH_SESSION = "FETCH_SESSION";
export const REQUEST_SESSION = "REQUEST_SESSION";
export const RECEIVE_SESSION = "RECEIVE_SESSION";   

export const requestSession = () => {
    return {
        type: REQUEST_SESSION
    };
}

export const receiveSession = (data) => {
    return {
        type: RECEIVE_SESSION,
        loggedInUserId: data.user
    };
}

export const fetchSession = () => {
    return (dispatch) => {
        dispatch(requestSession());
        return axios.get('/auth/session')
        .then(data => data.data)
        .then(res => dispatch(receiveSession(res)));
    };
}