import firebase from "react-native-firebase";
import {SIGN_IN, SIGN_OUT, UNKNOWN} from "../type";


export const signInUser = (user) => {
    console.log(user);
    if (user) {
        return {
            type: SIGN_IN,
            payload: user,
        }
    } else {
        return {type: UNKNOWN}
    }
};

export function isAuthenticated() {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged(user => {
            dispatch(signInUser(user));
        });
    };
}

const signOutUser = () => {
    return {
        type: SIGN_OUT,
    };
};


export function signOut() {
    return (dispatch) => {
        firebase.auth().signOut().then(() => {
                dispatch(signOutUser());
            }
        )
    };
}