import firebase from "react-native-firebase";
import {SIGN_IN, SIGN_OUT, UNKNOWN} from "../type";


export const signInUser = (user) => {
    if (user) {
        let {uid, displayName, email, photoURL} = user;
        return {
            type: SIGN_IN,
            payload: {uid, displayName, email, photoURL},
        }
    } else {
        return {type: UNKNOWN}
    }
};

export const signUpUser = (user) => {
    if(user) {
        let {uid, displayName, email, photoURL} = user;
        console.log("Signup", displayName, email);
        firebase.firestore().collection('user').doc(uid).set({uid, displayName, email, photoURL})
            .then((data) => {
                console.log('data ' , data)
            }).catch((error) => {
            console.log(error);
        });
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