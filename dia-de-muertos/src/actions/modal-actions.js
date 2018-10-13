export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL"; 

export const openModal = () => {
    return {
        type: OPEN_MODAL,
        payload: {display: "block"}
    };
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL,
        payload: {display: "none"}
    };
}