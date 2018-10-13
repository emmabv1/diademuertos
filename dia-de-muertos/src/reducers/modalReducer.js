import {OPEN_MODAL, CLOSE_MODAL} from "../actions/modal-actions";

const modalState = (
    state = { 
        isFetching: false, 
        items:{}
    }, 
    action
) => {
    switch (action.type) {
        case OPEN_MODAL:
            return Object.assign({}, state, {
                isFetching: true
            });
        case CLOSE_MODAL: 
            return Object.assign({}, state, {
                isFetching: false,
                items: action.users
            });
        default:
            return state;
    }
}

export default modalState;