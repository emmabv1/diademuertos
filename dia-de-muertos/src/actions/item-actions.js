import axios from "axios";

export const FETCH_ITEMS = "FETCH_ITEMS";
export const REQUEST_ITEMS = "REQUEST_ITEMS";
export const RECEIVE_ITEMS = "RECEIVE_ITEMS";   

export const requestItems = () => {
    return {
        type: REQUEST_ITEMS
    };
}

export const receiveItems = (data) => {
    return {
        type: RECEIVE_ITEMS,
        items: data
    };
}

export const fetchItems = () => {
    return (dispatch) => {
        dispatch(requestItems());
        return axios.get(`/api/users`)
        .then(data => data.data)
        .then(res => dispatch(receiveItems(res)));
    };
}