import {REQUEST_USERS, RECEIVE_USERS} from "../actions/user-actions";

const users = (
    state = { 
        isFetching: false, 
        items:{}
    }, 
    action
) => {
    switch (action.type) {
        case REQUEST_USERS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_USERS: 
            return Object.assign({}, state, {
                isFetching: false,
                items: action.users
            });
        default:
            return state;
    }
}

export default users;