import firebase from "react-native-firebase";

export function isAuthenticated() {
    firebase.auth().onAuthStateChanged(user => {
        console.warn(user);
    });
}


export function signOut() {
    firebase.auth().signOut(user => {
        console.warn(user);
    });
}