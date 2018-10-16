import axios from "axios";

export const FETCH_USERS = "FETCH_USERS";
export const REQUEST_USERS = "REQUEST_USERS";
export const RECEIVE_USERS = "RECEIVE_USERS";   

export const requestUsers = () => {
    return {
        type: REQUEST_USERS
    };
}

export const receiveUsers = (data) => {
    return {
        type: RECEIVE_USERS,
        users: data
    };
}

export const fetchUsers = (id) => {
    return (dispatch) => {
        dispatch(requestUsers());
        return axios.get(`/api/users/${id}`)
        .then(data => data.data)
        .then(res => dispatch(receiveUsers(res)));
    };
}