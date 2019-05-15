import {PUSH_NEW_NOTIFICATION} from "../actions/type";

const initialState = {
    notifications: [],
};

export default (state=initialState, action) => {
    switch(action.type){
        case PUSH_NEW_NOTIFICATION:
            return {
                ...state,
                notifications: [action.payload, ...state.notifications]
            };
        default:
            return state;
    }
}