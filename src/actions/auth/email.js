import firebase from 'react-native-firebase'
import {signInUser} from "./utils";
import {Alert} from "react-native";

export function emailLogin(username, password) {
    return async (dispatch) => {
        try {
            // login with email and password
            const firebaseUserCredential = await firebase.auth().signInWithEmailAndPassword(username, password);
            console.log(firebaseUserCredential);
            dispatch(signInUser(firebaseUserCredential.user));
        } catch (e) {
            console.log(e);
            Alert.alert(e.toString())
        }
    }
}