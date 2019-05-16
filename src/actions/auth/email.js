import firebase from 'react-native-firebase'
import {signInUser, signUpUser} from "./utils";
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


export function emailSignUp(firstName, lastName, username, password) {
    let profile = {displayName: `${firstName} ${lastName}`, photoURL: "https://i.imgur.com/uwNctrE.jpg",}
    return async (dispatch) => {
        try {
            // login with email and password
            await firebase.auth().createUserWithEmailAndPassword(username, password)
                .then(function (firebaseUserCredential) {
                    let user = firebaseUserCredential.user;
                    user.updateProfile(profile).then(() => {
                            firebaseUserCredential.user.reload().then(() => {
                                const {uid, email} = user;
                                signUpUser({uid, email, ...profile});
                            });
                    }).catch((err) => {
                        console.log(err);
                    })
                });
        } catch (e) {
            console.log(e);
            Alert.alert(e.toString())
        }
    }
}