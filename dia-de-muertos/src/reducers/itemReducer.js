import {REQUEST_ITEMS, RECEIVE_ITEMS} from "../actions/item-actions";

const items = (
    state = { 
        isFetching: false, 
        list:{}
    }, 
    action
) => {
    switch (action.type) {
        case REQUEST_ITEMS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_ITEMS: 
            return Object.assign({}, state, {
                isFetching: false,
                list: action.items
            });
        default:
            return state;
    }
}

export default items;