import { REQUEST_SESSION, RECEIVE_SESSION } from "../actions/authState-actions";

const authState = (
    state = {
        isFetching: true,
        loggedInUserId: undefined
    }, 
    action
) => {
    switch (action.type) {
        case REQUEST_SESSION:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_SESSION: 
            return Object.assign({}, state, {
                isFetching: false,
                loggedInUserId: (action.loggedInUserId) ? action.loggedInUserId : undefined
            });
        default:
            return state;
    }
}

export default authState;