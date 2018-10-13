import {OPEN_MODAL, CLOSE_MODAL} from "../actions/modal-actions";

const modalState = (
    state = { 
        display: "none"
    }, 
    action
) => {
    switch (action.type) {
        case OPEN_MODAL:
            return Object.assign({}, state, {
                display: action.payload
            });
        case CLOSE_MODAL: 
            return Object.assign({}, state, {
                display: action.payload
            });
        default:
            return state;
    }
}

export default modalState;