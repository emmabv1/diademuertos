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

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(requestUsers());
        // May be an issue using an AxiosPromise here
        return axios.get('/api/users')
        //.then(res => console.log(res))
        .then(data => data.data)
        .then(res => dispatch(receiveUsers(res)));
    };
}