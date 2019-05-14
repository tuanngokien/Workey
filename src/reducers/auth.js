import {SIGN_IN, SIGN_OUT} from "../actions/type";

const initialState = {
    signedIn: false,
    user: {},
};

export default (state=initialState, action) => {
    switch(action.type){
        case SIGN_IN:
            return {
                ...state,
                signedIn: true,
                user: action.payload
            };
        case SIGN_OUT:
            return {
                ...state,
                signedIn: false,
                user: {},
            };
        default:
            return state;
    }
}