import {combineReducers} from "redux";
import auth from "./auth";
import messaging from "./messaging";

const rootReducer = combineReducers({
    auth,
    messaging,
});

export default rootReducer;